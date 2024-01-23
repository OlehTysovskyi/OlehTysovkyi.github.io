import React from 'react'

interface Props {
  image_url: string;
    text: string;
}

const CatalogCover = ({ image_url, text }: Props) => {
  return (
    <figure className='catalog-cover'>
      <img className="catalog-cover-img" src={image_url} alt="" />
      <figcaption className='catalog-cover-text'>
        {text}
      </figcaption>
    </figure>
  )
}

export default CatalogCover