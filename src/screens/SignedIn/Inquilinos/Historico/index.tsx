import { useEffect, useState } from "react";
import { Avatar } from "../../../../components/Avatar";
import { Select } from "../../../../components/Form/Select";
import { SelectItem } from "../../../../components/Form/Select/SelectItem";
import { converterNumeroParaData } from "../../../../utils/converterNumeroParaData";
import { useLocation } from "react-router-dom";
import { listIdMyHouse } from "../../../../services/resources/properties";
import { PlusCircle } from "lucide-react";
import Modal from "react-modal";
import * as Input from "../../../../components/Input";
import { customStyles } from "./util";
import moment from "moment";

interface MonthData {
  month: number;
  status: string;
}

export function Historico() {
  const [dados, setDados] = useState({} as any);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [months, setMonths] = useState<MonthData[]>([]);

  const location = useLocation();

  async function carregarDados() {
    await listIdMyHouse(location.state).then((x) => setDados(x));
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const generateMonths = () => {
    const months: MonthData[] = [];
    for (let i = 0; i < 12; i++) {
      months.push({
        month: i + 1,
        status: "pendente", // Definindo inicialmente como "pendente"
      });
    }
    setMonths(months);
  };

  useEffect(() => {
    carregarDados();

    generateMonths();
  }, []);

  return (
    <>
      <div className=" grid grid-cols-[1fr_300px] gap-5">
        <div className="grid md:grid-cols-[150px_1fr] grid-cols-1 shadow-md rounded-md">
          <div className="flex flex-col justify-center items-center gap-4 border-r border-gray-200 p-6">
            <Avatar />
            <h2 className="text-gray-600 font-medium">{dados.name}</h2>
            <span className="text-sm text-gray-400">{dados.profissao}</span>
          </div>
          <div className="p-6">
            <div>
              <span className="text-gray-500 text-lg">
                Informações Pessoais
              </span>

              <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 mt-3  gap-2 sm:gap-0">
                <div className="flex flex-col">
                  <strong className="text-gray-500 text-sm">Email</strong>
                  <span className="text-sm text-gray-400">{dados.email}</span>
                </div>
                <div className="flex flex-col">
                  <strong className="text-gray-500 text-sm">Telefone:</strong>
                  <span className="text-sm text-gray-400">{dados.phone}</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 mt-3 gap-2 sm:gap-0">
              <div className="flex flex-col">
                <strong className="text-gray-500 text-sm">CPF:</strong>
                <span className="text-sm text-gray-400">{dados.cpf}</span>
              </div>
              <div className="flex flex-col">
                <strong className="text-gray-500 text-sm">RG:</strong>
                <span className="text-sm text-gray-400">{dados.rg}</span>
              </div>
            </div>

            <button className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700 block md:hidden mt-3 w-full">
              Voltar
            </button>
          </div>
        </div>
        <div className="shadow-md p-3 flex items-center flex-col justify-evenly">
          <h3 className="text-2xl font-mono">Total a Pagar</h3>
          <p className="text-3xl font-mono">R$ 0,00</p>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5518997943842&text=Ol%C3%A1%2C%20vim%20do%20Service%20Silva%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es "
            className="bg-green-400 p-3 text-white rounded-md text-center"
            rel="noreferrer"
          >
            Contatar Suporte
          </a>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <h2 className="my-10 text-2xl  text-violet-600">Histórico</h2>
        <button
          onClick={openModal}
          className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700  flex items-center gap-3"
        >
          <PlusCircle /> <span>Registrar Pagamento</span>
        </button>
      </div>

      <div>
        <div>
          <h2 className="my-5 text-2xl  text-violet-600">2023</h2>

          <div className="grid grid-cols-[1fr_200px] items-center justify-between shadow-md p-4 rounded-lg">
            <span>{converterNumeroParaData(1)}</span>

            <Select placeholder="Selecione">
              <SelectItem value="pendente" text="Pendente" />
              <SelectItem value="pago" text="Pago" />
              <SelectItem value="atrasado" text="Atrasado" />
              <SelectItem
                value="pago parceladamente"
                text="Pago Parceladamente"
              />
            </Select>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-2xl font-mono mb-3">Regitrar Pagamento</h2>

        <form className="w-full">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-700">Mês</label>

              <Select placeholder="Selecione">
                {months.map((months, index) => (
                  <SelectItem
                    key={index}
                    value={converterNumeroParaData(months.month)}
                    text={converterNumeroParaData(months.month)}
                  />
                ))}
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-700">Ano</label>
              <Input.Root>
                <Input.Control value={moment().format("YYYY")} disabled />
              </Input.Root>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-5">
            <div>
              <label className="text-sm font-medium text-zinc-700">
                Status
              </label>
              <Select placeholder="Selecione">
                <SelectItem value="pendente" text="Pendente" />
                <SelectItem value="pago" text="Pago" />
                <SelectItem value="atrasado" text="Atrasado" />
                <SelectItem
                  value="pago parceladamente"
                  text="Pago Parceladamente"
                />
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-zinc-700">
                Valor Faltante
              </label>
              <Input.Root>
                <Input.Control />
              </Input.Root>
            </div>
          </div>

          <button className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700  flex items-center gap-3 mt-3 w-full justify-center">
            Salvar
          </button>
        </form>
      </Modal>
    </>
  );
}
