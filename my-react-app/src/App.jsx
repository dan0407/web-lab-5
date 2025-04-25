import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/home/home';
import FavoritesPage from './pages/favorites/favorites';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;