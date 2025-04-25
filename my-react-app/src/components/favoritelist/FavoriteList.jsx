// src/components/FavoriteList.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from '../bookItem/BookItem';

const FavoriteList = () => {
  const books = useSelector((state) => state.books.books);
  const favorites = useSelector((state) => state.books.favorites);

  const favoriteBooks = books.filter((book) => favorites.includes(book.id));

  return (
    <div>
      <h2>Libros Favoritos</h2>
      <div>
        {favoriteBooks.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default FavoriteList;