import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Container } from "react-bootstrap";
import { Wrapper } from "./styles";
import BannerComponent from "./includes/banner";
import KoreanComponent from "./includes/korean";
import RomanticComponent from "./includes/romantic";
import ComediesComponent from "./includes/comedies";
import AsianComponent from "./includes/asian";
const TvShows = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Movies | Super Flix</title>
      </Helmet>
      <Wrapper>
        <Container className="mt-5">
          <BannerComponent />
          <KoreanComponent />
          <RomanticComponent />
          <ComediesComponent />
          <AsianComponent />
        </Container>
      </Wrapper>
    </Fragment>
  );
};

export default TvShows;
