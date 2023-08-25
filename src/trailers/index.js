import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import { Link, useParams } from 'react-router-dom';
import './index.css';
import NoVideo from '../img/video_not_found.png';

function Trailers() {
  const [trailerKey, setTrailerKey] = useState('');
  const { id } = useParams();
  const apiKey = '9a12b30faca48514244efbc658118648';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        const trailer = data.results.find(result => result.site === 'YouTube');
        if (trailer) {
          setTrailerKey(trailer.key);
        }
      });
  }, [id]);

  return (
    <div className='trailer-container'>
      <div className='main-trailer'>
        <div className='trailer'>
          {trailerKey ? (
            <YouTube videoId={trailerKey} opts={{ playerVars: { autoplay: 1, fs: 1 } }} />
          ) : (
            <img className='video-not-found' src={NoVideo} alt="Video Not Found" />
          )}
        </div>
        <Link to={`/details/${id}`} className='close-trailer-button'>Go back</Link>
      </div>
    </div>
  )
};

export default Trailers;