import { CardItem } from "./CardItem";

export function CardsReport() {
  return (
    <div className="lg:grid lg:grid-cols-3 gap-3 flex flex-col justify-center items-center mt-4">
      <CardItem
        counter={20}
        redirect="/teste1"
        text="Contratos Gerados"
      />
      <CardItem
        counter={20}
        redirect="/teste2"
        text="Inquilinos"
      />
      <CardItem
        counter={20}
        redirect="/teste3"
        text="Casas Alugadas"
      />
    </div>
  );
}
