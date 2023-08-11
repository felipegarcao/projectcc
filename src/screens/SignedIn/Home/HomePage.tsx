import { CardsReport } from "../../../components/CardsReport";
import { ImoveisDisponiveis } from "../Imoveis/Disponiveis";
import { TimeLine } from "../../../components/TimeLine";

export function HomePage() {
  return (
    <div>
      <TimeLine />

      <CardsReport />

      <h1 className="text-3xl font-medium text-zinc-900 mt-10">
        Casas Disponíveis
      </h1>

      <div className="mt-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
        <ImoveisDisponiveis />
        <ImoveisDisponiveis />
        <ImoveisDisponiveis />
      </div>
    </div>
  );
}
