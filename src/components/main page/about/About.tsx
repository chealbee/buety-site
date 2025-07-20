import React from "react";
import "./style.scss";
import aboutData from "../../../aboutData.json";

const About = () => {
  const data = aboutData;
  return (
    <section className="aboutSection" id="section-about">
      <h3>
        <span>{data.title}</span>
        <span>{data.subtitle}</span>
      </h3>
      <div className="aboutSection__textP">
        {data.paragraphs.map((text, idx) => (
          <p key={idx}>{text}</p>
        ))}
        <a href={data.linkHref}>{data.linkText}</a>
      </div>
    </section>
  );
};

export default About;
