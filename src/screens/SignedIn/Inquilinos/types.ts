import { EditProfileSchema } from "../MyProfile/validation";
import { inquilinosSchema } from "./validation";
import * as zod from 'zod'



export interface EditUser {
  name: string;
  email: string;
  cpf: string;
  rg: string;
  phone: string;
  profissao: string;
  estado_civil: string;
} 

export const EditUserSchema = zod.object({
  name: zod.string(),
  email: zod.string(),
  cpf: zod.string(),
  rg: zod.string(),
  phone: zod.string(),
  profissao: zod.string().optional(),
  estado_civil: zod.string().optional(),
  observacao: zod.string().optional(),
  data_nascimento: zod.string().optional()
})

export type handleSubmittedTypes = zod.infer<typeof inquilinosSchema>;


export type handleUpdatedSubmittedTypes = zod.infer<typeof EditUserSchema>;


