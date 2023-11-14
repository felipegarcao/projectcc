export interface Tenants {
  id: string, 
 name: string;
  cpf?: string,
  rg?: string,
  status_user?: "on" | "off" ;
  estado_civil?: string,
  email?: string,
  avatarUrl?: string;
  profissao?: string,
  phone?: string;
  observation?: string;
  is_admin?: number;
  data_nascimento?: string;
}


export interface ParamsEditProfile  {
  name: string;
  cpf: string;
  rg: string;
  estado_civil: string;
  email: string;
  phone: string;
  profissao: string;
  new_password: string;
  password: string;
  idUser: string;
}