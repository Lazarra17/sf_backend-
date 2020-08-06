import React from "react";
import { Action, Wrapper } from "./_styles";
// import playBtn from "../../../assets/temp_imgs/play-btn-icon.png";
import asianImg from "../../../assets/temp_imgs/tv_shows/asian/asian.jpg";
const AsianComponent = () => {
  return (
    <Wrapper>
      <Action>
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-2"></div>
          <div className="col-lg-8 col-md-8 col-sm-8"></div>
          <div className="col-lg-2 col-md-2 col-sm-2">
            <form>
              <select
                type="text"
                className="form-control sf-select"
                defaultValue="1"
              >
                <option value="1" disabled>
                  Genre
                </option>
                <option>Action</option>
                <option>Anime</option>
                <option>Asian</option>
                <option>Comedies</option>
                <option>Crime</option>
                <option>History</option>
                <option>Horror</option>
                <option>Kids</option>
              </select>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
            <div className="movie-item">
              <a href="/">
                <img src={asianImg} alt="alt" className="img-fluid" />
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
            <div className="movie-item">
              <a href="/">
                <img src={asianImg} alt="alt" className="img-fluid" />
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
            <div className="movie-item">
              <a href="/">
                <img src={asianImg} alt="alt" className="img-fluid" />
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
            <div className="movie-item">
              <a href="/">
                <img src={asianImg} alt="alt" className="img-fluid" />
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
            <div className="movie-item">
              <a href="/">
                <img src={asianImg} alt="alt" className="img-fluid" />
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
            <div className="movie-item">
              <a href="/">
                <img src={asianImg} alt="alt" className="img-fluid" />
              </a>
            </div>
          </div>
        </div>
      </Action>
    </Wrapper>
  );
};

export default AsianComponent;
