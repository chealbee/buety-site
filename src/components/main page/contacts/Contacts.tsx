import React from "react";
import "./styles.scss";
import contactsData from "../../../contactsData.json";

const Contacts = () => {
  const data = contactsData;
  return (
    <section className="contacts" id="section-contacts">
      <div className="contacts__topSection">
        <div className="contacts__topSection_left">
          <h4>Де ми знаходимось?</h4>
          <ul>
            {data.addresses.map((address, idx) => (
              <a href={address.href} key={idx} target="_blank">
                <li>{address.text}</li>
              </a>
            ))}
          </ul>
        </div>
        <div className="contacts__topSection_right">
          <h4>{data.contactsTitle}</h4>
          <ul>
            {data.contacts.map((contact, idx) => (
              <li key={idx}>
                <a href={contact.href} target="_blank">
                  <span>[{contact.index}]</span>
                  <span>{contact.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="contacts__titleWrapper">
        <h3>{data.title}</h3>
        <span className="contacts__decorCircle"></span>
      </div>
    </section>
  );
};

export default Contacts;
