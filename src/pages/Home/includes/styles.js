import styled from "styled-components";
import genreBg from "../../../assets/temp_imgs/genre-bg.png";

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
`;

export const Banner = styled.div``;

export const Action = styled.div`
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
  .movie_genre--image {
    padding-bottom: 3px;
  }
  .movie-item {
    padding: 0px 5px;
  }
`;

export const Fantacy = styled.div``;
