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
      <div className="grid grid-cols-[1fr_200px] gap-6">
        <div>
          <h2>
            Casa com 3 Quartos e 1 banheiro para Alugar, 135 m² por R$ 800/Mês
          </h2>
          <span>Brasil Novo, Presidente Prudente - SP</span>
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
