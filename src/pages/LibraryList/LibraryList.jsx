import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';

import styles from './LibraryList.module.css';
import { getIdOfBook } from '../BookSearch/BookSearch';

const baseUrl = 'https://openlibrary.org';

export async function searchFantasyBooks() {
  const response = await fetch(`${baseUrl}/subjects/fantasy.json?limit=10`);
  const data = await response.json();
  return data.works;
}

export async function searchClassicBooks() {
  const response = await fetch(`${baseUrl}/subjects/classic.json?limit=10`);
  const data = await response.json();
  return data.works;
}

export async function searchAdventureBooks() {
  const response = await fetch(`${baseUrl}/subjects/adventure.json?limit=10`);
  const data = await response.json();
  return data.works;
}

export async function searchThrillerBooks() {
  const response = await fetch(`${baseUrl}/subjects/thriller.json?limit=10`);
  const data = await response.json();
  return data.works;
}

const LibraryList = () => {
  const [books, setBooks] = useState([]);
  const [classicBooks, setClassicBooks] = useState([]);
  const [adventureBooks, setAdventureBooks] = useState([]);
  const [thrillerBooks, setThrillerBooks] = useState([]);




  useEffect(() => {
    searchFantasyBooks()
      .then((works) => {
        setBooks(works);
        console.log(works);
      })
      .catch((error) => console.error("Error fetching fantasy books:", error));

    searchClassicBooks()
      .then((works) => {
        setClassicBooks(works);
        console.log(works);
      })
      .catch((error) => console.error("Error fetching Classic books:", error));

      searchAdventureBooks()
      .then((works) => {
        setAdventureBooks(works);
        console.log(works);
      })
      .catch((error) => console.error("Error fetching Adventure books:", error));

      searchThrillerBooks()
      .then((works) => {
        setThrillerBooks(works);
        console.log(works);
      })
      .catch((error) => console.error("Error fetching Thriller books:", error));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
      <h2>Thriller Books</h2>
        <div className={styles.library}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={6}
            navigation
          >
            {thrillerBooks.map((book, index) => (
              <SwiperSlide key={index} className={styles.swiperSlide}>
                <Link to={`/book/${getIdOfBook(book.key)}`}>
                  <img src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`} alt={book.title} style={{ width: "130px", height: "200px" }} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <h2>Fantasy Books</h2>
        <div className={styles.library}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={6}
            navigation
          >
            {books.map((book, index) => (
              <SwiperSlide key={index} className={styles.swiperSlide}>
                <Link to={`/book/${getIdOfBook(book.key)}`}>
                  <img src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`} alt={book.title} style={{ width: "130px", height: "200px" }} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <h2>Classic Books</h2>
        <div className={styles.library}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={6}
            navigation
          >
            {classicBooks.map((book, index) => (
              <SwiperSlide key={index} className={styles.swiperSlide}>
                <Link to={`/book/${getIdOfBook(book.key)}`}>
                  <img src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`} alt={book.title} style={{ width: "130px", height: "200px" }} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          
        </div>
        <h2>Adventure Books</h2>
        <div className={styles.library}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={6}
            navigation
          >
            {adventureBooks.map((book, index) => (
              <SwiperSlide key={index} className={styles.swiperSlide}>
                <Link to={`/book/${getIdOfBook(book.key)}`}>
                  <img src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`} alt={book.title} style={{ width: "130px", height: "200px" }} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default LibraryList;