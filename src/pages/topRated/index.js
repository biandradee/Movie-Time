import React, { useEffect, useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import NoImage from '../../img/Image_not_available.png';

function TopRated() {
  const [topMovies, setTopMovies] = useState([]);
  const images = 'https://image.tmdb.org/t/p/w500';
  const apiKey = '9a12b30faca48514244efbc658118648';
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => setTopMovies(data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='container-top-rated'>
      <ul>
        {topMovies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/details/${movie.id}`}><img src={movie.poster_path ? `${images}${movie.poster_path}` : NoImage} alt={movie.title} /></Link>
              <span className='movie-title'>{movie.title}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
};

export default TopRated;