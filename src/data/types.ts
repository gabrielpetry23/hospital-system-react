export interface Client {
    id: string;
    cpf: string;
    name: string;
    email: string;
    birthDate: string;
    phone: string;
    recurrence: string;
    job: string;
    origin: string;
    firstTrip: string;
    history: {
        feedback: string;
        date: string;
    }[];
    visits: {
        date: string;
        city: string;
    }[];
}

export interface Visit {
    city: string;
    date: string;
  }
  
  export interface HistoryEntry {
    feedback: string;
    date: string;
  }