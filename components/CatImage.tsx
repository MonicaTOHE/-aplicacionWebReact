// src/components/CatImage.tsx
import React, { useEffect, useState } from 'react';

const CatImage: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const fetchCatImage = async () => {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await response.json();
      setImageUrl(data[0].url);
    } catch (error) {
      console.error('Error al obtener la imagen de gato:', error);
    }
  };

  useEffect(() => {
    fetchCatImage();
  }, []);

  return (
    <div className="text-center">

      <div className = "boton">
      <button
        onClick={fetchCatImage}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
      >
        Ver otra imagen de gato
      </button>
      </div>
      <div>
      {imageUrl ? (
        <img src={imageUrl} alt="Random Cat" className="imagen-gatos w-64 h-auto mx-auto mb-4 rounded-lg shadow-md" />
      ) : (
        <p>Cargando...</p>
      )}
      </div>
    </div>
  );
};

export default CatImage;

