import React from 'react';
import { Client } from '../data/types.ts';
import { FiMail} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

interface ClientCardProps {
    client: Client;
}

const ClientCard: React.FC<ClientCardProps> = ({ client }) => {
    return (
        <div className="client-card">
            <div className="client-header">
                <div className="client-initials">
                    {client.name.split(' ').map(word => word[0]).join('')}
                </div>
                <div className="client-name">
                    {client.name}
                </div>
            </div>
            <div className="client-details">
                <p>Primeira Viagem: {client.firstTrip}</p>
                <div className='client-recurrence-box'>
                <p>Recorrência: {client.recurrence}</p>
                </div>
            </div>
            <div>
                <FiMail></FiMail>
                <button>Copiar email</button>
                <FaWhatsapp></FaWhatsapp>
                <button>WhatsApp</button>
            </div>
        </div>
    );
}

export default ClientCard;
