import * as z from "zod";

export const imoveilSchema = z.object({
  cep: z.string().min(7).max(8),
  rua: z.string().min(2, "Informe o nome da rua"),
  numero: z.string().min(1, "Informe o numero do endereço"),
  complemento: z.string(),
  bairro: z.string().min(1, "Informe o nome do bairro"),
  cidade: z.string().min(1, "Informe o nome do cidade"),
  estado: z.string().min(2, "Informe o nome do estado"),
  observacao: z.string(),
});
