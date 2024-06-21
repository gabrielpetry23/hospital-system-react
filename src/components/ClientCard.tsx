import React from 'react';
import { Client } from '../data/types.ts';
import { FiMail} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface ClientCardProps {
    client: Client;
}

const ClientCard: React.FC<ClientCardProps> = ({ client }) => {
    const navigate = useNavigate();

    function goToClientInfosPage() {
        navigate(`/client/${client.id}`);
    }

    function copyEmail (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.stopPropagation();
        navigator.clipboard.writeText(client.email).then(() => {
            toast.success('Email copied successfully!');
        }, () => {
            toast.error('Failed to copy email!');
        });
    }

    function goToWhatsappClient(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.stopPropagation();
        const whatsappLink = `https://wa.me/${client.phone}`;
        window.open(whatsappLink, '_blank');
    }

    return (
        <div className="client-card" onClick={goToClientInfosPage}>
            <div className="client-header">
                <div className="client-initials">
                    {client.name.split(' ').map(word => word[0]).join('')}
                </div>
                <div className="client-name">
                    {client.name}
                </div>
            </div>
            <div className="client-details">
                <p style={{fontSize: '12px', color: 'rgba(143, 142, 166, 1)'}}>Primeira Viagem:</p>
                <p id='first-trip-date'>{client.firstTrip}</p>
                <div className='client-recurrence-box'>
                <p style={{fontSize: '12px' ,color: 'rgba(143, 142, 166, 1)'}}>Recorrência:</p>
                <p id='recurrence-value'>{client.recurrence}</p>
                </div>
            </div>
            <div className='client-actions'>
                <button className='copy-email-button' onClick={copyEmail}>
                    <FiMail className='icon-email-copy'></FiMail>
                    <span>Copiar Email</span>
                </button>
                <div className='divider'></div>
                <button className='whatsapp-button' onClick={goToWhatsappClient}>
                    <FaWhatsapp className='icon-whatsapp'></FaWhatsapp>
                    <span>WhatsApp</span>
                </button>
            </div>
        </div>
    );
}

export default ClientCard;
