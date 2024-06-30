import { GenresList } from "components/genres/GenresList/GenresList";
import { Outlet } from "react-router-dom";

import styled from "styled-components";

export const GenresWrapp = styled.div`
  display: flex;
`;

export function GenresPage() {
  return (
    <section>
        <GenresWrapp>
          <GenresList/>
          <Outlet/>
        </GenresWrapp>
    </section>
  );
}
