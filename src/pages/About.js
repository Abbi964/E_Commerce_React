import React, { Fragment } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import AboutInfo from "../components/about/AboutInfo";

function About(){

    return (
        <Fragment>
            <Header cartBtnVisible={false}/>
            <AboutInfo/>
            <Footer/>
        </Fragment>
    )
}

export default About;