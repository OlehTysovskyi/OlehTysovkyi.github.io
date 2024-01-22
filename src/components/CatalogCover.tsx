import React from 'react'

interface Props {
    imageUrl: string;
    text: string;
}

const CatalogCover = ({ imageUrl, text }: Props) => {
  return (
    <figure className='catalog-cover'>
      <img className="catalog-cover-img" src={imageUrl} alt="" />
      <figcaption className='catalog-cover-text'>
        {text}
      </figcaption>
    </figure>
  )
}

export default CatalogCover