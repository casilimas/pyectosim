// src/routers/RoutesController.jsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';

const RoutesController = () => {
  return (
    <Router basename="/pyectosim"> {/* Agregar basename */}
      <Routes>
        <Route path="/" element={<AboutPage />} /> {/* AboutPage como página de inicio */}
        <Route path="/home" element={<HomePage />} /> {/* Cambiar la ruta de HomePage */}
      </Routes>
    </Router>
  );
};

export default RoutesController;
