import { getMostPopularFilm } from "fetch";
import { useEffect, useState } from "react";
import { Container, Title } from "reapitedStyles";
import "@fontsource/jetbrains-mono"; // Імпортуйте шрифт Roboto

import {
  Description,
  FilmTitle,
  SectionMP,
  WrapperForImageAndText,
} from "./MostPopular.styled";
import StarRatings from "react-star-ratings";
import { tryCatchFn } from "functions/tryCatchFn";
import { useErrorAndLoading } from "../../../hooks/useErrorAndLoading";

export function MostPopular() {
  const [film, setFilm] = useState(null);
  const [error, setError, isLoading, setLoading]= useErrorAndLoading()
  useEffect(() => {
    const fetch = async () => {
        const data = await getMostPopularFilm();
        setFilm(data);
    };
    tryCatchFn(fetch,setLoading, setError)
  }, [setError]);
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
