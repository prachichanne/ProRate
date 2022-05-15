import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Moblie from "./Mobile"
import Fashion from "./Fashion";

export default function Home(){
    
    return(
        <>
        <Header/>
        <Carousel/>
        <Fashion/>
        <Moblie/>
        <Footer/>
        </>
    )
}