import { getFilmGenres } from "fetch";
import { tryCatchFn } from "functions/tryCatchFn";
import { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useCreateLoading } from "hooks/useCreateLoading";
import { useCreateError } from "hooks/useCreateError";

const GenreLink = styled(NavLink)`
  color: #011627;
  font-size: 48px;
  padding-left: 20px;
  padding-right: 10px;
  &.active, &:hover{
    background-color: #2EC4B6;
  }
`;

export const List = styled.ul`
  padding-top: 55px;
  background-color: #c6d2ed;
`;

export function GenresList() {
  const [genresList, setGenresList] = useState(null);
  const setLoading = useCallback(useCreateLoading(), []);
  const setError = useCallback(useCreateError(), []);
  useEffect(() => {
    const fetch = async () => {
      const data = await getFilmGenres();
      setGenresList(data);
    };
    tryCatchFn(fetch, setLoading, setError);
  }, [setError, setLoading]);
  return (
    <> 
      {genresList?.length > 0 && (
        <List>
          {genresList.map((genre) => (
            <GenreLink key={genre.id} to={`${genre.id}`}>
              {genre.name}
            </GenreLink>
          ))}
        </List>
      )}
    </>
  );
}
