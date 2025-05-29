import React from "react";
import "./style.scss";
import Image from "next/image";
const MainSection = () => {
  return (
    <section className="mainSection">
      <div className="maincontainer mainSection__maincontainer">
        <h1>
          <span>black li</span>
          <span>beauty salon</span>
          <div className="decorSection">
            <Image
              className="decorImage"
              alt="decor image"
              src={"/women.png"}
              width={907}
              height={480}
            />
            <a href="#">
              Що ми робимо ?{" "}
              <Image alt="arow" src={"/roundArow.png"} width={33} height={33} />
            </a>
          </div>
        </h1>
        <div className="mainSection__textContent">
          <p>
            Перманентний макіяж для бездоганної краси щодня! Професійно,
            безпечно, індивідуально. Довіртеся майстрам, які підкреслять вашу
            природну чарівність!
          </p>
          <a href="#section-about">
            <button className="mainSection__moreButtont">
              <span>Більше про нас</span>

              <svg
                width="22"
                height="16"
                viewBox="0 0 22 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.8518 8.70711C21.2423 8.31658 21.2423 7.68342 20.8518 7.29289L14.4878 0.928931C14.0973 0.538407 13.4641 0.538407 13.0736 0.928931C12.6831 1.31946 12.6831 1.95262 13.0736 2.34314L18.7305 8L13.0736 13.6569C12.6831 14.0474 12.6831 14.6805 13.0736 15.0711C13.4641 15.4616 14.0973 15.4616 14.4878 15.0711L20.8518 8.70711ZM0.195313 9L20.1447 9L20.1447 7L0.195312 7L0.195313 9Z"
                  fill="#ECC14A"
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
