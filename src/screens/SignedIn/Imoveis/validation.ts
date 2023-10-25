import * as z from "zod";

export const imoveilSchema = z.object({
  dormitorios: z.string(),
  bairro: z.string().min(1, "Informe o nome do bairro"),
  cep: z.string().min(7).max(8),
  cidade: z.string().min(1, "Informe o nome do cidade"),
  complemento: z.string(),
  estado: z.string().min(2, "Informe o nome do estado"),
  suites: z.string(),
  vagas_garagem: z.string(),
  numero: z.string().min(1, "Informe o numero do endereço"),
  observacao: z.string(),
  rua: z.string().min(2, "Informe o nome da rua"),
  
});
