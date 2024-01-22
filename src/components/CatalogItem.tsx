import React, { useState } from 'react';

interface Props {
    image_url: string;
    name: string;
    price: string;
}

const CatalogItem = ({ image_url, name, price }: Props) => {
  const [isImageOpen, setImageOpen] = useState(false);

  const openImage = () => {
    setImageOpen(true);
  };

  const closeImage = () => {
    setImageOpen(false);
  };

  return (
    <>
      <figure className="catalog-item">
        <img className="catalog-item-img" src={image_url} alt={name} />
        <figcaption className="catalog-item-fig">
          <p className="catalog-item-name">{name}</p>
          <p className="catalog-item-price">{price}</p>
          <button type="button" className="catalog-item-btn" onClick={openImage}>
            Оглянути
          </button>
        </figcaption>
      </figure>

      {isImageOpen && (
        <div className="fullscreen-overlay" onClick={closeImage}>
          <div className="fullscreen-image-container">
            <img
              src={image_url}
              alt={name}
              className="fullscreen-image"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default CatalogItem;
