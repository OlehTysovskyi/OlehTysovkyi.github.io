import React, { useState } from 'react';
import closeIcon from '../assets/images/close.png';

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
          <button type="button" className="catalog-item-btn-view" onClick={openImage}>
            Оглянути
          </button>
        </figcaption>
      </figure>

      {isImageOpen && (
        <div className="fullscreen-overlay">
          <div className="fullscreen-image-container">
            <button type="button" className="catalog-item-btn-close" onClick={closeImage}>
              <img src={closeIcon} width="27px" title="Закрити" alt="Закрити"/>
            </button>
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
