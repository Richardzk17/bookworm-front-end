import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import styles from './Landing.module.css';



const Landing = () => {

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.library}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={7}
            navigation
          >
            <SwiperSlide className={styles.swiperSlide}>Slide 1</SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>Slide 2</SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>Slide 3</SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>Slide 5</SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>Slide 4</SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>Slide 5</SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>Slide 7</SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>Slide 8</SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>Slide 9</SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>Slide 10</SwiperSlide>
          </Swiper>

        </div>

      </div>
    </div>
  );
};

export default Landing;


