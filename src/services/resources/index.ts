import { QuantidadeProps } from "../../screens/SignedIn/Home/types";
import { api } from "../api";

export const quantidadesCounts = async () => {
  try {

    const {data} = await api.get('/quantidades')

    return data;

  } catch (e) {
    console.log(e)
  }
}