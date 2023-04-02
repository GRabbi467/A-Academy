import React from 'react';
import './Blog.css';
import Prices from '../Prices/Prices';
import Footer from '../Footer/Footer';

const Blog = () => {
    return (
        <div className='blog text-center'>
            <h1 className='text-cyan-800 mb-4'>Buy Premium</h1>
            <Prices></Prices>
        </div>
    );
};

export default Blog;