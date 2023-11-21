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


export const listCasasAlugadas = async () => {
  try {
    const { data } = await api.get("/house/alugadas");

    return data;
  } catch (e: any) {
    toast.error(e.response.data.message)

  }
}


export const houseDisponiveis = async ({
  banheiro,
  dormitorios,
  vagas_garagem
}: {
  banheiro: string,
  dormitorios: string,
  vagas_garagem: string
}) => {
  try {
    const { data } = await api.get(`/house/disponiveis`, {
      params: {
        banheiro: banheiro == '0' ? '' : banheiro,
        dormitorios: dormitorios == '0' ? '': dormitorios,
        vagas_garagem: vagas_garagem == '0' ? '' : vagas_garagem
      }
    });

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


export const listIdMyHouseAdmin = async ({
  idUser,
  idCasa
}: {idUser: any, idCasa: number}) => {
  try {
    const { data } = await api.get(`/user/my-house/${idUser}/edit/${idCasa}/admin`);

    return data;
  } catch (e: any) {
    toast.error(e.response.data.message)

  }
}; 


export const listIdMyHouseUser = async ({
  idUser,
  idCasa
}: {idUser: any, idCasa: number}) => {
  try {
    const { data } = await api.get(`/user/my-house/${idUser}/edit/${idCasa}/user`);

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





export const alugarHouse = async (params: any) => {
  try {

    await api.put('/house/alugar', {
      ...params
    })

  toast.success('Casa alugada com sucesso !')
    
  } catch (e: any) {
    toast.error(e.response.data.message)
  }
}


export const desalugarHouse = async (id: any)  => {

  try {

    await api.put(`/house/desalugar/${id}`)

    toast.info('Casa Desalugada com sucesso.')

  } catch (e: any) {
    toast.error(e.response.data.message)
  }
}