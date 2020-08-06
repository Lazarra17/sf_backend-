import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Container } from "react-bootstrap";
import { Content } from "./styles";
import BannerComponent from "./includes/banner";
import ActionComponent from "./includes/action";
import FantacyComponent from "./includes/fantacy";

import got from "../../assets/videos/got.mp4";
import gotsub from "../../assets/sub/gotEn.vtt";

import ReactPlayer from "react-player";
const Home = (props) => {
  return (
    <Fragment>
      <Helmet>
        <title>Home | Super Flix</title>
      </Helmet>
      <Content>
        <ReactPlayer
          url={got}
          controls={true}
          config={{
            file: {
              playerVars: { showinfo: 1 },
              tracks: [
                {
                  kind: "subtitles",
                  src: gotsub,
                  srcLang: "en",
                  default: true,
                },
              ],
            },
          }}
        />
        <Container className="mt-5">
          <BannerComponent />
          <ActionComponent />
          <FantacyComponent />
        </Container>
      </Content>
    </Fragment>
  );
};

export default Home;
