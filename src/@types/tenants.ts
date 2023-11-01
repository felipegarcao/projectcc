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