import { FilmCard } from "components/reapeated/FilmCard/FilmCard";
import { getFilmsByGenre } from "fetch";
import { tryCatchFn } from "functions/tryCatchFn";
import { useCreateError } from "hooks/useCreateError";
import { useCreateLoading } from "hooks/useCreateLoading";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export const List = styled.ul`
  position: relative;
  padding: 40px 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
  const setLoading = useCallback(useCreateLoading(), []);
  const setError = useCallback(useCreateError(), []);
  const { genreId } = useParams();
  useEffect(() => {
    const fetch = async () => {
      const data = await getFilmsByGenre(genreId);
      setFilmsList(data);
    };
    tryCatchFn(fetch, setLoading, setError);
  }, [genreId, setError, setLoading]);
  return (
    <>
      <List>
        {filmsList?.length > 0 &&
          filmsList.map((film) => (
            <Item key={film.id}>
              <FilmCard film={film} />
            </Item>
          ))}
      </List>
    </>
  );
}
