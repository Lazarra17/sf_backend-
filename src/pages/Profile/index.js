import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Jumbotron } from "react-bootstrap";
import { Content } from "./styles";
const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Profile | Super Flix</title>
      </Helmet>
      <Content>
        <Jumbotron>Home</Jumbotron>
        <p className="ugok-test">Ugoks Ugoks</p>
      </Content>
    </Fragment>
  );
};

export default Home;
