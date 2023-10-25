

export function ImoveisDisponiveis() {
  return (
    <div className="border border-gray-200 rounded-lg shadow">
      <div className="flex">
        <img
          className=" w-[360px] h-[240px]"
          src="https://www.plantapronta.com.br/projetos/161/01.jpg"
          alt=""
        />

        <div className="p-4 w-full flex flex-col justify-between">
          <header>
            <span className="text-xs">Brasil Novo, Presidente Prundente - SP</span>
            <h2 className="font-semibold text-lg">Casa com 3 Quartos Para Aluguel, 135m²</h2>
          </header>

          <section>
            <div className="flex items-center gap-4">
              <span>135 m²</span>
              <span>3 Quartos</span>
              <span>1 Banheiro</span>
              <span>2 Vagas</span>
            </div>

            <div>
              <span>Garagem</span>
            </div>
          </section>

          <footer className="flex items-center justify-between">
            <p>
              <strong>R$ 900</strong> /mês
            </p>
            <a href="detalhamento-casa/1" className="text-violet-500 p-2 hover:bg-violet-200 rounded-lg">Detalhes</a>
          </footer>
        </div>
      </div>
    </div>
  );
}
