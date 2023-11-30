import React from "react";
import s from "./Footer.module.css";

export default function FooterAlt() {
  return (
    <div className={s.containerFooter}>
      <div className={s.subContainerFooter}>
        <div className={s.logo}>
          <img src="/TFSS.png" className={s.logo} />
        </div>
        <div className={s.infoContainer}>
          <div className={s.contentContact}>
            <h5 className={s.h3}>Contact</h5>
            <ul className={s.ul}>
              <li className={s.li}>Edison Sánchez</li>
              <li className={s.li}>Let`s talk!</li>
              <li className={s.li}>
                <i className="bi bi-whatsapp"></i> (+52) 55 4868 8568
              </li>
              <li className={s.li}>
                <i className="bi bi-envelope-at"></i> 7deved7@gmail.com
              </li>
            </ul>
          </div>
          <div className={s.contentLinks}>
            <h5 className={s.h3}>Useful links</h5>
            <ul className={s.ul}>
              <li className={s.li}>Returns & Exchanges</li>
              <li className={s.li}>Shipping all over the country</li>
              <li className={s.li}>Claims</li>
              <li className={s.li}>Work with us</li>
              <li className={s.li}>Be part of the evolution</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
