import { toast } from "react-toastify";
import { api } from "../api";
import { Contrato } from "../../@types/contrato";

export const createContrato = async (data: Contrato) => {
  try {
    await api.post(
      "/contrato",
      {
        ...data,
      },
      {
        responseType: "blob",
      }
    );
    toast.success("Contrato created successfully");
  } catch (e: any) {
    toast.error(e.response.data.message);
  }
};

export const listContratos = async () => {
  try {
    const { data } = await api.get("/contrato/admin");

    return data;
  } catch (e: any) {
    toast.error(e.response.data.message);
  }
};

export const listContratosUserLogged = async (id: any) => {
  try {
    const { data } = await api.get(`/contrato/${id}`);

    return data;
  } catch (e: any) {
    toast.error(e.response.data.message);
  }
};
