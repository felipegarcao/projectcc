import { toast } from "react-toastify";
import { api } from "../api";
import { Contrato } from "../../@types/contrato";




export const createContrato = async (data: Contrato) => {
  try {
    await api.post("/contrato", {
      ...data,
    });
    toast.success("Contrato created successfully");
  } catch (e: any) {
    toast.error("Error: " + e.message);
  }
};
