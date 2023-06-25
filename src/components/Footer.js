import React from "react";

const Footer = (props) => {
  return (
    <footer
      className={`footer-${props.mode === false ? "light" : "dark"} text-${
        props.mode === false ? "light" : "light"
      } fixed-bottom d-flex align-items-center justify-content-center`}
      style={{ marginBottom: "60px" }}
    >
      made with ❤️ by tookstanmay
    </footer>
  );
};

export default Footer;
