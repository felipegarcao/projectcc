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
  id: number,
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



export interface DetailsHouse {
  id: number,
  dormitorios: string,
  bairro: string,
  cep: string,
  cidade: string,
  complemento: string,
  estado: string,
  suites: string,
  vagas_garagem: string,
  numero: string,
  observacao: string,
  user_id: string,
  status: string,
  rua: string,
  preco: string,
  tamanho: string
}