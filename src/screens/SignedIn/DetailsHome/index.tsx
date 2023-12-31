import { Armchair, Copy, ShowerHead, Car } from "lucide-react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { RightContent } from "./local-components/right-content";
import { useEffect, useState } from "react";
import { listIdImoveis } from "../../../services/resources/properties";
import { useParams } from "react-router-dom";
import { DetailsHouse, House } from "../../../@types/Imoveis";
import { Similares } from "./local-components/similares";
import { useResponsive } from "../../../hooks/useResponsive";

export function DetailsHome() {
  const { id } = useParams();
  const [data, setData] = useState({} as DetailsHouse);
  const screenType = useResponsive();

  useEffect(() => {
    carregarDados();
  }, []);

  async function carregarDados() {
    if (id) {
      await listIdImoveis(id).then((x) => setData(x.house));
    }
  }


  const message = `Ola gostaria de falar sobre, Casa com ${data.dormitorios} Quartos e ${data.suites} banheiro para
  Alugar, ${data.tamanho} m² por R$ ${data.preco}/Mês, de indentificação ${data.id}`

  return (
    <div>
      <Carousel
        showThumbs={false}
        showArrows={true}
        emulateTouch={true}
        showStatus={false}
        centerMode={true}
        centerSlidePercentage={screenType === "Desktop" ? 33.3 : 100}
      >
        <div>
          <img
            src="https://www.construyehogar.com/wp-content/uploads/2014/12/Fachada-de-casa-de-dos-plantas-y-tres-dormitorios-560x389.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://www.construyehogar.com/wp-content/uploads/2014/12/Fachada-de-casa-de-dos-plantas-y-tres-dormitorios-560x389.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://www.construyehogar.com/wp-content/uploads/2014/12/Fachada-de-casa-de-dos-plantas-y-tres-dormitorios-560x389.jpg"
            alt="Image 3"
          />
        </div>
        <div>
          <img
            src="https://www.construyehogar.com/wp-content/uploads/2014/12/Fachada-de-casa-de-dos-plantas-y-tres-dormitorios-560x389.jpg"
            alt="Image 3"
          />
        </div>
        <div>
          <img
            src="https://www.construyehogar.com/wp-content/uploads/2014/12/Fachada-de-casa-de-dos-plantas-y-tres-dormitorios-560x389.jpg"
            alt="Image 3"
          />
        </div>
      </Carousel>
      <div className="grid md:grid-cols-[1fr_300px] grid-cols-1  gap-6 ">
        <div>
          <h2>
            Casa com {data.dormitorios} Quartos e {data.suites} banheiro para
            Alugar, {data.tamanho} m² por R$ {data.preco}/Mês
          </h2>
          <span>
            {data.bairro}, {data.cidade} - {data.estado}
          </span>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-4 my-4">
            <div className="flex items-center gap-4">
              <Copy />
              <span>{data.tamanho}m²</span>
            </div>
            <div className="flex items-center gap-4">
              <Armchair />
              <span> {data.suites ? data.suites : 0} quartos</span>
            </div>
            <div className="flex items-center gap-4">
              <ShowerHead />
              <div className="flex flex-col">
                <span> {data.suites ? data.suites : 0} banheiro </span>
                <span>{data.suites ? data.suites : 0} suíte</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Car />
              <span>{data.vagas_garagem ? data.vagas_garagem : 0} vagas</span>
            </div>
          </div>

          <div className="border rounded-md p-4 flex justify-between">
            <div className="flex gap-2">
              <img
                src="https://www.construyehogar.com/wp-content/uploads/2014/12/Fachada-de-casa-de-dos-plantas-y-tres-dormitorios-560x389.jpg"
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

          <p className="text-sm text-gray-700 leading-relaxed mt-3 text-justify">
            {data.observacao}
          </p>
        </div>

        <RightContent preco={data.preco} message={message} />
      </div>
      <Similares />

      <a href="/" className="text-center mt-4 text-violet-500 block">
        Ver mais casas disponiveis
      </a>
    </div>
  );
}
