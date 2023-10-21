import { MapPin } from "lucide-react";

export function MyProfile() {
  return (
    <div className="grid grid-cols-[280px_1fr] gap-5 mt-5">
      <div className="shadow p-5">
        <div className="flex flex-col gap-3 items-center justify-center">
          <img
            src="https://github.com/felipegarcao.png"
            className="rounded-full w-1/2 h-1/2"
            alt=""
          />
          <h2>Luis Felipe Garção Silva</h2>

          <span>Desenvolvedor Front-End</span>

          <span className="flex items-center text-xs gap-2">
            <MapPin size={20} />
            Presidente Prudente, SP, Brasil
          </span>

          <div className="border-t p-3 w-full flex justify-center">
            <span className="text-xs font-bold">
              Conta Criada em: MARÇO, 2021
            </span>
          </div>
        </div>
      </div>
      <div className="shadow p-5">
        <div>
          <h2>Teste</h2>
        </div>
      </div>
    </div>
  );
}
