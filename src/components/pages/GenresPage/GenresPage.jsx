import { GenresList } from "components/genres/GenresList/GenresList";
import { getFilmGenres } from "fetch";
import { tryCatchFn } from "functions/tryCatchFn";
import { useCallback, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import styled from "styled-components";
import { useCreateLoading } from "hooks/useCreateLoading";
import { useCreateError } from "hooks/useCreateError";

export const GenresWrapp = styled.div`
  display: flex;
`;

export function GenresPage() {
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
    <section>
      {genresList?.length > 0 && (
        <GenresWrapp>
          <GenresList genres={genresList} />
          <Outlet/>
        </GenresWrapp>
      )}
    </section>
  );
}
