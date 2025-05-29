import React from "react";
import "./prices.scss";

interface PricesPopupProps {
  onClose: () => void;
}

const PricesPopup: React.FC<PricesPopupProps> = ({ onClose }) => {
  return (
    <div className="prices__popupOverlay" onClick={onClose}>
      <div className="prices__popup" onClick={(e) => e.stopPropagation()}>
        <button className="prices__popupClose" onClick={onClose}>
          &times;
        </button>
        <h3 className="prices__popupTitle">Всі послуги</h3>
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
      </div>
    </div>
  );
};

export default PricesPopup;
