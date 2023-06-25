import React from "react";
import Footer from "./Footer";

const Contact = (props) => {
  return (
    <>
      <div className="container-fluid mt-4 ps-4 text-left">
        <h1>How to Find Us</h1>
        <p>If I tell you, then I'd to kill you 😉.</p>
        <h3 className="mt-5">Headquarters</h3>
        <p>Somewhere over the Rainbow 🌈 where Blue birds fly 🐦.</p>
      </div>
      <Footer mode={props.mode} />
    </>
  );
};

export default Contact;
