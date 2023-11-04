interface Visita {
  id: number;
  user_id: string;
  casa_id: number;
  motivo: string;
  periodo: string;
  dia: string;
  observacao: string;
  status: string;
}

export interface Listagem {
  listagem: {
    accepted: Visita[];
    denied: Visita[];
    done: Visita[];
    pending: Visita[];
  };
}
