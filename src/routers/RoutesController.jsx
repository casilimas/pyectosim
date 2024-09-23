// src/routers/RoutesController.jsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import MachineRoomOne from '../components/MachineRoomOne';
import MachineRoomTwo from '../components/MachineRoomTwo';
import MachineRoomThree from '../components/MachineRoomThree';
import MachineRoomFour from '../components/MachineRoomFour';
import MachineRoomFive from '../components/MachineRoomFive';
import MachineRoomSix from '../components/MachineRoomSix';
import MachineRoomSeven from '../components/MachineRoomSeven';
import Navbar from '../components/Navbar'; // Importar Navbar

const RoutesController = () => {
  return (
    <Router basename="/pyectosim">
      <Navbar /> {/* Agregar Navbar aquí */}
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* AboutPage como página de inicio */}
        <Route path="/AboutPage" element={<AboutPage />} /> {/* Cambiar la ruta de HomePage */}
        <Route path="/MachineRoomOne" element={<MachineRoomOne />} /> 
        <Route path="/MachineRoomTwo" element={<MachineRoomTwo />} /> 
        <Route path="/MachineRoomThree" element={<MachineRoomThree />} />
        <Route path="/MachineRoomFour" element={<MachineRoomFour />} />
        <Route path="/MachineRoomFive" element={<MachineRoomFive />} />
        <Route path="/MachineRoomSix" element={<MachineRoomSix />} />
        <Route path="/MachineRoomSeven" element={<MachineRoomSeven />} /> 
      </Routes>
    </Router>
  );
};

export default RoutesController;
