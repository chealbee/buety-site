import React from "react";
import "./style.scss";

const About = () => {
  return (
    <section className="aboutSection" id="section-about">
      <h3>
        <span>більше</span>
        <span>про нас</span>
      </h3>
      <div className="aboutSection__textP">
        <p>
          Перманентний макіяж для бездоганної краси щодня! Професійно, безпечно,
          індивідуально. Довіртеся майстрам, які підкреслять вашу природну
          чарівність!
        </p>
        <p>
          Перманентний макіяж для бездоганної краси щодня! Професійно, безпечно,
          індивідуально.
        </p>
        <a href="">цікаво як виглядає наша робота ?</a>
      </div>
    </section>
  );
};

export default About;
