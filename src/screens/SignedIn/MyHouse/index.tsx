import { useNavigate } from "react-router-dom";

export function MyHouse() {

  const navigate = useNavigate()

  return (
    <>
      <div className="mt-5 grid grid-cols-1 gap-3">
        <div className="border border-gray-200 rounded-lg shadow">
          <div className="grid lg:grid-cols-[360px_1fr] md:grid-cols-[250px_1fr] grid-cols-1">
            <img
              className=" h-[240px] w-full"
              src="https://www.plantapronta.com.br/projetos/161/01.jpg"
              alt=""
            />

            <div className="p-4 w-full flex flex-col justify-between">
              <header>
                <span className="text-xs">
                  Montalvão, Presidente Prudente - SP
                </span>
                <h2 className="font-semibold text-lg">
                  Casa com 1 Quartos Para Aluguel, 20m²
                </h2>
              </header>

              <section>
                <div className="flex items-center gap-4">
                  <span>20 m²</span>
                  <span>1 Quartos</span>
                  <span>2 Banheiro</span>
                  <span>1 Vagas</span>
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <span className="p-2  text-xs rounded-lg bg-gray-200">
                    Garagem
                  </span>
                </div>
              </section>

              <footer className="flex items-center justify-between">
                <p>
                  <strong>R$ 400</strong> /mês
                </p>
                <div>
                  <button className="text-violet-500 p-2 hover:bg-violet-200 rounded-lg"
                    onClick={() => navigate('/historico')}
                  >
                    Detalhes
                  </button>

                  <button
                    className="text-white p-2 bg-violet-500 rounded-lg"
                  >
                    Editar
                  </button>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
