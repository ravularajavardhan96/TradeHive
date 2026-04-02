import React from "react";
import Awards from "./Awards";
import Education from "./Education";
import Stats from "./Stats";
import Hero from "./Hero";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Pricing from "./Pricing";
import OpenAccount from "../OpenAccount";
import { Home } from "../../pages";

function HomePage(){
    return(
        <>

        <Hero/>
        <Awards/>
    
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        </>
    )
}

export default HomePage;