import React from 'react';
import './index.css';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navigation() {
  const location = useLocation();
}

function NavBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <div className='container-nav-bar'>
      <div className='container-options'>
        <span className='container-title'>MovieTime</span>
        <Link
          to='/movie-time'
          className={`subtitles ${location.pathname === '/movie-time' ? 'active-link' : ''}`}
        >
          Popular
        </Link>
        <Link
          to='/topRated'
          className={`subtitles ${location.pathname === '/topRated' ? 'active-link' : ''}`}
        >
          Top Rated
        </Link>
        <Link
          to='/upcoming'
          className={`subtitles ${location.pathname === '/upcoming' ? 'active-link' : ''}`}
        >
          Upcoming
        </Link>
      </div>
      <form onSubmit={handleSubmit} className='input-area'>
        <input
          type='text'
          placeholder='Search for titles'
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button className='nav-button'>
          <BiSearchAlt2 className='search-icon' />
        </button>
      </form>
    </div>
  )
};

export default NavBar;