import { GenresList } from "components/genres/GenresList/GenresList";
import { getFilmGenres } from "fetch";
import { tryCatchFn } from "functions/tryCatchFn";
import {useErrorAndLoading } from "../../../hooks/useErrorAndLoading";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import styled from "styled-components";

export const GenresWrapp = styled.div`
  display: flex;
`;

export function GenresPage() {
  const [genresList, setGenresList] = useState(null);
  const [error, setError, isLoading, setLoading] = useErrorAndLoading();
  useEffect(() => {
    const fetch = async () => {
      const data = await getFilmGenres();
      setGenresList(data);
    };
    tryCatchFn(fetch, setLoading, setError);
  }, [setError, setLoading]);
  console.log(genresList);
  return (
    <section>
    {error && <p>Ooooooooooops.... Something went wrong.....</p>}
      {genresList?.length > 0 && (
        <GenresWrapp>
          <GenresList genres={genresList} />
          <Outlet/>
        </GenresWrapp>
      )}
    </section>
  );
}
