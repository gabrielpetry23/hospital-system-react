import React from 'react';
import { useParams } from 'react-router-dom';
import clientsData from '../data/clients.json';
import { HistoryEntry, Visit } from '../data/types.ts';
import Sidebar from '../components/Sidebar.tsx';

const ClientDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const client = clientsData.find(client => client.id === id);

    if (!client) {
        return <div>
            <h1 style={{color: 'red', fontWeight: 'bold'}}>Client not found</h1>
        </div>;
    }

    return (
        <div className="main-container">
            <Sidebar />
            <div className='rectangle'>
                <div className="client-info-container">
                    <div className="client-header-2">
                        <div className="client-avatar">
                            <div>
                                {client.name.split(' ').map((n: string) => n[0]).join('')}
                            </div>
                        </div>
                        <div className="client-name-id">
                        <h1>{client.name} <span className="divider-2">|</span> <span>{client.id}</span></h1>
                        </div>
                        <button className="add-trip-button">Adicionar Viagem</button>
                    </div>
                    <hr className="header-divider" />

                    <div className="client-content">
                        <div className="client-infos">
                            <h2>Informações do Paciente</h2>
                            <div className="client-infos-form">
                                <div className="form-group-2">
                                    <label>Data de Nascimento</label>
                                    <input id='client-data-text' type="text" value={client.birthDate} readOnly />
                                </div>
                                <div className="form-group-2">
                                    <label>Telefone</label>
                                    <input id='client-data-text' type="text" value={client.phone} readOnly />
                                </div>
                                <div className="form-group-2">
                                    <label>Endereço de email</label>
                                    <input id='client-data-text' type="text" value={client.email} readOnly />
                                </div>
                                <div className="form-group-2">
                                    <label>CPF</label>
                                    <input id='client-data-text' type="text" value={client.cpf} readOnly />
                                </div>
                                <div className="form-group-2">
                                    <label>Ocupação</label>
                                    <input id='client-data-text' type="text" value={client.job} readOnly />
                                </div>
                                <div className="form-group-2">
                                    <label>Origem</label>
                                    <input id='client-data-text' type="text" value={client.origin} readOnly />
                                </div>
                                <div className="form-group-2">
                                    <label>Primeira Consulta</label>
                                    <input id='client-data-text' type="text" value={client.firstTrip} readOnly />
                                </div>
                                <div className="form-group-2">
                                    <label>Recorrência</label>
                                    <input id='client-data-text' type="text" value={client.recurrence} readOnly />
                                </div>
                            </div>
                        </div>

                        <div className="client-locations-container">
                            <h2>Locais Visitados</h2>
                            <div className="client-locations">
                                <ul>
                                    {client.visits.map((visit: Visit, index: number) => (
                                        <li key={index} className='location-item'>
                                            {index + 1}. {visit.city} <span style={{color: '#999'}}>{visit.date}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="client-history">
                        <h2>Histórico</h2>
                        <div className="history-header">
                            <strong>Feedback</strong>
                            <strong>Data da Viagem</strong>
                        </div>
                        <hr className="header-divider" />
                        <div className="history-history">
                            {client.history.map((history: HistoryEntry, index: number) => (
                                <div key={index} className="history-item">
                                    <div>
                                        {history.feedback}
                                    </div>
                                    <div className='history-date'
                                        style={{color: '#999'}}>{history.date}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientDetails;
