import { getFilm } from "fetch";
import { tryCatchFn } from "functions/tryCatchFn";
import { useErrorAndLoading } from "../../../hooks/useErrorAndLoading";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Title } from "reapitedStyles";
import styled from "styled-components";
import StarRatings from "react-star-ratings";

const Description = styled.p`
  color: #000;

  font-family: "JetBrains Mono";
  font-size: 40px;
`;

const Wripper = styled.div`
padding: 0 30px 30px;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
`

export function FilmPage() {
  const { filmId } = useParams();
  const [film, setFilm] = useState(null);
  const [error, setError, isLoading, setLoading] = useErrorAndLoading();
  useEffect(() => {
    const fetch = async () => {
      const data = await getFilm(filmId);
      setFilm(data);
    };
    tryCatchFn(fetch, setLoading, setError);
  }, [filmId, setError, setLoading]);
  console.log(isLoading);
  return (
    <section>
    {error && <p>Ooooooooooops.... Something went wrong.....</p>}
      {film && (
        <Wripper>
          <Title>{film.title}</Title>
          <img
            src={"https://image.tmdb.org/t/p/original" + film.poster_path}
            alt="poster"
            width="495px"
            height="782px"
          />
          <StarRatings
                    rating={film.vote_average / 2}
                    starRatedColor="#FF9F1C"
                    numberOfStars={5}
                    name="rating"
                    starEmptyColor="#AEB2BC"
                    starDimension="90px"
                  />
          <Description>{film.overview}</Description>
        </Wripper>
      )}
    </section>
  );
}
