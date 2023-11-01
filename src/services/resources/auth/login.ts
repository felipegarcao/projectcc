import { Register } from "../../../@types/user";
import { api } from "../../api";
import { toast } from "react-toastify";

export const loginResource = async (data: any) => {
  try {
    await api.post("/user/login", {
      ...data
    });



  } catch (error: any) {
    toast.error(error.response.data.message);
  }
};

export const registerUserResource = async (data: Register) => {
  try {
    await api.post("/user/register", {
      ...data,
    });

    setTimeout(() => {
      window.location.reload();
    }, 3000);

    toast.success("User registration successful");
  } catch (error: any) {
    toast.error(error.response.data.message);
  }
};
