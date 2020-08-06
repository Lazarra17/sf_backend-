import React from "react";
import { Wrapper } from "../styles";
const Footer = () => {
  return (
    <Wrapper>
      <footer className="footer footer-dark mt-5">
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Help
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <p className="footer-remarks">@2020 SuperFlix All rights reserved.</p>
      </footer>
    </Wrapper>
  );
};

export default Footer;
