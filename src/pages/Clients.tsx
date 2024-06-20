import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import ClientCard from '../components/ClientCard';
import clientsData from '../data/clients.json';
import { Client } from '../data/types.ts';
import { FiSearch } from "react-icons/fi";

export default function Clients() {
    const [clients, setClients] = useState<Client[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setClients(clientsData);
    }, []);

    const filteredClients = clients.filter(client =>
        client.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Sidebar />
            <div className='rectangle'>
                <h1 style={{ fontSize: '20px'}}>Gabriel Petry</h1>
                <span style={{ fontSize: '18px', fontWeight: "500"}}>Cliente</span>
                <div className='input-with-icon-search'>
                <FiSearch className='icon'></FiSearch>
                <input
                    id='input-search'
                    type="text" 
                    placeholder="Search" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                </div>
                <div className="clients-container">
                    {filteredClients.map(client => (
                        <ClientCard key={client.id} client={client} />
                    ))}
                </div>
            </div>
        </div>
    )
}
