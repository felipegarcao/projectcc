import "react-multi-carousel/lib/styles.css";

import { images, responsive } from "./util";

import Carousel from "react-multi-carousel";
import { MapPin } from "lucide-react";

export function ContentDialog() {
  return (
    <div>
      <Carousel autoPlay responsive={responsive}>
        {images.map((item) => (
          <img
            key={item}
            style={{ width: "100%", height: "100%" }}
            src={item}
          />
        ))}
      </Carousel>

      <div className="mt-3 ">
        <h2>
          Casa em Condominio - 3 Quartos - Rua 4 Vicente Pires - Alto Padrao -
          800 m
        </h2>
        <div className="flex items-center gap-3">
          <MapPin size={15} />
          <span className="text-xs">Av. João Pessoa, 1000</span>
        </div>

        <div className="grid grid-cols-2 md:flex items-center mt-5 gap-4 flex-wrap">
          
          <div className="flex items-center gap-2 p-2 bg-gray-100 rounded-lg">
            <MapPin size={15} />
            <span className="text-xs">Av. João Pessoa, 1000</span>
          </div>

          <div className="flex items-center gap-2 p-2 bg-gray-100 rounded-lg">
            <MapPin size={15} />
            <span className="text-xs">Av. João Pessoa, 1000</span>
          </div>

          <div className="flex items-center gap-2 p-2 bg-gray-100 rounded-lg">
            <MapPin size={15} />
            <span className="text-xs">Av. João Pessoa, 1000</span>
          </div>

          <div className="flex items-center gap-2 p-2 bg-gray-100 rounded-lg">
            <MapPin size={15} />
            <span className="text-xs">Av. João Pessoa, 1000</span>
          </div>

          <div className="flex items-center gap-2 p-2 bg-gray-100 rounded-lg">
            <MapPin size={15} />
            <span className="text-xs">Av. João Pessoa, 1000</span>
          </div>

          <div className="flex items-center gap-2 p-2 bg-gray-100 rounded-lg">
            <MapPin size={15} />
            <span className="text-xs">Av. João Pessoa, 1000</span>
          </div>

          <div className="flex items-center gap-2 p-2 bg-gray-100 rounded-lg">
            <MapPin size={15} />
            <span className="text-xs">Av. João Pessoa, 1000</span>
          </div>
        </div>
      </div>
    </div>
  );
}
