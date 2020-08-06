import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Container } from "react-bootstrap";
import { Wrapper } from "./styles";
import MyListComponent from "./includes/myList";
const TvShows = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Movies | Super Flix</title>
      </Helmet>
      <Wrapper>
        <Container className="mt-5">
          <MyListComponent />
        </Container>
      </Wrapper>
    </Fragment>
  );
};

export default TvShows;
