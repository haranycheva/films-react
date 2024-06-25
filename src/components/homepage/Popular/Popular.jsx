import { Container, Title } from "reapitedStyles";
import { SwiperPopular } from "./SwiperPopular/SwiperPopular";
import { useCallback, useEffect, useState } from "react";
import { getPopularFilms } from "fetch";
import styled from "styled-components";
import { tryCatchFn } from "functions/tryCatchFn";
import { useCreateLoading } from "hooks/useCreateLoading";
import { useCreateError } from "hooks/useCreateError";

export const SectionPopular = styled.section`
  padding-top: 20px;
  padding-bottom: 77px;
`;

export function Popular() {
  const [filmList, setFilmList] = useState(null);
  const setLoading = useCallback(useCreateLoading(), []);
  const setError = useCallback(useCreateError(), []);
  console.log(1);
  useEffect(() => {
    const fetch = async () => {
      const data = await getPopularFilms();
      setFilmList(data);
    };
    tryCatchFn(fetch, setLoading, setError);
  }, [setLoading, setError]);
  return (
    <>
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
