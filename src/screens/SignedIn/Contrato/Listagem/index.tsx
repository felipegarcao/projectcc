import { Download, FileText } from "lucide-react";
import { listContratos } from "../../../../services/resources/contrato";
import { useEffect, useState } from "react";
import { Contrato } from "../../../../@types/contrato";
import { saveAs } from "file-saver";

export function ListagemContrato() {
  const [contratos, setContratos] = useState<Contrato[]>([]);

  async function carregarDados() {
    listContratos().then((x) => setContratos(x.contrato));
  }

  useEffect(() => {
    carregarDados();
  }, []);

  return (
    <div className="border p-3 rounded mt-5">
      <h1>Contratos</h1>

      {contratos?.map((item, index) => (
        <div
          className="shadow-md p-3 rounded-md my-4 flex flex-col md:flex-row md:items-center gap-5 md:gap-0 justify-between"
          key={index}
        >
          <div className="flex items-center gap-2">
            <FileText className="text-red-500" />
            <span>Documento {Math.ceil(Math.random())}</span>
          </div>

          <div className="flex items-center gap-12">
            <div className="flex items-center gap-2">
              <button className="bg-violet-500 text-white p-2 rounded-full flex items-center justify-center text-xs">
                LF
              </button>
              <span>{item.name}</span>
            </div>
            <button className="bg-violet-500 p-1 rounded-lg text-white">
              <Download />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
