import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Clients from "./pages/Clients";
import ClientInfos from "./pages/ClientInfos";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/client/:id" element={<ClientInfos />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
