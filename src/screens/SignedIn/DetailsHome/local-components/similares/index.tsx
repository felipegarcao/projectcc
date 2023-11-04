import { useNavigate, useParams } from "react-router-dom";
import { listSimilaresImoveis } from "../../../../../services/resources/properties";
import { useEffect, useState } from "react";
import { DetailsHouse } from "../../../../../@types/Imoveis";
import { limitarCaracteres } from "../../../../../utils/format-bytes";

export function Similares() {
  const [houses, setHouses] = useState<DetailsHouse[]>([]);

  const { id } = useParams();

  const navigate = useNavigate()

  async function carregarDados() {
    if (id) {
      await listSimilaresImoveis(id).then((x) => setHouses(x.houses));
    }
  }

  useEffect(() => {
    carregarDados();
  }, []);


  function handleNavigate(id: number) {
    navigate(`/detalhamento-casa/${id}`)
    window.location.reload()
  }
  return (
    <>
      <h2 className="text-3xl text-center my-10">
        Encontre mais imóveis similares
      </h2>

      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
        {houses.map((house) => (
          <div
            className="max-w-sm rounded overflow-hidden shadow-lg"
            key={house.id}
          >
            <img
              className="w-full h-[200px]"
              src="https://img.freepik.com/fotos-gratis/uma-casa-azul-com-um-telhado-azul-e-um-fundo-do-ceu_1340-25953.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698019200&semt=ais"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">R$ {house.preco}</div>
              <div className="flex items-center gap-2 flex-wrap  text-sm">
                <span className="flex items-center gap-1">
                  <strong>{house.tamanho}</strong> m²
                </span>
                <span className="flex items-center gap-1">
                  <strong>{house.dormitorios}</strong> Quartos
                </span>
                <span className="flex items-center gap-1">
                  <strong>{house.suites}</strong> Banheiro
                </span>
                <span className="flex items-center gap-1">
                  <strong>{house.vagas_garagem}</strong> Vagas
                </span>
              </div>
              <p className="text-gray-700 text-sm text-justify mt-3">
                {limitarCaracteres(house.observacao, 200)}
              </p>

              <button onClick={() => handleNavigate(house.id)} className="text-white block text-center mt-3 p-2 bg-violet-500 rounded-lg w-full">Detalhes</button>
              
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
