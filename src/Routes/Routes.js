import React from 'react';
import { createBrowserRouter} from 'react-router-dom';
import Courses from '../Components/Courses/Courses';
import Blog from '../Components/Blog/Blog';
import About from '../Components/About/About'
import Home from '../Components/Home/Home';
import Main from '../Layout/Main';
import FAQ from './../Components/FAQ/FAQ';


 export const router = createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            children : [
                {path:'/',element:<Home></Home>},
                {path:'/course',element: <Courses></Courses>},
                {path:'/blog',element:<Blog></Blog>},
                {path:'/faq',element: <FAQ></FAQ>},
                {path:'/about',element: <About></About>},           
            ]
        }
    ])

