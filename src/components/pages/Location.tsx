import React from "react";
import { callPhoneNumber } from '../../utils'; 

const Location = () => {
  const address = `
    81400, вул. Шевченка, 36,
    м. Самбір, Львівська область,
  `;

  const googleMapsUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2590.3183183479177!2d23.1886450946331!3d49.51626588621916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ba544b7bd6f2b%3A0xd5f601e6a71f5c95!2z0JzQvtC90YPQvNC10L3RgtC4INCf0LDQvNGP0YLQvdC40LrQuA!5e0!3m2!1suk!2sua!4v1705320089894!5m2!1suk!2sua";

  return (
    <>
      <div className="location-item">
        <p className="location-item-header">Наша адреса:</p>
        <p className="location-item-info">
          81400, вул. Шевченка, 36,<br />
          м. Самбір, Львівська область,<br />
          пн-сб: 10:00-14:00,<br />
          нд: вихідний.<br />
        </p>
      </div>
      <div className="location-item">
        <p className="location-item-header">Карта:</p>
        <p className="address">
          Щоб простіше знайти нас, скористуйтеся картою нижче. 
        </p>
        <iframe
        className="location-map"
        src={googleMapsUrl}
        loading="lazy"
        width="600"
        height="450"
        title="Місце розташування магазину"
        />
      </div>
      <div className="location-item">
        <p className="location-item-info bold">
          Якщо у вас виникли труднощі, зателефонуйте нам за вказаним номером:&nbsp;
          <a className="text-primary location-phone" onClick={() => callPhoneNumber()}>+380 96 285 54 54</a>
        </p>
      </div>    
    </>
  );
};

export default Location;
