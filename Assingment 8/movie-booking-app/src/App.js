
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import BookingForm from './components/BookingForm';
import ConfirmationScreen from './components/ConfirmationScreen';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/book-seat" element={<BookingForm />} />
        <Route path="/confirmation" element={<ConfirmationScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
