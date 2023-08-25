import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './index.css';
import { FaStar } from 'react-icons/fa';

function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const apiKey = '9a12b30faca48514244efbc658118648';
  const images = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        const { title, poster_path, overview, release_date, vote_average } = data;
        const movie = {
          id,
          title,
          sinopse: overview,
          image: `${images}${poster_path}`,
          releaseDate: release_date,
          voteAverage: vote_average.toFixed(1)
        }
        setMovie(movie)
      })
  }, [id]);

  return (
    <div className='container-details'>
      <div className='movie-details'>
        <img className='image-details' src={movie.image} alt={movie.sinopse} />
        <div className='details'>
          <h2 className='title-details'>{movie.title}</h2>
          <span className='sinopse'><strong>Sinopse: </strong>{movie.sinopse}</span>
          <span className='release-date'>Release date: {movie.releaseDate}</span>
          <p>
            <FaStar /> {movie.voteAverage}
          </p>
          <Link to={`/trailer/${id}`} className='open-trailer-button'>Trailer</Link>
        </div>
      </div>
    </div>
  )
};

export default Details;