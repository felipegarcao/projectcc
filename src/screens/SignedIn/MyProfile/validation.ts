import { z } from "zod";

export const EditProfileSchema = z.object({
  name: z.string().min(3, "Informe o seu nome"),
  email: z.string().email(),
  rg: z.string().min(7, "Informe o rg valido"),
  cpf: z
    .string()
    .min(11, "Informe o cpf valido")
    .max(11, "Informe o cpf valido"),
  estado_civil: z.string().optional(),
  profissao: z.string().optional(),
  phone: z.string().optional(),
  password: z.string().optional(),
  new_password: z.string().optional(),
  data_nascimento: z.string().optional(),
  observacao: z.string().optional()
});
