import React, { Fragment } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ContactUsForm from "../components/contactUsForm/ContactUsForm";

function ContactUs() {
  return (
    <Fragment>
      <Header />
      <ContactUsForm/>
      <Footer />
    </Fragment>
  );
}

export default ContactUs;
