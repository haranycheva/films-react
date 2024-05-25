import { GenresList } from "components/genres/GenresList/GenresList";
import { getFilmGenres } from "fetch";
import { tryCatchFn } from "functions/tryCatchFn";
import { useError } from "hooks/useError";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "reapitedStyles";
import styled from "styled-components";

export const GenresWrapp = styled.div`
  display: flex;
`;

export function GenresPage() {
  const [genresList, setGenresList] = useState(null);
  const [error, setError] = useError();
  useEffect(() => {
    const fetch = async () => {
      const data = await getFilmGenres();
      setGenresList(data);
    };
    tryCatchFn(fetch, setError);
  }, [setError]);
  console.log(genresList);
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
