import { ImoveisDisponiveis } from "../Imoveis/Disponiveis";
import { TimeLine } from "../../../components/TimeLine";
import { useEffect, useState } from "react";
import { quantidadesCounts } from "../../../services/resources";
import { Spinner } from "../../../components/Spinner";
import { houseDisponiveis } from "../../../services/resources/properties";
import { CasasDisponiveisProps } from "../Imoveis/Disponiveis/types";
import { toast } from "react-toastify";

export function HomePage() {
  const [countContratos, setCountContratos] = useState(0);
  const [countInquilinos, setCountInquilinos] = useState(0);
  const [countAlugadas, setCountAlugadas] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingCasa, setLoadingCasa] = useState(false);
  const [houses, setHouses] = useState<CasasDisponiveisProps[]>([]);

  useEffect(() => {
    carregarQuantidade();
    carregarCasasDisponiveis();
  }, []);

  async function carregarQuantidade() {
    setLoading(true);
    try {
      await quantidadesCounts().then((count) => {
        setCountContratos(count.contratos);
        setCountInquilinos(count.inquilinos);
        setCountAlugadas(count.casas);
      });
    } catch (err) {
    } finally {
      setLoading(false);
    }
  }

  async function carregarCasasDisponiveis() {
    setLoadingCasa(true);
    try {
      await houseDisponiveis().then((x) => setHouses(x.houses));
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoadingCasa(false);
    }
  }

  return (
    <>
      <TimeLine />

      <div className="lg:grid lg:grid-cols-3 gap-3 flex flex-col justify-center items-center mt-4">
        <div className="lg:max-w-md py-4 px-8 bg-white shadow-lg rounded-lg w-full ">
          <div className="flex items-center justify-center flex-col">
            {loading ? (
              <Spinner />
            ) : (
              <h2 className="text-gray-800 text-3xl font-semibold">
                {countContratos}
              </h2>
            )}
            <p className="mt-2 text-gray-600 text-center">Contratos Gerados</p>
          </div>
        </div>

        <div className="lg:max-w-md py-4 px-8 bg-white shadow-lg rounded-lg w-full ">
          <div className="flex items-center justify-center flex-col">
            {loading ? (
              <Spinner />
            ) : (
              <h2 className="text-gray-800 text-3xl font-semibold">
                {countInquilinos}
              </h2>
            )}

            <p className="mt-2 text-gray-600 text-center">Inquilinos</p>
          </div>
        </div>

        <div className="lg:max-w-md py-4 px-8 bg-white shadow-lg rounded-lg w-full ">
          <div className="flex items-center justify-center flex-col">
            {loading ? (
              <Spinner />
            ) : (
              <h2 className="text-gray-800 text-3xl font-semibold">
                {countAlugadas}
              </h2>
            )}
            <p className="mt-2 text-gray-600 text-center">Casas Alugadas</p>
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-medium text-zinc-900 mt-10">
        Casas Disponíveis
      </h1>
      {loadingCasa ? (
        <Spinner />
      ) : (
        <div className="mt-5 grid grid-cols-1 gap-3">
          {houses.map((item, index) => (
            <ImoveisDisponiveis key={index} {...item} />
          ))}
        </div>
      )}
    </>
  );
}
