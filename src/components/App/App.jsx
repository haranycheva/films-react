import { GlobalStyled } from "GlobalStyle.styled";
import { Layout } from "components/Layout/Layout";
import { CardsList } from "components/genres/CardsList/CardsList";
import { FilmPage } from "components/pages/FilmPage/FilmPage";
import { FilmsPage } from "components/pages/FilmsPage/FilmsPage";
import { GenresPage } from "components/pages/GenresPage/GenresPage";
import { HomePage } from "components/pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";

export function App() {
  return (
    <>
      <GlobalStyled />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="genres/" element={<GenresPage />}>
            <Route path=":genreId" element={<CardsList />} />
          </Route>
          <Route path=":filmId" element={<FilmPage />} />
          <Route path="*" element={<div>404 ERROR</div>} />
        </Route>
      </Routes>
    </>
  );
}
