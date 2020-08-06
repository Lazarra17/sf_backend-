import React from "react";
import { Action, Wrapper } from "./_styles";
import playBtn from "../../../assets/temp_imgs/play-btn-icon.png";
import romanticImg from "../../../assets/temp_imgs/tv_shows/romance/romantic.jpg";
const RomanticComponent = () => {
  return (
    <Wrapper>
      <Action>
        <div className="row">
          <div className="movie_genre">
            <span>
              <img
                src={playBtn}
                alt="play button"
                width="20px"
                className="movie_genre--image"
              />{" "}
              Romantic TV Shows
            </span>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
            <div className="movie-item">
              <a href="/">
                <img src={romanticImg} alt="alt" className="img-fluid" />
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
            <div className="movie-item">
              <a href="/">
                <img src={romanticImg} alt="alt" className="img-fluid" />
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
            <div className="movie-item">
              <a href="/">
                <img src={romanticImg} alt="alt" className="img-fluid" />
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
            <div className="movie-item">
              <a href="/">
                <img src={romanticImg} alt="alt" className="img-fluid" />
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
            <div className="movie-item">
              <a href="/">
                <img src={romanticImg} alt="alt" className="img-fluid" />
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
            <div className="movie-item">
              <a href="/">
                <img src={romanticImg} alt="alt" className="img-fluid" />
              </a>
            </div>
          </div>
        </div>
      </Action>
    </Wrapper>
  );
};

export default RomanticComponent;
