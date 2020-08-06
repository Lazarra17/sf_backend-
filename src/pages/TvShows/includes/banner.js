import React from "react";
import { Banner } from "./_styles";
import bannerImage from "../../../assets/temp_imgs/banner-main-tv.jpg";
import playBtn from "../../../assets/temp_imgs/play-btn-icon.png";
const BannerComponent = () => {
  return (
    <Banner>
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-2">
          <div className="movie_genre">
            <span>
              <img
                src={playBtn}
                alt="play button"
                width="20px"
                className="movie_genre--image"
              />
              &nbsp; Movies
            </span>
          </div>
        </div>
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
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="banner">
            <img className="img-fluid" src={bannerImage} alt="alt" />
          </div>
        </div>
      </div>
    </Banner>
  );
};

export default BannerComponent;
