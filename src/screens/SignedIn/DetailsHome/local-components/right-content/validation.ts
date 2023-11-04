import { z } from "zod";

export const VisitaSchema = z.object({
  periodo: z.string(),
  dia: z.string(),
  motivo: z.string(),
  nome: z.string(),
  email: z.string().email(),
  telefone: z.string()
})