import styled from "styled-components";
import genreBg from "../../assets/temp_imgs/genre-bg.png";

export const Wrapper = styled.div`
  .movie_genre {
    font-weight: bold;
    color: #f1f1f1;
    background-image: url(${genreBg});
    background-repeat: no-repeat;
    background-size: contain;
    margin-top: 20px;
    margin-bottom: 5px;
    padding: 3px 0px;
    padding-left: 5px;
    width: 220px;
  }

  .uploader-container {
    width: 100%;
    padding: 56px 0;
    border: 2px dashed #ccc;
    text-align: center;
    cursor: pointer;
    color: #585758;
    outline: none;
    .upload-style-button {
      display: inline-block;
      border: 1px solid #36613e;
      padding: 2px 10px;
      border-radius: 0.2rem;
      color: #ffffff;
      background-color: #36613e;
      font-size: 0.7rem;
    }
    &:focus,
    &:hover,
    &.open {
      border-color: #36613e;
      .upload-style-button {
        border-color: #2a5231;
        background-color: #2a5231;
      }
    }
  }
`;

export const Content = styled.div``;
