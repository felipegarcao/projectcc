import { Download, FileText } from "lucide-react";
import {
  listContratos,
  listContratosUserLogged,
} from "../../../../services/resources/contrato";
import { useEffect, useState } from "react";
import { Contrato } from "../../../../@types/contrato";
import { useUser } from "../../../../hooks/useUser";
import moment from 'moment'

export function ListagemContrato() {
  const [contratos, setContratos] = useState<Contrato[]>([]);
  const [loading, setLoading] = useState(false)

  const { user } = useUser();


  function download(blob: any, fileName?: string) {

    
    const a = document.createElement('a');
    a.href = blob;
    a.download = fileName || 'contrato_download';

    document.body.appendChild(a)

    a.click();

    document.body.removeChild(a)

    URL.revokeObjectURL(blob)
  }

  async function carregarDados() {
    setLoading(true)
    try {
      if (user?.is_admin) {
        await listContratos().then((x) => setContratos(x?.contrato));
      } else {
        await listContratosUserLogged(user?.id).then((x) =>
          setContratos(x?.contrato)
        );
      }
    } catch (err: any) {

    } finally {
      setLoading(false)
    }
  }

 
  
  useEffect(() => {
    carregarDados();
  }, []);

  return (
    <div className="border p-3 rounded mt-5">
      <h1>Contratos</h1>
      {
        loading ? (
          <h1>Carregando dados...</h1>
        ) : (
          <>
  {
        contratos?.length === 0 && <span className="mt-4 text-violet-600">Nenhum contrato disponivel</span>
      }

      {contratos?.map((item, index) => (
        <div
          className="shadow-md p-3 rounded-md my-4 flex flex-col md:grid md:items-center md:grid-cols-[200px_1fr_1fr] gap-5 md:gap-0 justify-between"
          key={index}
        >
          <div className="flex items-center gap-2">
            <FileText className="text-red-500" />
            <span>Documento </span>
          </div>

          <div className="flex items-center gap-3">
            <span>Data Inicio: {moment(item.data_vigencia).format('DD/MM/YYYY')}</span>
            <span>-</span>
            <span>Data Fim: {item.data_vencimento}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button className="bg-violet-500 text-white p-2 rounded-full flex items-center justify-center text-xs">
                LF
              </button>
              <span>{item.name}</span>
            </div>
            <button className="bg-violet-500 p-1 rounded-lg text-white" onClick={() => download(item.blob)}>
              <Download />
            </button>
          </div>
        </div>
      ))}
          </>
        )
      }

      
    </div>
  );
}
