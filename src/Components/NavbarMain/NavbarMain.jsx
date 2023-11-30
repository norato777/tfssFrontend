import React, { useEffect } from "react";
import {
  cleanFilter,
  filterProductsCategory,
  getCategories,
} from "../../Redux/action";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import s from "./NavbarMain.module.css";

export default function NavbarMainAlt() {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    !category?.length && dispatch(getCategories());
  }, []);
  const handleClick = (e) => {
    dispatch(cleanFilter());
    dispatch(filterProductsCategory(e.name));
    navigate("/products");
  };
  return (
    <div className={s.containerNav}>
      <div className={s.containerNavbarMain}>
        {category?.slice(0, 10).map((e, i) => (
          <button className={s.button} onClick={() => handleClick(e)} key={i}>
            {e.name}
          </button>
        ))}
      </div>
    </div>
  );
}
