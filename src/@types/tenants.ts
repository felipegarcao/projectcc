export interface Tenants {
  id: number, 
 name: string;
  cpf?: string,
  rg?: string,
  status?: "on" | "off" ;
  civilStatus?: string,
  email?: string,
  avatarUrl?: string;
  profissao?: string,
  phone?: string;
  observation?: string;
}


export interface ParamsEditProfile  {
  name: string;
  cpf: string;
  rg: string;
  civilStatus: string;
  email: string;
  phone: string;
  profissao: string;
  new_password: string;
  password: string;
}