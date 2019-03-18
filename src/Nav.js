import React from 'react';
// import Home from './Home';
import { Link } from 'react-router-dom';
import './App.css';


const Nav = () => {
    return (
        <header id='nav'>
            <Link className='link' to='/About'>About</Link>
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/FilmList'>Films</Link>
            
        </header>
    );
};

export default Nav;