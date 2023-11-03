export function Visita() {
  return (
    <div>
      <h1 className="text-3xl font-medium text-zinc-900 mt-10">Pendentes</h1>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-5">
        <div className="shadow p-3">
          <section className="flex flex-col text-sm gap-1">
            <h2>Luis Felipe Garção Silva</h2>

            <span>Telefone: 18997943842</span>
            <span>Email: felipe-mara2003@hotmail.com</span>

            <p>
              <strong>Motivo: </strong>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, repudiandae sed. Unde iure laboriosam illum asperiores
              veniam officia doloremque nam, tempora ipsa mollitia error, cumque
              exercitationem distinctio voluptates in recusandae!
            </p>
          </section>

          <div className="grid grid-cols-2 gap-2 border-t">
            <button className="bg-red-500 rounded-md p-2 text-white mt-3">
              Recusar
            </button>

            <button className="bg-violet-500 p-2 rounded-md text-white mt-3">
              Aceitar
            </button>
          </div>
        </div>

        <div className="shadow p-3">
          <section className="flex flex-col text-sm gap-1">
            <h2>Luis Felipe Garção Silva</h2>

            <span>Telefone: 18997943842</span>
            <span>Email: felipe-mara2003@hotmail.com</span>

            <p>
              <strong>Motivo: </strong>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, repudiandae sed. Unde iure laboriosam illum asperiores
              veniam officia doloremque nam, tempora ipsa mollitia error, cumque
              exercitationem distinctio voluptates in recusandae!
            </p>
          </section>

          <div className="grid grid-cols-2 gap-2 border-t">
            <button className="bg-red-500 rounded-md p-2 text-white mt-3">
              Recusar
            </button>

            <button className="bg-violet-500 p-2 rounded-md text-white mt-3">
              Aceitar
            </button>
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-medium text-zinc-900 mt-10">Aceitas</h1>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-5">
        <div className="shadow p-3">
          <section className="flex flex-col text-sm gap-1">
            <h2>Luis Felipe Garção Silva</h2>

            <span>Telefone: 18997943842</span>
            <span>Email: felipe-mara2003@hotmail.com</span>

            <p>
              <strong>Motivo: </strong>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, repudiandae sed. Unde iure laboriosam illum asperiores
              veniam officia doloremque nam, tempora ipsa mollitia error, cumque
              exercitationem distinctio voluptates in recusandae!
            </p>
          </section>

          <button className="bg-green-500 p-2 rounded-md text-white mt-3 w-full">
            Aceita
          </button>
        </div>
      </div>

      <h1 className="text-3xl font-medium text-zinc-900 mt-10">Recusas</h1>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-5">
        <div className="shadow p-3">
          <section className="flex flex-col text-sm gap-1">
            <h2>Luis Felipe Garção Silva</h2>

            <span>Telefone: 18997943842</span>
            <span>Email: felipe-mara2003@hotmail.com</span>

            <p>
              <strong>Motivo: </strong>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, repudiandae sed. Unde iure laboriosam illum asperiores
              veniam officia doloremque nam, tempora ipsa mollitia error, cumque
              exercitationem distinctio voluptates in recusandae!
            </p>
          </section>

          <button className="bg-red-500 p-2 rounded-md text-white mt-3 w-full">
            Recusado
          </button>
        </div>
      </div>

      <h1 className="text-3xl font-medium text-zinc-900 mt-10">Finalizadas</h1>


      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-5">
        <div className="shadow p-3">
          <section className="flex flex-col text-sm gap-1">
            <h2>Luis Felipe Garção Silva</h2>

            <span>Telefone: 18997943842</span>
            <span>Email: felipe-mara2003@hotmail.com</span>

            <p>
              <strong>Motivo: </strong>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, repudiandae sed. Unde iure laboriosam illum asperiores
              veniam officia doloremque nam, tempora ipsa mollitia error, cumque
              exercitationem distinctio voluptates in recusandae!
            </p>
          </section>

          <button className="bg-gray-300 p-2 rounded-md text-white mt-3 w-full">
            Finalizado
          </button>
        </div>
      </div>

    </div>
  );
}
