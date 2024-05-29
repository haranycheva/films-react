// import Swiper core and required modules
import { Navigation, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../../../../css/swiper.css";
import { FilmCard } from "components/reapeated/FilmCard/FilmCard";
import styled from "styled-components";

export const FilmCardWrapp = styled.div`
  background-color: #eeeeee;
  border-radius: 50px;
  padding: 32px;
  transition: 100ms ease-in-out;
  height: 360px;
  &:hover{
    background-color: #C6D2ED;
  }
`;
// 
export function SwiperPopular({ filmList }) {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, A11y]}
      spaceBetween={31}
      slidesPerView={3}
      navigation
    >
      {filmList.map((film) => (
        <SwiperSlide key={film.id}>
          <FilmCardWrapp>
            <FilmCard film={film} />
          </FilmCardWrapp>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
