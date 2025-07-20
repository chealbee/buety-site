import React from "react";
import "./prices.scss";
import pricesData from "../../../pricesData.json";

interface PricesPopupProps {
  onClose: () => void;
}

const PricesPopup: React.FC<PricesPopupProps> = ({ onClose }) => {
  const data = pricesData;
  return (
    <div className="prices__popupOverlay" onClick={onClose}>
      <div className="prices__popup" onClick={(e) => e.stopPropagation()}>
        <button className="prices__popupClose" onClick={onClose}>
          &times;
        </button>
        <h3 className="prices__popupTitle">{data.popupTitle}</h3>
        <ul className="prices__prices">
          {data.popupItems.map((item, idx) => (
            <li className="prices__price" key={idx}>
              <p>
                <span dangerouslySetInnerHTML={{ __html: item.name }} />
                <span className="prices__price_separator"></span>
                <span>{item.price}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricesPopup;
