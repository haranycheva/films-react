import { FilmCard } from "components/reapeated/FilmCard/FilmCard";
import { Loader } from "components/reapeated/Loader";
import { getFilmsByGenre } from "fetch";
import { tryCatchFn } from "functions/tryCatchFn";
import { useErrorAndLoading } from "../../../hooks/useErrorAndLoading";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const LoaderWrapp = styled.div`
position: absolute;
top: 250px;
left: 50%;
transform: translateX(-50%);
`

export const List = styled.ul`
position: relative;
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
  const [error, setError, isLoading, setLoading] = useErrorAndLoading(false)
  const { genreId } = useParams();
  useEffect(() => {
    const fetch = async () => {
      const data = await getFilmsByGenre(genreId);
      setFilmsList(data);
    };
    setLoading(true)
    tryCatchFn(fetch,setLoading, setError);
    setLoading(false)
  }, [genreId, setError]);
  return (
    <>
      {error && <p>Ooooooooooops.... Something went wrong.....</p>}
        <List>
        {isLoading && <LoaderWrapp><Loader  /></LoaderWrapp>}
        {filmsList?.length > 0 && (
          filmsList.map((film) => (
            <Item key={film.id}>
              <FilmCard film={film} />
            </Item>
          )))}
        </List>
    </>
    )
}
