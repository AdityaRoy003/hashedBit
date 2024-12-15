import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies
    const fetchMovies = async () => {
      const response = await fetch(
        'http://www.omdbapi.com/?s=marvel&apikey=a5b589c5'
      );
      const data = await response.json();
      setMovies(data.Search || []);
    };
    fetchMovies();
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', padding: '20px' }}>
      {movies.map((movie) => (
        <div key={movie.imdbID} style={{ textAlign: 'center', border: '1px solid #ccc', padding: '10px' }}>
          <img src={movie.Poster} alt={movie.Title} style={{ width: '100%' }} />
          <h3>{movie.Title}</h3>
          <Link to={`/movie/${movie.imdbID}`}>
            <button>View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
