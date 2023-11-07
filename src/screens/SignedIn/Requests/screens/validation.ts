import {z} from 'zod'

export const VisitaSchema =  z.object({
  observacao: z.string()
})