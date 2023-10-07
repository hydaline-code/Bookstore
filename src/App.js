import React from 'react';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import './App.css';
import Bookpage from './pages/bookpage';
import CategoriesPage from './pages/categoriespage';

function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/" element={<Bookpage />} />
          <Route path="/categories" element={<CategoriesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
