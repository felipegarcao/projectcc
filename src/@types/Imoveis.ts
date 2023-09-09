export interface Ufs {
  id: number;
  sigla: string;
  nome: string;
  regiao: {
    id: number;
    sigla: string;
    nome: string;
  }
}



export interface House {
  id: string,
  cep: string,
  rua: string,
  numero: number,
  complemento: string,
  bairro: string
  status: string,
  cidade: string
  estado: string,
  arquivo: string,
  observacao: string
}