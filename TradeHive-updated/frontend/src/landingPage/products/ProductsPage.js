import React from "react";
import Universe from "./Universe";
import LeftSection from "./LeftSection";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Hero from "./Hero";
import RightSection from "./RightSection";
function ProductsPage(){
    return(
       <>
    
       <Hero/>
      
        <LeftSection 
            imageURL="assets\images-20250426T135433Z-001\images\kite.png"
            prodTitle="Kite"
            prodDesp="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
            tryDemo="#"
            learnMore="#"
            googlePlay="#"
            appStore="#"/>


        <RightSection 
            imageURL="assets\images-20250426T135433Z-001\images\console.png"
            prodTitle="Console"
            prodDesp="The central dashboard for your TradeHive account. Gain insights into your trades and investments with in-depth reports and visualisations."
            learnMore="#"
           />

<LeftSection 
            imageURL="assets\images-20250426T135433Z-001\images\coin.png"
            prodTitle="Coin"
            prodDesp="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
            tryDemo="#"
            learnMore="#"
            googlePlay="#"
            appStore="#"/>


        <RightSection 
            imageURL="assets\images-20250426T135433Z-001\images\kiteconnect.png"
            prodTitle="Kite Connect API"
            prodDesp="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.."
            kiteConnect="#"
           />

<LeftSection 
            imageURL="assets\images-20250426T135433Z-001\images\varsity.png"
            prodTitle="Kite"
            prodDesp="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
            tryDemo="#"
            learnMore="#"
            googlePlay="#"
            appStore="#"/>


       
        <Universe/>
      
        </>
    )
}

export default ProductsPage;