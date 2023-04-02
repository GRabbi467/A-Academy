import React from 'react';
import './HomeUpper.css';
import cartoon from '../../../Assets/Images/cartoon.jpg';
import { Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const HomeUpper = () => {
    return (
        <div className='home-page'>
     <div className="home-heading d-flex ">
     <div className='first-left' id='c1'>
        <h1 className='head-title text-primary'>“The major barrier to skill acquisition is not intellectual, it is emotional.”</h1>

        <p className='head-para p-8 font-semibold text-purple-600 text-2xl'>Learning is a relatively lasting change in behavior that is the result of experience. It is the acquisition of information, knowledge, and skills. When you think of learning, it's easy to focus on formal education that takes place during childhood and early adulthood. But learning is an ongoing process that takes place throughout life and isn't confined to the classroom.
        </p>
        <Link to = 'https://www.youtube.com/watch?v=5MgBikgcWnY'>
        <Button>Video<FaArrowRight  className='float-right ml-3'/></Button>
        </Link>
      </div>
      <div id='c2'>
        <img  className='head-img' src={cartoon} alt="" />
      </div>
     </div>
    </div>
    );
};

export default HomeUpper;