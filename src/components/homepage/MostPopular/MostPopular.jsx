import { getMostPopularFilm } from "fetch";
import { useEffect, useState } from "react";
import { Conrtainer, Title } from "reapitedStyles";
import "@fontsource/jetbrains-mono"; // Імпортуйте шрифт Roboto

import {
  Description,
  FilmTitle,
  SectionMP,
  WrapperForImageAndText,
} from "./MostPopular.styled";
import StarRatings from "react-star-ratings";

export function MostPopular() {
  const [film, setFilm] = useState(null);
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getMostPopularFilm();
        setFilm(data);
      } catch (error) {
        console.log("err:", error);
      } finally {
      }
    };
    fetch();
  }, []);
  console.log(film);
  return (
    <SectionMP>
      <Conrtainer>
        <Title>The most popular film</Title>
        {film ? (
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
                </div>{" "}
              </WrapperForImageAndText>
              <Description>{film.overview}</Description>
          </>
        ) : (
          ""
        )}
      </Conrtainer>
    </SectionMP>
  );
}
