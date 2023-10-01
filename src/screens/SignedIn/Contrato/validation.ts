import * as zod from 'zod'

export const contratoSchema = zod.object({
  imovel: zod.string().min(1, "Selecione um Imóvel"),
  inquilino: zod.string().min(1, "Selecione um Inquilino"),
  dataInicio: zod.string().min(6, "Informe uma data valida para o inicio"),
  duracao: zod.string().min(1, "Coloque a duração"),
  finalidade: zod.string().min(1, "Informe a finalidade"),
  dataVencimento: zod.string().min(6, "Informe uma data valida para o vencimento"),
  valorAluguel: zod.string().min(3, "Informe o valor do aluguel"),
  juros: zod.string().min(1, "Informe o juro do aluguel"),
  observacao: zod.string(),
});