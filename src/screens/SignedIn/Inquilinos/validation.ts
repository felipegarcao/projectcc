import * as zod from "zod";

export const inquilinosSchema = zod.object({
  name: zod.string().min(3, "Informe o seu nome"),
  email: zod.string().email(),
  rg: zod.string().min(7, "Informe o rg valido"),
  cpf: zod
    .string()
    .min(11, "Informe o cpf valido")
    .max(11, "Informe o cpf valido"),
  estado_civil: zod.string().optional(),
  observacao: zod.string().optional(),
  profissao: zod.string().optional(),
  sexo: zod.string(),
  phone: zod.string(),
  password: zod.string().default("senha1234"),
  casa_id: zod.string(),
});
