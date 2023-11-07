import {z} from 'zod'


export const RegisterPagamentoSchema = z.object({
  nome_mes: z.string(),
  status: z.string(),
  ano: z.string(),
  valor_faltante: z.string(),
  user_id: z.string()
})