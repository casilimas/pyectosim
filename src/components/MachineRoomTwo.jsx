// src/pages/IPLinkPage.jsx



const IPLinkPageTwo = () => {
    return (
      <div>
        <h1>ENLACE A PLC</h1>
        <p>
        Accede a la aplicación local de siemens a la siguiente dirección:{" "}
          <a href="http://192.168.1.5" target="_blank" rel="noopener noreferrer">
          <h2 className="link-zona">CONTROL A PLC ZONA (C)</h2>
          </a>
        </p>
        <div>
      <img 
        src="/pyectosim/images/siemens.png" // Ruta local a la imagen en la carpeta public
        alt="Siemens Logo"
        className="siemens-logo" // Añadir className a la imagen
      />
    </div>
      </div>
    );
  };
  
  export default IPLinkPageTwo;
  