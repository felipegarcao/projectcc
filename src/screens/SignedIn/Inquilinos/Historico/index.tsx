import { useEffect, useState } from "react";
import { Avatar } from "../../../../components/Avatar";
import { Select } from "../../../../components/Form/Select";
import { SelectItem } from "../../../../components/Form/Select/SelectItem";
import { converterNumeroParaData } from "../../../../utils/converterNumeroParaData";
import { useLocation } from "react-router-dom";
import {  listIdMyHouseUser } from "../../../../services/resources/properties";
import { PlusCircle } from "lucide-react";
import Modal from "react-modal";
import * as Input from "../../../../components/Input";
import { customStyles } from "./util";
import moment from "moment";
import { BoxPagamento } from "./BoxPagamento";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterPagamentoSchema } from "./validation";
import { Tenants } from "../../../../@types/tenants";
import { tenantsResource } from "../../../../services/resources/user";
import { toast } from "react-toastify";
import { Spinner } from "../../../../components/Spinner";
import {
  countValorFaltante,
  createPagamento,
  listPagamentos,
} from "../../../../services/resources/pagamentos";
import { useUser } from "../../../../hooks/useUser";

interface MonthData {
  month: number;
  status: string;
}

interface PagamentosProps {
  nome_mes: string;
  status: "pendente" | "pago" | "atrasado" | "pago_parcelatamente";
  ano: string;
  valor_faltante: string;
  user_id: string;
  casa_id: number;
  name: string;
}

interface Count {
  total: number;
}

export function Historico() {
  const [dados, setDados] = useState({} as any);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [months, setMonths] = useState<MonthData[]>([]);
  const [tenants, setTenants] = useState<Tenants[]>([]);
  const [loading, setLoading] = useState(true);
  const [pagamentos, setPagamentos] = useState<PagamentosProps[]>([]);
  const [count, setCount] = useState({} as Count);

  const location = useLocation();

  const { user } = useUser();

  async function carregarDados() {
    try {
      await listIdMyHouseUser({
        idCasa: location.state.idCasa,
        idUser: location.state.idUser
      }).then((x) => {

        listPagamentos(location.state.idUser).then((result) => setPagamentos(result));
        countValorFaltante(location.state.idUser).then((result) => setCount(result));
   
        setDados(x);
      });

      await tenantsResource().then((result) => {
        setTenants(result?.user);
      });
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
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

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterPagamentoSchema),
    defaultValues: {
      nome_mes: "",
      status: "",
      ano: moment().format("YYYY"),
      valor_faltante: '0',
    },
  });

  useEffect(() => {
    carregarDados();

    generateMonths();
  }, []);

  const onSubmit = async (data: any) => {
    await createPagamento({
      ...data,
      valor_faltante: Number(data.valor_faltante),
      casa_id: location.state.idCasa,
      user_id: location.state.idUser
    });

    setTimeout(() => {
      setIsOpen(false);
    }, 2000);
  };

  return (
    <>
      <div className=" grid xl:grid-cols-[1fr_300px] grid-cols-1 gap-5">
        <div className="grid md:grid-cols-[150px_1fr] grid-cols-1 shadow-md rounded-md">
          <div className="flex flex-col justify-center items-center gap-4 border-r border-gray-200 p-6">
            <Avatar />
            <h2 className="text-gray-600 font-medium">{dados?.name}</h2>
            <span className="text-sm text-gray-400">{dados?.profissao}</span>
          </div>
          <div className="p-6">
            <div>
              <span className="text-gray-500 text-lg">
                Informações Pessoais (Inquilino Atual)
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

           
          </div>
        </div>
        <div className="shadow-md p-3 flex items-center flex-col justify-evenly">
          <h3 className="text-2xl font-mono">Total a Pagar</h3>
          <p className="text-3xl font-mono">R$ {count.total ? count.total  : 0}</p>
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
        {user?.is_admin && (
          <button
            onClick={openModal}
            className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700  flex items-center gap-3"
          >
            <PlusCircle /> <span>Registrar Pagamento</span>
          </button>
        )}
      </div>

      <div>
        <div>
          <h2 className="my-5 text-2xl  text-violet-600">2023</h2>

          {pagamentos.map((item, index) => (
            <BoxPagamento
              key={index}
              nome_mes={item.nome_mes}
              status={item.status}
              user_name={item.name}
              variant={item.status}
            />
          ))}
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-2xl font-mono mb-3">Regitrar Pagamento</h2>

        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-700">Mês</label>

              <Controller
                name="nome_mes"
                control={control}
                render={({ field }) => (
                  <Select
                    placeholder="Selecione"
                    onValueChange={field.onChange}
                    {...field}
                  >
                    {months.map((months, index) => (
                      <SelectItem
                        key={index}
                        value={converterNumeroParaData(months.month)}
                        text={converterNumeroParaData(months.month)}
                      />
                    ))}
                  </Select>
                )}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-700">Ano</label>
              <Controller
                control={control}
                name="ano"
                render={({ field }) => (
                  <Input.Root>
                    <Input.Control disabled {...field} />
                  </Input.Root>
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-5">
            <div>
              <label className="text-sm font-medium text-zinc-700">
                Status
              </label>

              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <Select
                    placeholder="Selecione"
                    onValueChange={field.onChange}
                    {...field}
                  >
                    <SelectItem value="pendente" text="Pendente" />
                    <SelectItem value="pago" text="Pago" />
                    <SelectItem value="atrasado" text="Atrasado" />
                    <SelectItem
                      value="pago parceladamente"
                      text="Pago Parceladamente"
                    />
                  </Select>
                )}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-zinc-700">
                Valor Faltante
              </label>
              <Controller
                name="valor_faltante"
                control={control}
                render={({ field }) => (
                  <Input.Root>
                    <Input.Control type="number" {...field} />
                  </Input.Root>
                )}
              />
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
