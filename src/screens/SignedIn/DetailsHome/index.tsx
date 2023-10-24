import { Armchair, Copy, ShowerHead, Car } from "lucide-react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function DetailsHome() {
  return (
    <div>
      <Carousel
        showThumbs={false}
        showArrows={true}
        emulateTouch={true}
        showStatus={false}
        centerMode={true}
        centerSlidePercentage={33.3}
      >
        <div>
          <img src="https://github.com/felipegarcao.png" alt="" />
        </div>
        <div>
          <img src="https://github.com/felipegarcao.png" alt="" />
        </div>
        <div>
          <img src="https://github.com/felipegarcao.png" alt="Image 3" />
        </div>
        <div>
          <img src="https://github.com/felipegarcao.png" alt="Image 3" />
        </div>
        <div>
          <img src="https://github.com/felipegarcao.png" alt="Image 3" />
        </div>
      </Carousel>
      <div className="grid grid-cols-[1fr_300px] gap-6">
        <div>
          <h2>
            Casa com 3 Quartos e 1 banheiro para Alugar, 135 m² por R$ 800/Mês
          </h2>
          <span>Brasil Novo, Presidente Prudente - SP</span>
          <div className="grid grid-cols-4 gap-4">
            <div className="flex items-center gap-4">
              <Copy />
              <span>135m²</span>
            </div>
            <div className="flex items-center gap-4">
              <Armchair />
              <span> 3 quartos</span>
            </div>
            <div className="flex items-center gap-4">
              <ShowerHead />
              <div className="flex flex-col">
                <span> 1 banheiro </span>
                <span>1 suíte</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Car />
              <span>2 vagas</span>
            </div>
          </div>

          <div className="border rounded-md p-4 flex justify-between">
            <div className="flex gap-2">
              <img
                src="https://github.com/felipegarcao.png"
                alt=""
                className="h-20 w-20"
              />
              <div className="flex flex-col justify-between">
                <span>ANUNCIANTE</span>
                <span>Imobiliaria Luis Felipe</span>
              </div>
            </div>
            <span>7 avaliações</span>
          </div>

          <h2 className="text-3xl text-center my-10">
            Encontre mais imóveis similares
          </h2>

          <div className="grid grid-cols-2 gap-6">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                className="w-full h-[200px]"
                src="https://github.com/felipegarcao.png"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">R$ 1.150</div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="flex items-center gap-2">
                    <strong>120</strong> m²
                  </span>
                  <span className="flex items-center gap-2">
                    <strong>3</strong> Quartos
                  </span>
                  <span className="flex items-center gap-2">
                    <strong>1</strong> Banheiro
                  </span>
                  <span className="flex items-center gap-2">
                    <strong>2</strong> Vagas
                  </span>
                </div>
                <p className="text-gray-700 text-sm text-justify mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                className="w-full h-[200px]"
                src="https://github.com/felipegarcao.png"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">R$ 1.150</div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="flex items-center gap-2">
                    <strong>120</strong> m²
                  </span>
                  <span className="flex items-center gap-2">
                    <strong>3</strong> Quartos
                  </span>
                  <span className="flex items-center gap-2">
                    <strong>1</strong> Banheiro
                  </span>
                  <span className="flex items-center gap-2">
                    <strong>2</strong> Vagas
                  </span>
                </div>
                <p className="text-gray-700 text-sm text-justify mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>
          </div>

          <a href="/" className="text-center mt-4 text-violet-500 block">
            Ver mais casas disponiveis
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <div className="bg-gray-200 p-4 flex flex-col border rounded-md">
              <span>ALUGUEL</span>
              <span>
                <strong>R$ 800</strong>/mês
              </span>
            </div>
          </div>

          <div className="p-4 flex flex-col border rounded-md gap-4">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span>ANUNCIANTE</span>
                <span>Imobiliária Kelly Imóveis</span>
              </div>
              <img
                src="https://github.com/felipegarcao.png"
                alt=""
                className="h-10 w-10"
              />
            </div>

            {/* https://api.whatsapp.com/send?phone=5518997943842&text=Ol%C3%A1%2C%20vim%20do%20Service%20Silva%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es */}
            <button className="bg-green-400 p-3 text-white rounded-md">
              Contato por WhatsApp
            </button>
            <button className="border-2 border-yellow-500 text-yellow-500 p-3 rounded-md">
              Quero Visitar
            </button>

            <button className="rounded-md p-3 bg-red-500 text-white">
              Quero mais informações
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
