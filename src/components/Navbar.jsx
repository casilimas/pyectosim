import { Link } from 'react-router-dom';
import '../App.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      
      <li className="navbar-item-home">
          <Link to="/" className="navbar-link">Home</Link>
      </li>
   
      <ul className="navbar-list">
        
        <li className="navbar-item">
          <Link to="/AboutPage" className="navbar-link">Cuarto extractores zona A</Link>
        </li>
        <li className="navbar-item">
          <Link to="/MachineRoomOne" className="navbar-link">Cuarto extractores zona B</Link>
        </li>
        <li className="navbar-item">
          <Link to="/MachineRoomTwo" className="navbar-link">Cuarto extractores zona C</Link>
        </li>
        <li className="navbar-item">
          <Link to="/MachineRoomThree" className="navbar-link">Cuarto extractores zona D</Link>
        </li>
        <li className="navbar-item">
          <Link to="/MachineRoomFour" className="navbar-link">Cuarto extractores zona E</Link>
        </li>
        <li className="navbar-item">
          <Link to="/MachineRoomFive" className="navbar-link">Cuarto extractores zona F</Link>
        </li>
        <li className="navbar-item">
          <Link to="/MachineRoomSix" className="navbar-link">Cuarto extractores zona G</Link>
        </li>
        <li className="navbar-item">
          <Link to="/MachineRoomSeven" className="navbar-link">Cuarto extractores zona H</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
