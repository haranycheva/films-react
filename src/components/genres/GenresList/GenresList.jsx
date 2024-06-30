import { getFilmGenres } from "fetch";
import {  useEffect,} from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectGenres } from "../../../redux/selectors";

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
  const genresList= useSelector(selectGenres);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getFilmGenres())
  }, [dispatch]);
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
