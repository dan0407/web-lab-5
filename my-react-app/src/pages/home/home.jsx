import React from 'react';
import { Link } from 'react-router-dom'; 
import BookList from '../../components/booklist/BookList';

const Home = () => {
  return (
    <div>
      <h1>Bienvenido a la Página Principal</h1>
      <BookList />
      <Link to="/favorites">
        <button>Ir a Favoritos</button>
      </Link>
    </div>
  );
};

export default Home;