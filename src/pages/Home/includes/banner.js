import React from "react";
import { Banner } from "./styles";
import bannerImage from "../../../assets/temp_imgs/banner.jpg";
const BannerComponent = () => {
  return (
    <Banner>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="banner">
            <img className="img-fluid" alt="banner" src={bannerImage} />
          </div>
        </div>
      </div>
    </Banner>
  );
};

export default BannerComponent;
