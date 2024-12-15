// MovieDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `http://www.omdbapi.com/?i=${id}&apikey=a5b589c5`
      );
      const data = await response.json();
      setMovie(data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} style={{ width: '300px' }} />
      <p>{movie.Plot}</p>
      <Link to="/book-seat">
        <button>Book Seat</button>
      </Link>
    </div>
  );
};

export default MovieDetails;
