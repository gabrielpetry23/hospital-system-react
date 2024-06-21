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
                <p style={{fontSize: '15px', color: 'rgba(143, 142, 166, 1)'}}>Primeira Viagem:</p>
                <p id='first-trip-date'>{client.firstTrip}</p>
                <div className='client-recurrence-box'>
                <p style={{color: 'rgba(143, 142, 166, 1)'}}>Recorrência:</p>
                <p id='recurrence-value'>{client.recurrence}</p>
                </div>
            </div>
            <div className='client-actions'>
                <button className='copy-email-button'>
                    <FiMail className='icon-email-copy'></FiMail>
                    <span>Copiar Email</span>
                </button>
                <div className='divider'></div>
                <button className='whatsapp-button'>
                    <FaWhatsapp className='icon-whatsapp'></FaWhatsapp>
                    <span>WhatsApp</span>
                </button>
            </div>
        </div>
    );
}

export default ClientCard;
