import React from 'react'
import CatalogItem from '../CatalogItem'
import a from '../../assets/images/1.jpg';
import b from '../../assets/images/2.jpg';
import c from '../../assets/images/3.jpg';
import d from '../../assets/images/4.jpg';
import e from '../../assets/images/5.jpg';
import f from '../../assets/images/6.jpg';


const Catalog = () => {
  return (
    <>
      <CatalogItem image_url={a} name="Пам'яник №23" price='50000 грн'></CatalogItem>
      <CatalogItem image_url={b} name="Пам'яник №13" price='10000 грн'></CatalogItem>
      <CatalogItem image_url={c} name="Пам'яник №32" price='20000 грн'></CatalogItem>
      <CatalogItem image_url={d} name="Пам'яник №65" price='30000 грн'></CatalogItem>
      <CatalogItem image_url={e} name="Пам'яник №67" price='15000 грн'></CatalogItem>
      <CatalogItem image_url={f} name="Пам'яник №9" price='22500 грн'></CatalogItem>
    </>
  )
}

export default Catalog