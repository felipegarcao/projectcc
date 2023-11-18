import { toast } from "react-toastify";
import { api } from "../api";

interface PagamentoProps {
  nome_mes: string;
  status: string;
  ano: string;
  valor_faltante: number;
  user_id: string;
  casa_id: number;
}

export async function createPagamento(data: PagamentoProps) {
  try {
    await api.post("/pagamento", {
      ...data,
    });

    toast.success("Pagamento created successfully");
  } catch (err: any) {
    toast.error(err.response.data.message)
  }
}

export async function listPagamentos(id: string) {
  try {
    const { data } = await api.get(`/pagamento/${id}`);

    return data;
  } catch (err: any) {
    toast.error(err.response.data.message)

  }
}

export async function listPagamentosUser(id: string)  {
  try {
    const { data } = await api.get(`/pagamento/${id}/user`);

    return data;
  } catch (err: any) {
    toast.error(err.response.data.message)

  }
}

export async function countValorFaltante(id: string) {
  try {
    const { data } = await api.get(`/pagamento/${id}/valor_faltante`);

    return data;
  } catch (err: any) {
    toast.error(err.response.data.message)

  }
}