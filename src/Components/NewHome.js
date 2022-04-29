import React from "react";
import NewHeader from "./NewHeader";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Moblie from "./Mobile"
import Fashion from "./Fashion";

export default function Home(){
    
    return(
        <>
        <NewHeader/>
        <Carousel/>
        <Fashion/>
        <Moblie/>
        <Footer/>
        </>
    )
}