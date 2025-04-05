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
              <li>ціни та послуги</li>
              <li>про нас</li>
              <li>наші роботи</li>
              <li>контакти</li>
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
