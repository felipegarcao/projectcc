import { CardItem } from "./CardItem";

export function CardsReport() {
  return (
    <div className="grid grid-cols-3 gap-3">
      <CardItem
        counter={20}
        redirect="/teste1"
        text="Faturar com pagamento em atraso"
      />
      <CardItem
        counter={20}
        redirect="/teste2"
        text="Faturar com pagamento em atraso"
      />
      <CardItem
        counter={20}
        redirect="/teste3"
        text="Faturar com pagamento em atraso"
      />
    </div>
  );
}
