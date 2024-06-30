import { Container, Title } from "reapitedStyles";
import { SwiperPopular } from "./SwiperPopular/SwiperPopular";
import { useEffect} from "react";
import { getPopularFilms } from "fetch";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectMostPopular } from "../../../redux/selectors";

export const SectionPopular = styled.section`
  padding-top: 20px;
  padding-bottom: 77px;
`;

export function Popular() {
  const filmList = useSelector(selectMostPopular)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularFilms())
  }, [dispatch]);
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
