import React from "react";
import { useNavigate } from "react-router-dom";
import s from "./CardPubli.module.css";

function CardPubli() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/products");
  };
  return (
    <div className={s.containerAdv}>
      <div className={s.card}>
        <img
          className={s.img}
          src="https://http2.mlstatic.com/D_NQ_NP_748792-MLA71072538433_082023-O.webp"
        />
        <div className={s.text}>
          <h3 className={s.h3}>REDMAGIC 8S Pro 120Hz Gaming Phone.</h3>
          <p className={s.p}>
            Under Screen Camera, 6000 mAh Android Phone, Snapdragon 8 Gen 2,
            16+512 GB, Dual-Sim, Unlocked Cell Phone (Transparent).
          </p>
          <button className={s.button} onClick={handleClick}>
            Conoce Más
          </button>
        </div>
      </div>

      <div className={s.card}>
        <img
          className={s.img}
          src="https://cdn.shopify.com/s/files/1/0482/6126/7617/articles/M314_1080x.jpg?v=1633105598"
        />
        <div div className={s.text}>
          <h3 className={s.h3}>
            Technology to take your setup to another level
          </h3>
          <p className={s.p}>
            The best keyboards, mice and gaming peripherals that you need to
            take your gaming computer to another level, they are here.
          </p>
          <button onClick={handleClick} className={s.button}>
            Ver Más
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardPubli;
