import { FilmCard } from "components/reapeated/FilmCard/FilmCard";
import { getFilmsByGenre } from "fetch";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectFilmsByGenres } from "../../../redux/selectors";
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
  const filmsList = useSelector(selectFilmsByGenres)
  const dispatch = useDispatch();
  const { genreId } = useParams();
  useEffect(() => {
    dispatch(getFilmsByGenre(genreId))
  }, [dispatch, genreId]);
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
