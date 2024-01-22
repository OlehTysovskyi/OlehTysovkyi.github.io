import React from 'react'
import CatalogItem from '../CatalogItem'

const Catalog = () => {
  return (
    <>
      <CatalogItem image_url='1.jpg' name="Пам'яник №23" price='50000 грн'></CatalogItem>
      <CatalogItem image_url='2.jpg' name="Пам'яник №13" price='10000 грн'></CatalogItem>
      <CatalogItem image_url='3.jpg' name="Пам'яник №32" price='20000 грн'></CatalogItem>
      <CatalogItem image_url='4.jpg' name="Пам'яник №65" price='30000 грн'></CatalogItem>
      <CatalogItem image_url='5.jpg' name="Пам'яник №67" price='15000 грн'></CatalogItem>
      <CatalogItem image_url='6.jpg' name="Пам'яник №9" price='22500 грн'></CatalogItem>
    </>
  )
}

export default Catalog