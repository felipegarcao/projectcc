import {z} from 'zod'


export const RegisterPagamentoSchema = z.object({
  nome_mes: z.string().min(2),
  status: z.string().min(2),
  ano: z.string(),
  valor_faltante: z.string().optional(),
})


export const editPagamentoSchema = z.object({
  status: z.string().min(2),
})