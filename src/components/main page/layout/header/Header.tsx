"use client";

import React, { useState } from "react";
import "./style.scss";
import Image from "next/image";
import headerData from "@/headerData.json";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  let menuClass = menuOpen ? "header BurgerMenuOpen" : "header";
  const data = headerData;
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
              {data.menu.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} onClick={() => setMenuOpen(false)}>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="instagramLink">
            <a href={data.instagram.href} target="_blank">
              <span>{data.instagram.text}</span>
              <Image
                src={data.instagram.logo}
                width={data.instagram.logoWidth}
                height={data.instagram.logoHeight}
                alt={data.instagram.logoAlt}
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
