import React from "react";
import "./prices.scss";

const Prices = () => {
  return (
    <section className="prices">
      <div className="maincontainer">
        <div className="prices__textSection">
          <h3 className="prices__textSection_big">наші</h3>
          <h3 className="prices__textSection_smal">послуги та ціни</h3>
          <p>
            Перманентний макіяж для бездоганної краси щодня! Професійно,
            безпечно, індивідуально.
          </p>
        </div>
        <ul className="prices__prices">
          <li className="prices__price">
            <p>
              <span>перманентний макіяж брів</span>
              <span className="prices__price_separator"></span>
              <span>1200 грн.</span>
            </p>
          </li>
          <li className="prices__price">
            <p>
              <span>макіяж брів</span>
              <span className="prices__price_separator"></span>
              <span>700 грн.</span>
            </p>
          </li>
          <li className="prices__price">
            <p>
              <span>
                макіяж брів макіяж брів макіяж брів <br /> макіяж брів
              </span>
              <span className="prices__price_separator"></span>
              <span>5700 грн.</span>
            </p>
          </li>
          <li className="prices__price">
            <p>
              <span>макіяж брів</span>
              <span className="prices__price_separator"></span>
              <span>700 грн.</span>
            </p>
          </li>
          <li className="prices__price">
            <p>
              <span>макіяж брів</span>
              <span className="prices__price_separator"></span>
              <span>700 грн.</span>
            </p>
          </li>
        </ul>
        <button className="prices__showMoreButton">показати всі послуги</button>
      </div>
    </section>
  );
};

export default Prices;
