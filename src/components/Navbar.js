import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
      <nav className={props.mode === false ? "light-nav" : "dark-nav"}>
        <div className="container mx-2 d-flex justify-content-between">
          <span className="navbar-brand">{props.title}</span>{" "}
          <img
            src={`./${props.mode === false ? "light" : "dark"}-mode.png`}
            style={{
              height: "30px",
            }}
            alt=""
            onClick={props.toggleMode}
          />
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Meth Co.",
};
