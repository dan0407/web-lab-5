
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BookItem from '../bookItem/BookItem';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const [category, setCategory] = useState('Todos');

  const filteredBooks =
    category === 'Todos'
      ? books
      : books.filter((book) => book.category === category);

  return (
    <div>
      <h2>Lista de Libros</h2>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="Todos">Todos</option>
        <option value="Ciencia ficción">Ciencia ficción</option>
        <option value="Clásico">Clásico</option>
      </select>
      <div>
        {filteredBooks.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;