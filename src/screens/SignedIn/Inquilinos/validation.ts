import * as zod from 'zod'

export const inquilinosSchema = zod.object({
  firstName: zod.string().min(3, "Informe o primeiro nome"),
  lastName: zod.string().min(3, "Informe seu sobrenome"),
  rg: zod.string().min(7, "Informe o rg valido"),
  cpf: zod.string().min(11, "Informe o cpf valido").max(11, "Informe o cpf valido"),
  email: zod.string().email(),
  civilStatus: zod.string().min(1, "Informe estado civil"),
  profissao: zod.string().min(4, "Informe a profissão"),
  observation: zod.string(),
});