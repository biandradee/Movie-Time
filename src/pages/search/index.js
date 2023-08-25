import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import './index.css';
import NoImage from '../../img/Image_not_available.png';

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const apiKey = '9a12b30faca48514244efbc658118648';
  const [searchResults, setSearchResults] = useState([]);
  const images = 'https://image.tmdb.org/t/p/w500';


  useEffect(() => {
    if (query) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`)
        .then(response => response.json())
        .then(data => setSearchResults(data.results))
        .catch(err => console.error(err));
    }
  }, [query, apiKey]);

  return (
    <div className='container-search'>
      <h2 className='search-title'>
        Results for: <span className='query-text'> {query}</span>
      </h2>

      <ul className='movie-list'>
        {searchResults.map(movie => (
          <li key={movie.id}>
            <Link to={`/details/${movie.id}`}><img src={movie.poster_path ? `${images}${movie.poster_path}` : NoImage} alt={movie.title} /></Link>
            <span>{movie.title}</span>
          </li>
        ))}
      </ul>

    </div>
  )
};

export default Search;