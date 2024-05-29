import { Container, Title } from "reapitedStyles";
import { SwiperPopular } from "./SwiperPopular/SwiperPopular";
import { useEffect, useState } from "react";
import { getPopularFilms } from "fetch";
import styled from "styled-components";
import { tryCatchFn } from "functions/tryCatchFn";
import {useErrorAndLoading } from "../../../hooks/useErrorAndLoading";

export const SectionPopular = styled.section`
  padding-top: 20px;
  padding-bottom: 77px;
`;

export function Popular() {
  const [filmList, setFilmList] = useState(null);
  const [error, setError, isLoading, setLoading]= useErrorAndLoading();
  useEffect(() => {
    const fetch = async () => {
      const data = await getPopularFilms();
      setFilmList(data);
    };
    tryCatchFn(fetch, setLoading, setError);
  }, [setError, setLoading]);
  return (
    <>
      {error && <p>Ooooooooooops.... Something went wrong.....</p>}
      {filmList?.length > 0 && (
        <SectionPopular>
          <Container>
            <Title>Popular films</Title>
            <SwiperPopular filmList={filmList} />
          </Container>
        </SectionPopular>
      )}
    </>
  );
}
