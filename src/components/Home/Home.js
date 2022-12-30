import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <nav className='nav'>
            <Link to='/shop'>Shop</Link>
            <Link to='/inventory'>Inventory</Link>
            <Link to='/checkout'>Checkout</Link>
            <Link to='/about'>About</Link>
            <Link to='/login'>Login</Link>
            <Link to='/registration'>Sign Up</Link>
        </nav>
    );
};

export default Home;