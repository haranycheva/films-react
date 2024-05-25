import { Container, Title } from "reapitedStyles";
import { SwiperPopular } from "./SwiperPopular/SwiperPopular";
import { useEffect, useState } from "react";
import { getPopularFilms } from "fetch";
import styled from "styled-components";
import { tryCatchFn } from "functions/tryCatchFn";
import { useError } from "hooks/useError";
import { Loader } from "components/reapeated/Loader";

export const SectionPopular = styled.section`
  padding-top: 20px;
  padding-bottom: 77px;
`;

export function Popular() {
  const [filmList, setFilmList] = useState(null);
  const [error, setError] = useError();
  useEffect(() => {
    const fetch = async () => {
      const data = await getPopularFilms();
      setFilmList(data);
    };
    tryCatchFn(fetch,setError);
  }, [setError]);
  return (
    <>
      {error && <p>Ooooooooooops.... Something went wrong.....</p>}
      {filmList?.length > 0 && (
        <SectionPopular className="popular-films">
          <Container>
            <Title>Popular films</Title>
            <SwiperPopular filmList={filmList} />
          </Container>
        </SectionPopular>
      )}
    </>
  );
}
