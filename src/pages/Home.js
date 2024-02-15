import React, { Fragment } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import HomePage from "../components/homepage/HomePage";

function Home(){

    return (
        <Fragment>
            <Header cartBtnVisible={false}/>
            <HomePage/>
            <Footer/>
        </Fragment>
    )
}

export default Home;