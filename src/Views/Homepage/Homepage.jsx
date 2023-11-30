import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories, getProducts } from "../../Redux/action";
import Promobar from "../../Components/Promobar/Promobar";
import Header from "../../Components/Header/Header";
import NavbarMain from "../../Components/NavbarMain/NavbarMain";
import CardPubli from "../../Components/CardPubli/CardPubli";
import Carousel from "../../Components/Carousel/Carousel";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";
import Descuento from "../../Components/Descuentos/Descuentos";
import OurBrands from "../../Components/OurBrands/OurBrands";
import FeaturedCategories from "../../Components/FeaturedCategories/FeaturedCategories";
import Footer from "../../Components/Footer/Footer";
import { slides } from "../../carouselData";
import s from "./Homepage.module.css";

export default function Homepage() {
  const Products = useSelector((state) => state.products);
  const category = useSelector((state) => state.category);

  const dispatch = useDispatch();

  useEffect(() => {
    !Products.length && dispatch(getProducts());
    !category.length && dispatch(getCategories());
  }, [dispatch, Products]);

  return (
    <>
      {!Products.length ? (
        <span className={s.loader}></span>
      ) : (
        <>
          <Promobar />
          <Header />
          <NavbarMain />
          <div className={s.containerHome}>
            <div className={s.containerAdv}>
              <div className={s.containerAdvertise}>
                <CardPubli />
                <Carousel data={slides} />
              </div>
            </div>
            <FeaturedProducts />
            <Descuento />
            <OurBrands />
            <FeaturedCategories />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
