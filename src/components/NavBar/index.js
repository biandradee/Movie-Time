import React from 'react';
import './index.css';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

function NavBar() {
  const [search, setSearch] = useState("");
  const location = useLocation();
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
        <NavLink
          to='/'
          className={`subtitles ${location.pathname === '/movie-time' || location.pathname === '/' ? 'active-link' : ''}`}
        >
          Popular
        </NavLink>
        <NavLink
          to='/topRated'
          className={`subtitles ${location.pathname === '/topRated' ? 'active-link' : ''}`}
        >
          Top Rated
        </NavLink>
        <NavLink
          to='/upcoming'
          className={`subtitles ${location.pathname === '/upcoming' ? 'active-link' : ''}`}
        >
          Upcoming
        </NavLink>
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