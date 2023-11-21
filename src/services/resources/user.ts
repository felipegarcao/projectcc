import { ParamsEditProfile, Tenants } from "../../@types/tenants";
import { api } from "../api";
import { toast } from "react-toastify";

export const tenantsResource = async () => {
  try {
    const { data } = await api.get("/user/tenant/on");

    return data;
  } catch (e: any) {
    toast.error(e.response.data.message);
  }
};

export const tenantsDisponivelResource = async () => {
  try {
    const { data } = await api.get("/user/tenants/disponivel");

    return data;
  } catch (e: any) {
    toast.error(e.response.data.message);
  }
};


export const tenantsOffResource = async () => {
  try {
    const { data } = await api.get("/user/tenant/off");

    return data;
  } catch (e: any) {
    toast.error(e.response.data.message);
  }
};

export const tenantsPendingResource = async () => {
  try {
    const { data } = await api.get("/user/pending");

    return data;
  } catch (e: any) {
    toast.error(e.response.data.message);
  }
};

export const editProfileResource = async (params: ParamsEditProfile) => {
  try {
  const {data} =  await api.put(`/user/editar-perfil/${params.idUser}`, {
      ...params,
    });

    toast.success("Perfil alterado com sucesso !");
    return data;
  } catch (error: any) {
    toast.error(error.response.data.message);
  }
};

export const acceptedUserResource = async (id: string) => {
  try {
    await api
      .put(`/user/accept/${id}`)
      .then((response) => toast.success(response.data.message));
  } catch (error: any) {
    toast.error(error.response.data.message);
  }
};

export const tenantsIdResource = async (id: string): Promise<any> => {
  try {
    const { data } = await api.get(`/user/tenant/${id}`);
    return data;
  } catch (e: any) {
    toast.error(e.response.data.message);
  }
};

export const createTenantsResource = async (data: Tenants) => {
  try {
    await api.post("/user/register/tenant", {
      ...data,
    });
    toast.success("Inquilino criado com sucesso !");
  } catch (e: any) {
    toast.error(e.response.data.message);
  }
};

export const solicitarVisitaResource = async (data: any) => {
  try {
    await api.post("/visita", {
      ...data,
    });

    toast.success("Solicitação de visita enviada com sucesso !");
  } catch (e: any) {
    toast.error(e.response.data.message);
  }
};

export const alterarStatusVisitaResource = async (data: any) => {
  try {
    await api.put("/visita", {
      ...data,
    });
  } catch (e: any) {
    toast.error(e.response.data.message);
  }
};

export const listagemVisita = async () => {
  try {
    const { data } = await api.get(`/visita/listagem`);
    return data;
  } catch (e: any) {
    toast.error(e.response.data.message);
  }
};

export const disableTenantsResouce = async (id: string) => {
  try {
    await api.post(`/user/desabilitar/${id}`);

    toast.info("usuario desabilitado com sucesso !");
  } catch (e: any) {
    toast.error(e.response.data.message);
  }
};


export const restaurarSenhaResouce = async (id: string) => {
  try {

    await api.put(`/user/restaurar-senha/${id}`)

    toast.info("Senha restaurado com sucesso !");


  } catch (e: any) {
    toast.error(e.response.data.message)
  }
}

export const editarUsuarioResource = async ({id, params}: {id: any, params: any}) => {
  try {
    await api.put(`/user/editar-usuario/${id}`, {
      ...params
    })

    toast.info('Usuario editado com sucesso !')
  }  catch (e: any) {
    toast.error(e.response.data.message)
  }
}


export const recusarUsuario = async ({id, params} : {id: any, params: any}) => {
  try {
    await api.put(`/user/denied/${id}`, {
      ...params
    })

    toast.info('Usuario editado com sucesso !')
  }  catch (e: any) {
    toast.error(e.response.data.message)
  }
}