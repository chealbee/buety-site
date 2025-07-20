import React from "react";
import "./style.scss";
import Image from "next/image";
import mainSectionData from "@/mainSectionData.json";

const MainSection = () => {
  const data = mainSectionData;
  return (
    <section className="mainSection">
      <div className="maincontainer mainSection__maincontainer">
        <h1>
          <span>{data.title}</span>
          <span>{data.subtitle}</span>
          <div className="decorSection">
            <Image
              className="decorImage"
              alt={data.decorImageAlt}
              src={data.decorImage}
              width={907}
              height={480}
            />
            <a href={data.decorLink}>
              {data.decorLinkText}
              <Image alt="arow" src={data.decorArrow} width={33} height={33} />
            </a>
          </div>
        </h1>
        <div className="mainSection__textContent">
          <p>{data.description}</p>
          <a href={data.buttonLink}>
            <button className="mainSection__moreButtont">
              <span>{data.buttonText}</span>
              <svg
                width={data.buttonSvg.width}
                height={data.buttonSvg.height}
                viewBox={data.buttonSvg.viewBox}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d={data.buttonSvg.path.d}
                  fill={data.buttonSvg.path.fill}
                />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
