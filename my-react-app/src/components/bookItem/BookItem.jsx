import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../redux/booksSlice/booksSlice';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.books.favorites);

  const isFavorite = favorites.includes(book.id);

  return (
    <div>
      <h3>{book.title}</h3>
      <p>{book.author} - {book.year}</p>
      <p>{book.category}</p>
      <p>{book.synopsis}</p>
      <button onClick={() => dispatch(toggleFavorite(book.id))}>
        {isFavorite ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
      </button>
    </div>
  );
};

export default BookItem;