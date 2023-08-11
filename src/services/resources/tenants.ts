import { apiJson } from "../api";

export const tenantsResource = async () => {
  try {

    const {data} = await apiJson.get('/tenants')

    return data;

  } catch (e) {
    console.log(e)
  }
}