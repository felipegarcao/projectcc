import { CasasDisponiveisProps } from "./types";


export function ImoveisDisponiveis(item: CasasDisponiveisProps) {
  return (
    <div className="border border-gray-200 rounded-lg shadow">
      <div className="grid lg:grid-cols-[360px_1fr] md:grid-cols-[250px_1fr] grid-cols-1">
        <img
          className=" h-[240px] w-full"
          src="https://www.plantapronta.com.br/projetos/161/01.jpg"
          alt=""
        />

        <div className="p-4 w-full flex flex-col justify-between">
          <header>
            <span className="text-xs">{item.bairro}, {item.cidade} - {item.estado}</span>
            <h2 className="font-semibold text-lg">Casa com {item.dormitorios} Quartos Para Aluguel, {item.tamanho}m²</h2>
          </header>

          <section>
            <div className="flex items-center gap-4">
              <span>{item.tamanho} m²</span>
              <span>{item.dormitorios} Quartos</span>
              <span>2 Banheiro</span>
              <span>{item.vagas_garagem} Vagas</span>
            </div>

            <div>
              <span>Garagem</span>
            </div>
          </section>

          <footer className="flex items-center justify-between">
            <p>
              <strong>R$ {item.preco}</strong> /mês
            </p>
            <a href={`detalhamento-casa/${item.id}`} className="text-violet-500 p-2 hover:bg-violet-200 rounded-lg">Detalhes</a>
          </footer>
        </div>
      </div>
    </div>
  );
}
