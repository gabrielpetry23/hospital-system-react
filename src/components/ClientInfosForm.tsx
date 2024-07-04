import React from "react";
import { Client } from "../data/types.ts";

interface ClientInfosFormProps {
  client: Client;
}

const ClientInfosForm: React.FC<ClientInfosFormProps> = ({ client }) => {
  return (
    <div className="client-infos-form">
      <div className="form-group-2">
        <label>Data de Nascimento</label>
        <input
          id="client-data-text"
          type="text"
          value={client.birthDate}
          readOnly
        />
      </div>
      <div className="form-group-2">
        <label>Telefone</label>
        <input
          id="client-data-text"
          type="text"
          value={client.phone}
          readOnly
        />
      </div>
      <div className="form-group-2">
        <label>Endereço de email</label>
        <input
          id="client-data-text"
          type="text"
          value={client.email}
          readOnly
        />
      </div>
      <div className="form-group-2">
        <label>CPF</label>
        <input id="client-data-text" type="text" value={client.cpf} readOnly />
      </div>
      <div className="form-group-2">
        <label>Ocupação</label>
        <input id="client-data-text" type="text" value={client.job} readOnly />
      </div>
      <div className="form-group-2">
        <label>Origem</label>
        <input
          id="client-data-text"
          type="text"
          value={client.origin}
          readOnly
        />
      </div>
      <div className="form-group-2">
        <label>Primeira Consulta</label>
        <input
          id="client-data-text"
          type="text"
          value={client.firstTrip}
          readOnly
        />
      </div>
      <div className="form-group-2">
        <label>Recorrência</label>
        <input
          id="client-data-text"
          type="text"
          value={client.recurrence}
          readOnly
        />
      </div>
    </div>
  );
};

export default ClientInfosForm;
