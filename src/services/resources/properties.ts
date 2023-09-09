import { api, apiJson } from "../api"

export const ufResources = async () => {
  try {

    const {data} = await api.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')

    return data;

  } catch (e) {
    console.log(e)
  }
}


export const listImoveis = async () => {
  try {

    const {data} = await apiJson.get('/imoveis')

    return data;

  } catch (e) {
    console.log(e)
  }
}