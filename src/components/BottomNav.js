import React from "react";
import { Link } from "react-router-dom";

export default function BottomNav(props) {
  return (
    <>
      <div
        className={`bottomNav-${
          props.mode === false ? "light" : "dark"
        } fixed-bottom d-flex align-items-center justify-content-center`}
        id="bottomNav"
      >
        {/* about, home (text), github, contact */}
        <Link to="/about">
          {" "}
          <img
            src={`./developer-${props.mode === false ? "dark" : "light"}.png`}
            alt=""
            className="bottomNavBtns"
          />
        </Link>
        <Link to="/">
          {" "}
          <img
            src={`./text-${props.mode === false ? "dark" : "light"}.png`}
            alt=""
            className="bottomNavBtns"
          />
        </Link>
        <Link to="/contact">
          {" "}
          <img
            src={`./bottle-${props.mode === false ? "dark" : "light"}.png`}
            alt=""
            className="bottomNavBtns"
          />
        </Link>
        <a
          href="https://github.com/tookstanmay"
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          <img
            src={`./github-${props.mode === false ? "dark" : "light"}.png`}
            alt=""
            className="bottomNavBtns"
          />
        </a>
      </div>
    </>
  );
}
