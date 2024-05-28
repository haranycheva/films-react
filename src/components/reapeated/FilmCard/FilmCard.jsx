import { Link } from "react-router-dom";
import styled from "styled-components";

const FilmTitle = styled.h4`
  color: #011627;

  font-family: Inter, sans-serif;
  font-size: 24px;
`;

export function FilmCard({ film }) {
  return (
    <Link to={"/" + film.id}>
      <img
        width="208px"
        height="278px"
        src={"https://image.tmdb.org/t/p/original" + film.poster_path}
        alt="poster"
      />
      <FilmTitle>{film.title.slice(0, 20)}</FilmTitle>
    </Link>
  );
}
