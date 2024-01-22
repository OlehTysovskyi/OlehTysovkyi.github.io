import React from 'react'

const Location = () => {
  return (
    <>
      <p className="location-header">Як нас знайти</p>
      <iframe
        className="catalog-box location-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2590.3183183479177!2d23.1886450946331!3d49.51626588621916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ba544b7bd6f2b%3A0xd5f601e6a71f5c95!2z0JzQvtC90YPQvNC10L3RgtC4INCf0LDQvNGP0YLQvdC40LrQuA!5e0!3m2!1suk!2sua!4v1705320089894!5m2!1suk!2sua"
      />
    </>
  );
};

export default Location;
