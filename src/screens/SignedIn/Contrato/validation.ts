import * as zod from 'zod'

export const contratoSchema = zod.object({
  casa_id: zod.string().min(1, "Selecione um Imóvel"),
  user_id: zod.string().min(1, "Selecione um Inquilino"),
  data_vigencia: zod.string().min(6, "Informe uma data valida para o inicio"),
  duracao_meses: zod.string().min(1, "Coloque a duração"),
  finalidade: zod.string().min(1, "Informe a finalidade"),
  data_vencimento: zod.string().min(6, "Informe uma data valida para o vencimento"),
  valor_aluguel: zod.string().min(3, "Informe o valor do aluguel"),
  juros_atraso: zod.string().min(1, "Informe o juro do aluguel"),
  observacao: zod.string(),
});