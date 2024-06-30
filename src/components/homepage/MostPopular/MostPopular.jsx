import "@fontsource/jetbrains-mono";
import { getMostPopularFilm } from "fetch";
import { useEffect } from "react";
import { Container, Title } from "reapitedStyles";
import {
  Description,
  FilmTitle,
  SectionMP,
  WrapperForImageAndText,
} from "./MostPopular.styled";
import StarRatings from "react-star-ratings";
import { selectMostPopularFilm } from "../../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";

export function MostPopular() {
  const dispatch = useDispatch()
  const film = useSelector(selectMostPopularFilm)
  useEffect(() => {
    dispatch(getMostPopularFilm())
  }, [dispatch]);
  return (
    <SectionMP className="most-popular-film">
      <Container>
        <Title>The most popular film</Title>
        {film && (
          <>
              <WrapperForImageAndText>
                <img
                  width="650px"
                  height="365.625px"
                  src={"https://image.tmdb.org/t/p/original" + film.backdrop_path}
                  alt="film-preview"
                />
                <div>
                  <FilmTitle>{film.title}</FilmTitle>
                  <StarRatings
                    rating={film.vote_average / 2}
                    starRatedColor="#FF9F1C"
                    numberOfStars={5}
                    name="rating"
                    starEmptyColor="#AEB2BC"
                  />
                </div>
              </WrapperForImageAndText>
              <Description>{film.overview}</Description>
          </>
        )}
      </Container>
    </SectionMP>
  );
}
