export interface Contrato {
  data_vigencia: string;
  duracao_meses: string;
  finalidade: string;
  data_vencimento: string;
  valor_aluguel: string;
  juros_atraso: string;
  observacao: string;
  casa_id: number;
  user_id: string;
  uri_contrato: any;
  name?: string;
}
