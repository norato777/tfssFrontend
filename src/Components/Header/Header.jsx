import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import LightMode from "../LightMode/LightMode";
import SearchBar from "../SearchBarMain/SearchBar";
import NavbarHeader from "../NavbarHeader/NavbarHeader";
import { useSelector } from "react-redux";
import { FaBars, FaTimes } from "react-icons/fa";
import s from "./Header.module.css";

export default function HeaderAlt() {
  const navigate = useNavigate();

  let num = useSelector((state) => state.num);

  useEffect(() => {}, [num]);

  const handleCart = () => {
    navigate("/cart");
  };
  const handleHome = () => {
    navigate("/");
  };

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(s.responsive_nav);
  };

  return (
    <>
      <div className={s.headerContainer}>
        <div className={s.headerSubcontainer}>
          <img src="/TFSS.png" onClick={handleHome} className={s.logo} />
          <div className={s.headerSearchbar}>
            <SearchBar />
            <div className={s.gencont}>
              <button onClick={showNavbar} className={`${s.openb} ${s.closeb}`}>
                <FaBars />
              </button>
              <nav ref={navRef} className={s.nav}>
                <button onClick={showNavbar} className={`${s.openb}`}>
                  <FaTimes />
                </button>
                <NavbarHeader />

                <button onClick={handleCart} className={s.button}>
                  <i className="bi bi-cart-check-fill">
                    {/* renders the number of items in the cart */}
                    {num ? <span className={s.num}>{num}</span> : null}
                  </i>
                </button>

                <LightMode />
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
