import React from "react";
import PropTypes from "prop-types";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { Container } from "react-bootstrap";

export default function MainLayout({ children }) {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
}

MainLayout.propTypes = {
  /**
   * Children Content
   */

  children: PropTypes.element.isRequired,
};
