import { toast } from "react-toastify";
import { House } from "../../@types/Imoveis";
import { apiNotBaseUrl, api } from "../api";

export const ufResources = async () => {
  try {
    const { data } = await apiNotBaseUrl.get(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"
    );

    return data;
  } catch (e: any) {
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
    toast.error(e.response.data.message)

  }
};

export const listImoveis = async () => {
  try {
    const { data } = await api.get("/house");

    return data;
  } catch (e: any) {
    toast.error(e.response.data.message)

  }
};

export const houseDisponiveis = async () => {
  try {
    const { data } = await api.get(`/house/disponiveis`);

    return data;
  } catch (e: any) {
    toast.error(e.response.data.message)

  }
}

export const listIdImoveis = async (id: string | number) => {
  try {
    const { data } = await api.get(`/house/detalhes/${id}`);

    return data;
  } catch (e: any) {
    toast.error(e.response.data.message)

  }
}; 

export const listMyHouseAdmin = async (id: any) => {
  try {
    const { data } = await api.get(`/user/my-house/${id}/admin`);

    return data;
  } catch (e: any) {
    toast.error(e.response.data.message)

  }
}; 

export const listMyHouseUser = async (id: any) => {
  try {
    const { data } = await api.get(`/user/my-house/${id}`);

    return data;
  } catch (e: any) {
    toast.error(e.response.data.message)

  }
}; 


export const listIdMyHouse = async ({
  idUser,
  idCasa
}: {idUser: any, idCasa: number}) => {
  try {
    const { data } = await api.get(`/user/my-house/${idUser}/edit/${idCasa}`);

    return data;
  } catch (e: any) {
    toast.error(e.response.data.message)

  }
}; 



export const editMyHouse = async (id: string | number, data: any) => {
  try {
    await api.put(`/house/editar/${id}`, {
      ...data
    });

 toast.success('Dados alterados com sucesso !')

    
  } catch (e: any) {
    toast.error(e.response.data.message)

  }
}


export const listSimilaresImoveis = async (id: string) => {
  try {
    const { data } = await api.get(`/house/similares/${id}`);

    return data;
  } catch (e: any) {
    console.log(e);
  }
}; 

