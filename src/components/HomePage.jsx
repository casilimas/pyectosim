import '../App.css'; // Asegúrate de importar el archivo CSS correspondiente

const HomePage = () => {
  return (
    <div>
      <img 
        src="/pyectosim/images/siemens.png" // Ruta local a la imagen en la carpeta public
        alt="Siemens Logo"
        className="siemens-logo" // Añadir className a la imagen
      />
      <div className="video-container">
        <iframe
          width="700" // Puedes ajustar el ancho
          height="400" // Puedes ajustar la altura
          src="https://www.youtube.com/embed/1C3QJhDtZMo" // URL del video
          title="Video de YouTube"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default HomePage;
