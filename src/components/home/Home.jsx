import React from "react"
import { Hero } from "./Hero"
import AllInOne from "./AllInOne";
import CardSection from "./CardSection";
import ProductHighlights from "./ProductHighlights";
import Customers from "./Customers";
import Comparison from "./Comparison";
import UseCases from "./UseCases";
import Security from "./Security";
import ConnectWithUs from "./ConnectWithUs";
import Footer from "./Footer";

export const Home = () => {
  return (
    <>
      <Hero />
<AllInOne />
<CardSection/>
<ProductHighlights/>
<Customers/>
<Comparison/>
<UseCases/>
<Security/>
<ConnectWithUs/>
<Footer/>
    </>
  )
}


