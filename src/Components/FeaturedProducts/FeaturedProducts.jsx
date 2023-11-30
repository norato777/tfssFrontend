import React from "react";
import CardFeaturedProducts from "../CardFeaturedProducts/CardFeaturedProducts";
import s from "./FeaturedProducts.module.css";
export default function FeaturedProducts() {
  const num = 1;

  return (
    <>
      <div className={s.containerFeaturedP}>
        <div className={s.subcontainerFeaturedP}>
          <div className={s.containerTitle}>
            <h2 className={s.h2}>Featured Products</h2>
          </div>
          <div className={s.subcontainerCards}>
            <div className={s.cards}>
              <CardFeaturedProducts num={num + 5} />
              <CardFeaturedProducts num={num + 12} />
              <CardFeaturedProducts num={num + 16} />
              <CardFeaturedProducts num={num + 22} />
              <CardFeaturedProducts num={num + 32} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
