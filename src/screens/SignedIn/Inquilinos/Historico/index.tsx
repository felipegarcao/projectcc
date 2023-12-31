import { useContext, useEffect, useState } from "react";
import { Avatar } from "../../../../components/Avatar";
import { Select } from "../../../../components/Form/Select";
import { SelectItem } from "../../../../components/Form/Select/SelectItem";
import { converterNumeroParaData } from "../../../../utils/converterNumeroParaData";
import { useLocation } from "react-router-dom";
import { listIdMyHouseUser } from "../../../../services/resources/properties";
import { Loader2, PlusCircle } from "lucide-react";
import Modal from "react-modal";
import * as Input from "../../../../components/Input";
import { customStyles } from "./util";
import moment from "moment";
import { BoxPagamento } from "./BoxPagamento";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterPagamentoSchema } from "./validation";
import { toast } from "react-toastify";
import {
  countValorFaltante,
  createPagamento,
  listPagamentos,
  listPagamentosUser,
} from "../../../../services/resources/pagamentos";
import { useUser } from "../../../../hooks/useUser";
import { Button } from "../../../../components/Button";
import { tenantsIdResource } from "../../../../services/resources/user";
import { applicationContext } from "../../../../context/ApplicationContext";
import { WhatsAppButton } from "../../DetailsHome/local-components/right-content/WhatsAppButton";

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
  id_pagamento: number;
}

interface Count {
  total: number;
}

export function Historico() {
  const [dados, setDados] = useState({} as any);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [months, setMonths] = useState<MonthData[]>([]);
  const [pagamentos, setPagamentos] = useState<PagamentosProps[]>([]);
  const [count, setCount] = useState({} as Count);
  
  const {newRequest, setNewRequest} = useContext(applicationContext)

  const location = useLocation();

  const { user } = useUser();

  async function carregarDados() {
    try {

      countValorFaltante(location.state.idUser).then((result) =>
      setCount(result)
    );

      if (location.state.status) {
        await listPagamentosUser(location.state.idUser).then((result) =>
          setPagamentos(result)
        );

        await tenantsIdResource(location.state.idUser).then((result) =>
          setDados(result?.user)
        );
      } else if (!location.state.status && user?.is_admin === 0) {
        await listPagamentosUser(location.state.idUser).then((result) =>
          setPagamentos(result)
        );

        await tenantsIdResource(location.state.idUser).then((result) =>
          setDados(result?.user)
        );
      } else {
        await listIdMyHouseUser({
          idCasa: location.state.idCasa,
          idUser: location.state.idUser,
        }).then((x) => {
          listPagamentos(location.state.idCasa).then((result) =>
            setPagamentos(result)
          );
         

          setDados(x);
        });
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
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
    watch,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(RegisterPagamentoSchema),
    defaultValues: {
      nome_mes: "",
      status: "",
      ano: moment().format("YYYY"),
      valor_faltante: "0",
    },
  });


  useEffect(() => {
    carregarDados();

    generateMonths();
  }, [newRequest]);

  const onSubmit = async (data: any) => {
    await createPagamento({
      ...data,
      valor_faltante: Number(data.valor_faltante),
      casa_id: location.state.idCasa,
      user_id: location.state.idUser,
    });

    setTimeout(() => {
      setIsOpen(false);
    }, 2000);

    setNewRequest(Math.random());
  };

  return (
    <>
      <div className=" grid xl:grid-cols-[1fr_300px] grid-cols-1 gap-5">
        <div className="grid md:grid-cols-[200px_1fr] grid-cols-1 shadow-md rounded-md">
          <div className="flex flex-col justify-center items-center gap-4 border-r border-gray-200 p-6">
            <Avatar />
            <h2 className="text-gray-600 font-medium">{dados?.name}</h2>
            <span className="text-sm text-gray-400 text-center">{dados?.profissao}</span>
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
          <p className="text-3xl font-mono">
            R$ {count.total ? count.total : 0}
          </p>
          <WhatsAppButton message='Olá estou precisando de auxilio, em relação ao imovel.' />
    
        </div>
      </div>

      <div className="flex items-center justify-between">
        <h2 className="my-10 text-2xl  text-violet-600">Histórico</h2>

        {user?.is_admin === 1 && (
          <Button
            variant="primary"
            type="submit"
            className="mt-2 flex items-center gap-3"
            onClick={openModal}
          >
            {isSubmitting ? (
              <div className="flex justify-center items-center">
                <Loader2 className="animate-spin  text-white" />
              </div>
            ) : (
              <>
                <PlusCircle /> <span>Registrar Pagamento</span>
              </>
            )}
          </Button>
        )}
      </div>

      <div>
        <div>
          <h2 className="my-5 text-2xl  text-violet-600">2023</h2>

          {pagamentos?.map((item, index) => (
            <BoxPagamento
              key={index}
              nome_mes={item.nome_mes}
              id_pagamento={item.id_pagamento}
              status={item.status}
              user_name={item.name}
              variant={item.status}
              className="grid grid-cols-3"
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
        <h2 className="text-2xl font-mono mb-3">Registrar Pagamento</h2>

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
            {watch("status") === "pago parceladamente" && (
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
            )}
          </div>

          <Button variant="primary" type="submit" className="mt-2 w-full">
            {isSubmitting ? (
              <div className="flex justify-center items-center">
                <Loader2 className="animate-spin  text-white" />
              </div>
            ) : (
              "Salvar Edição"
            )}
          </Button>
        </form>
      </Modal>
    </>
  );
}
