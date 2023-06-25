import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function About(props) {
  return (
    <div className="container-fluid text-left ps-4 mt-4">
      <h1>About App</h1>
      <p className="mt-4">
        <span style={{ color: "#FF6E31" }}>changeTexts</span> is a text utility
        web application. Where you can change your texts. You can change your
        text to uppercase, lowercase, capitalize and do a lot more.
      </p>
      <p className="ms-3">
        Why just read here. Visit the{" "}
        <Link to="/" style={{ color: "#A27B5C", textDecoration: "none" }}>
          Text
        </Link>{" "}
        page and see the magic yourself.
      </p>
      <p>
        To change to {props.mode === false ? "dark" : "light"} mode, hit the
        icon at top-right.
      </p>
      <p>Technology used... 🤫</p>
      <Footer mode={props.mode} />
    </div>
  );
}
