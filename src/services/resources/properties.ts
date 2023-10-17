import { toast } from "react-toastify";
import { House } from "../../@types/Imoveis";
import { api, apiJson } from "../api"

export const ufResources = async () => {
  try {

    const {data} = await api.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')

    return data;

  } catch (e) {
    console.log(e)
  }
}

export const createHouse = async (data: House) => {
  try {
    await apiJson.post("/house", {
      ...data,
    });
    toast.success("Casa cadastrada com sucesso !");
  } catch (e: any) {
    toast.error("Error: " + e.message);
  }
}

export const listImoveis = async () => {
  try {

    const {data} = await apiJson.get('/house')

    return data;

  } catch (e) {
    console.log(e)
  }
}


export const listIdImoveis = async (id: string) => {
  try {

    const {data} = await apiJson.get(`/house/${id}`)

    return data;

  } catch (e) {
    console.log(e)
  }
}