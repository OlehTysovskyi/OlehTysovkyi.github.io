import React from 'react'
import { useNavigate } from 'react-router-dom';

interface CatalogCoverProps {
  image_url: string;
  coverName: string;
}

const CatalogCover: React.FC<CatalogCoverProps> = ({ image_url, coverName }) => {
  return (
    <figure className='catalog-cover'>
      <img className="catalog-cover-img" src={image_url} alt="" />
      <figcaption className='catalog-cover-text'>
        {coverName}
      </figcaption>
    </figure>
  )
}

export default CatalogCover