"use client";

import React, { useState } from "react";
import "./style.scss";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  let menuClass = menuOpen ? "header BurgerMenuOpen" : "header";
  return (
    <header className={menuClass}>
      <div className="maincontainer">
        <div className="header__top ">
          <nav className="burger">
            <button
              className="burgerButton"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <div className="burgerLine"></div>
            </button>
            <ul>
              <li>
                <a href="#section-prices" onClick={() => setMenuOpen(false)}>
                  ціни та послуги
                </a>
              </li>
              <li>
                <a href="#section-about" onClick={() => setMenuOpen(false)}>
                  про нас
                </a>
              </li>
              <li>
                <a href="#section-works" onClick={() => setMenuOpen(false)}>
                  наші роботи
                </a>
              </li>
              <li>
                <a href="#section-contacts" onClick={() => setMenuOpen(false)}>
                  контакти
                </a>
              </li>
            </ul>
          </nav>
          <div className="instagramLink">
            <a href="#">
              <span>@_black_li__beauti_akademy </span>{" "}
              <Image
                src={"/instalogo.png"}
                width={39}
                height={39}
                alt="instagram logo"
              />
            </a>
          </div>
        </div>
        <div className="header__decor"></div>
      </div>
    </header>
  );
};

export default Header;
