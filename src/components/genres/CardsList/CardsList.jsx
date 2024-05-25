import { FilmCard } from "components/reapeated/FilmCard/FilmCard";
import { getFilmsByGenre } from "fetch";
import { tryCatchFn } from "functions/tryCatchFn";
import { useError } from "hooks/useError";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export const List = styled.ul`
  padding-top: 40px;
  padding-left: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

export const Item = styled.li`
  background-color: #eeeeee;
  border-radius: 50px;
  padding: 32px;
  transition: 100ms ease-in-out;
  height: 400px;
  width: 273px;
  &:hover {
    background-color: #c6d2ed;
  }
`;

export function CardsList() {
  const [filmsList, setFilmsList] = useState(null);
  const [error, setError] = useError();
  const { genreId } = useParams();
  useEffect(() => {
    const fetch = async () => {
      const data = await getFilmsByGenre(genreId);
      setFilmsList(data);
    };
    tryCatchFn(fetch, setError);
  }, [genreId, setError]);
  return (
    filmsList?.length > 0 && (
      <List>
        {filmsList.map((film) => (
          <Item>
            <FilmCard film={film} />
          </Item>
        ))}
      </List>
    )
  );
}
