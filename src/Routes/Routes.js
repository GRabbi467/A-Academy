import React from 'react';
import { createBrowserRouter, Route} from 'react-router-dom';
import Courses from '../Components/Courses/Courses';
import Blog from '../Components/Blog/Blog';
import About from '../Components/About/About'
import Home from '../Components/Home/Home';
import Main from '../Layout/Main';
import FAQ from './../Components/FAQ/FAQ';
import Course from '../Course/Course';
import Category from '../Category/Category';

 export const router = createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            children : [
                {path:'/',element:<Home></Home>},
                {path:'/courses',element: <Courses></Courses>,
                children:[
                    {path: 'category/:id',
                    element : <Category></Category>,
                    loader:({params})=> fetch(`http://localhost:5000/category/${params.id}`)},
                    
                    {path: 'course/:id',
                    element : <Course></Course>,
                    loader:({params})=> fetch(`http://localhost:5000/course/${params.id}`)},
                ]},
                {path:'/blog',element:<Blog></Blog>},
                {path:'/faq',element: <FAQ></FAQ>},
                {path:'/about',element: <About></About>},           
            ]
        }
    ])

