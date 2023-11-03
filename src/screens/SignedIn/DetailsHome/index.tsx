import { Armchair, Copy, ShowerHead, Car } from "lucide-react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { RightContent } from "./local-components/right-content";

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
          <img src="https://img.freepik.com/fotos-gratis/uma-casa-azul-com-um-telhado-azul-e-um-fundo-do-ceu_1340-25953.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698019200&semt=ais" alt="" />
        </div>
        <div>
          <img src="https://img.freepik.com/fotos-gratis/uma-casa-azul-com-um-telhado-azul-e-um-fundo-do-ceu_1340-25953.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698019200&semt=ais" alt="" />
        </div>
        <div>
          <img src="https://img.freepik.com/fotos-gratis/uma-casa-azul-com-um-telhado-azul-e-um-fundo-do-ceu_1340-25953.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698019200&semt=ais" alt="Image 3" />
        </div>
        <div>
          <img src="https://img.freepik.com/fotos-gratis/uma-casa-azul-com-um-telhado-azul-e-um-fundo-do-ceu_1340-25953.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698019200&semt=ais" alt="Image 3" />
        </div>
        <div>
          <img src="https://img.freepik.com/fotos-gratis/uma-casa-azul-com-um-telhado-azul-e-um-fundo-do-ceu_1340-25953.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698019200&semt=ais" alt="Image 3" />
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
                src="https://img.freepik.com/fotos-gratis/uma-casa-azul-com-um-telhado-azul-e-um-fundo-do-ceu_1340-25953.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698019200&semt=ais"
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

          <div className="grid grid-cols-3 gap-3">
        
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                className="w-full h-[200px]"
                src="https://img.freepik.com/fotos-gratis/uma-casa-azul-com-um-telhado-azul-e-um-fundo-do-ceu_1340-25953.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698019200&semt=ais"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">R$ 1.150</div>
                <div className="flex items-center gap-2 flex-wrap  text-sm">
                  <span className="flex items-center gap-1">
                    <strong>120</strong> m²
                  </span>
                  <span className="flex items-center gap-1">
                    <strong>3</strong> Quartos
                  </span>
                  <span className="flex items-center gap-1">
                    <strong>1</strong> Banheiro
                  </span>
                  <span className="flex items-center gap-1">
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
                src="https://img.freepik.com/fotos-gratis/uma-casa-azul-com-um-telhado-azul-e-um-fundo-do-ceu_1340-25953.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698019200&semt=ais"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">R$ 1.150</div>
                <div className="flex items-center gap-2 flex-wrap  text-sm">
                  <span className="flex items-center gap-1">
                    <strong>120</strong> m²
                  </span>
                  <span className="flex items-center gap-1">
                    <strong>3</strong> Quartos
                  </span>
                  <span className="flex items-center gap-1">
                    <strong>1</strong> Banheiro
                  </span>
                  <span className="flex items-center gap-1">
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
                src="https://img.freepik.com/fotos-gratis/uma-casa-azul-com-um-telhado-azul-e-um-fundo-do-ceu_1340-25953.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698019200&semt=ais"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">R$ 1.150</div>
                <div className="flex items-center gap-2 flex-wrap  text-sm">
                  <span className="flex items-center gap-1">
                    <strong>120</strong> m²
                  </span>
                  <span className="flex items-center gap-1">
                    <strong>3</strong> Quartos
                  </span>
                  <span className="flex items-center gap-1">
                    <strong>1</strong> Banheiro
                  </span>
                  <span className="flex items-center gap-1">
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


        <RightContent />
       
      </div>
    </div>
  );
}
