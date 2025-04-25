import React from 'react';
import { Link } from 'react-router-dom'; 
import FavoritesList from '../../components/favoritelist/FavoriteList';

const FavoritesPage = () => {
  const myFavorites = ['React', 'JavaScript', 'Node.js']; 

  return (
    <div>
      <h1>Mis Favoritos</h1>
      <FavoritesList favorites={myFavorites} />
      <Link to="/">
        <button>Ir a Home</button>
      </Link>
    </div>
  );
};

export default FavoritesPage;