import { MessageCircle, Search } from "lucide-react";
import * as Input from "../../../components/Input";

export function Requests() {
  return (
    <>
      <form className="my-5 flex items-center gap-2">
        <Input.Root>
          <Input.Prefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control id="email" type="email" />
        </Input.Root>

        <button className="bg-violet-500 p-2 rounded-md text-white">
          Consultar
        </button>
      </form>
      <div className="grid grid-cols-3 gap-4 mt-5">
        <div className="shadow p-3">
          <section className="flex flex-col text-sm">
            <h2>Luis Felipe Garção Silva</h2>
            <span>CPF: 446.570.298-19</span>
            <span>Telefone: (18) 99794-3842</span>
            <span>Email: felipe-mara2003@hotmail.com</span>
          </section>
          <footer className="flex justify-end my-3">
            <button>
              <MessageCircle />
            </button>
          </footer>
          <div className="grid grid-cols-2 gap-2 border-t">
            <button className="bg-red-500 rounded-md p-2 text-white mt-3">
              Recusar
            </button>
            <button className="bg-green-500 text-white rounded-md p-2 mt-3">
              Aceitar
            </button>
          </div>
        </div>
        <div className="shadow p-3">
          <section className="flex flex-col text-sm">
            <h2>Luis Felipe Garção Silva</h2>
            <span>CPF: 446.570.298-19</span>
            <span>Telefone: (18) 99794-3842</span>
            <span>Email: felipe-mara2003@hotmail.com</span>
          </section>
          <footer className="flex justify-end my-3">
            <button>
              <MessageCircle />
            </button>
          </footer>
          <div className="grid grid-cols-2 gap-2 border-t">
            <button className="bg-red-500 rounded-md p-2 text-white mt-3">
              Recusar
            </button>
            <button className="bg-green-500 text-white rounded-md p-2 mt-3">
              Aceitar
            </button>
          </div>
        </div>

        <div className="shadow p-3">
          <section className="flex flex-col text-sm">
            <h2>Luis Felipe Garção Silva</h2>
            <span>CPF: 446.570.298-19</span>
            <span>Telefone: (18) 99794-3842</span>
            <span>Email: felipe-mara2003@hotmail.com</span>
          </section>
          <footer className="flex justify-end my-3">
            <button>
              <MessageCircle />
            </button>
          </footer>
          <div className="grid grid-cols-2 gap-2 border-t">
            <button className="bg-red-500 rounded-md p-2 text-white mt-3">
              Recusar
            </button>
            <button className="bg-green-500 text-white rounded-md p-2 mt-3">
              Aceitar
            </button>
          </div>
        </div>

        <div className="shadow p-3">
          <section className="flex flex-col text-sm">
            <h2>Luis Felipe Garção Silva</h2>
            <span>CPF: 446.570.298-19</span>
            <span>Telefone: (18) 99794-3842</span>
            <span>Email: felipe-mara2003@hotmail.com</span>
          </section>
          <footer className="flex justify-end my-3">
            <button>
              <MessageCircle />
            </button>
          </footer>
          <div className="grid grid-cols-2 gap-2 border-t">
            <button className="bg-red-500 rounded-md p-2 text-white mt-3">
              Recusar
            </button>
            <button className="bg-green-500 text-white rounded-md p-2 mt-3">
              Aceitar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
