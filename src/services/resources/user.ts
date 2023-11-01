import { Tenants } from "../../@types/tenants";
import { api } from "../api";
import { toast } from "react-toastify";

export const tenantsResource = async () => {
  try {
    const { data } = await api.get("/user/tenant/on");

    return data;
  } catch (e: any) {
    toast.error("Error: " + e.message);
  }
};

export const tenantsPendingResource = async () => {
  try {
    const { data } = await api.get("/user/tenant/on");

    return data;
  } catch (e: any) {
    toast.error("Error: " + e.message);
  }
}

export const tenantsIdResource = async (id: string): Promise<any> => {
  try {
    const { data } = await api.get(`/tenants/${id}`);
    return data;
  } catch (e: any) {
    toast.error("Error");
  }
};

export const createTenantsResource = async (data: Tenants) => {
  try {
    await api.post("/user/register/tenant", {
      ...data,
    });
    toast.success("Inquilino criado com sucesso !");
  } catch (e: any) {
    toast.error("Error: " + e.message);
  }
};

export const deleteTenantsResouce = async (id: number) => {
  try {
  } catch (e: any) {}
};
