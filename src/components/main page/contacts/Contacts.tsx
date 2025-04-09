import React from "react";
import "./styles.scss";

const Contacts = () => {
  return (
    <section className="contacts">
      <div className="contacts__topSection">
        <div className="contacts__topSection_left">
          <h4>Де ми знаходимось?</h4>
          <ul>
            <li>м. Київ, оболонь, грушевського 2</li>
            <li>м. Вінниця, вишенька, грушевського 32</li>
          </ul>
        </div>
        <div className="contacts__topSection_right">
          <h4>Ми завжди на зв’язку</h4>
          <ul>
            <li>
              <a href="">
                <span>[01]</span>
                <span>instagram</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>[02]</span>
                <span>facebook</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>[03]</span>
                <span>telegram</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>[04]</span>
                <span>+380 95 798902</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <h3>Контакти</h3>
    </section>
  );
};

export default Contacts;
