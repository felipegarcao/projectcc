import { toast } from "react-toastify";
import { House } from "../../@types/Imoveis";
import { apiNotBaseUrl, api } from "../api";

export const ufResources = async () => {
  try {
    const { data } = await apiNotBaseUrl.get(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"
    );

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const createHouse = async (data: House) => {
  try {
    await api.post("/house", {
      ...data,
    });
    toast.success("Casa cadastrada com sucesso !");
  } catch (e: any) {
    toast.error("Error: " + e.message);
  }
};

export const listImoveis = async () => {
  try {
    const { data } = await api.get("/house");

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const houseDisponiveis = async () => {
  try {
    const { data } = await api.get(`/house/disponiveis`);

    return data;
  } catch (e) {
    console.log(e);
  }
}

export const listIdImoveis = async (id: string) => {
  try {
    const { data } = await api.get(`/house/detalhes/${id}`);

    return data;
  } catch (e) {
    console.log(e);
  }
}; 


export const listSimilaresImoveis = async (id: string) => {
  try {
    const { data } = await api.get(`/house/similares/${id}`);

    return data;
  } catch (e) {
    console.log(e);
  }
}; 

