export interface Tenants {
  id: 2, 
  firstName: string, 
  lastName?: string,
  cpf?: string,
  rg?: string,
  status?: "on" | "off" ;
  civilStatus?: string,
  email?: string,
  avatarUrl?: string;
  profissao?: string,
  observation?: string;
}