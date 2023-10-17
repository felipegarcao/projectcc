import { Tenants } from "../../@types/tenants";
import { apiJson } from "../api";
import { toast } from "react-toastify";

export const tenantsResource = async () => {
  try {
    const { data } = await apiJson.get("/tenants");

    return data;
  } catch (e: any) {
    toast.error("Error: " + e.message);
  }
};


export const tenantsIdResource = async (id: string): Promise<any> => {
  try {

    const {data} = await apiJson.get(`/tenants/${id}`)

    return data;


  } catch(e: any) {
    toast.error("Error")
  }

  
}

export const createTenantsResource = async (data: Tenants) => {


  try {
    await apiJson.post("/tenants", {
      ...data
    });
    toast.success("Inquilino criado com sucesso !");
  } catch (e: any) {
    toast.error("Error: " + e.message);
  }
};

export const deleteTenantsResouce = async (id: number) => {
  try {

  } catch (e: any) {
    
  }
};
