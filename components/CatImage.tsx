import React, { useEffect, useState } from 'react';

const CatImage: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchCatImage = async () => {
      try {
        setImageUrl('https://cataas.com/cat');
      } catch (error) {
        console.error('Error al obtener la imagen de gato:', error);
      }
    };

    fetchCatImage();
  }, []);

  return (
    <div>
      <h2>Imagen de gato aleatoria</h2>
      {imageUrl ? (
        <img src={imageUrl} alt="Random Cat" style={{ width: '300px', height: 'auto' }} />
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default CatImage;


