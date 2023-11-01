import * as zod from "zod";

export const userSchema = zod.object({
  name: zod.string().min(3, "Informe o seu nome"),
  email: zod.string().email(),
  rg: zod.string().min(7, "Informe o rg valido"),
  cpf: zod
    .string()
    .min(11, "Informe o cpf valido")
    .max(11, "Informe o cpf valido"),
  phone: zod.string(),
  password: zod.string(),
  confirm_password: zod.string(),
});