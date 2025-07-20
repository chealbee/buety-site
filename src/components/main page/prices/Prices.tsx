"use client";
import React, { useState } from "react";
import "./prices.scss";
import PricesPopup from "./PricesPopup";
import pricesData from "../../../pricesData.json";

const Prices = () => {
  const [showPopup, setShowPopup] = useState(false);
  const data = pricesData;
  return (
    <section className="prices" id="section-prices">
      <div className="maincontainer">
        <div className="prices__textSection">
          <h3 className="prices__textSection_big">{data.titleBig}</h3>
          <h3 className="prices__textSection_smal">{data.titleSmall}</h3>
          <p>{data.description}</p>
        </div>
        <ul className="prices__prices">
          {data.items.map((item, idx) => (
            <li className="prices__price" key={idx}>
              <p>
                <span dangerouslySetInnerHTML={{ __html: item.name }} />
                <span className="prices__price_separator"></span>
                <span>{item.price}</span>
              </p>
            </li>
          ))}
        </ul>
        <button
          className="prices__showMoreButton"
          onClick={() => setShowPopup(true)}
        >
          {data.showMoreButton}
        </button>
        {showPopup && <PricesPopup onClose={() => setShowPopup(false)} />}
      </div>
    </section>
  );
};

export default Prices;
