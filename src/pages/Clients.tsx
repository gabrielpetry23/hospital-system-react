import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import ClientCard from "../components/ClientCard";
import clientsData from "../data/clients.json";
import { Client } from "../data/types.ts";
import { FiSearch } from "react-icons/fi";

export default function Clients() {
  const [clients, setClients] = useState<Client[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setClients(clientsData);
  }, []);

  const removeAccents = (s: string) => {
    return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const filteredClients = clients.filter((client) =>
    removeAccents(client.name.toLowerCase()).includes(
      removeAccents(searchTerm.toLowerCase())
    )
  );

  return (
    <div>
      <Sidebar />
      <div className="rectangle">
        <h1 style={{ fontSize: "23px" }}>Gabriel Petry</h1>
        <div className="search-container">
          <label
            style={{ fontSize: "18px", fontWeight: "500", marginRight: "10px" }}
          >
            Cliente
          </label>
          <div className="input-with-icon-search">
            <FiSearch className="icon-search"></FiSearch>
            <input
              id="input-search"
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="clients-container">
          {filteredClients.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </div>
      </div>
    </div>
  );
}
