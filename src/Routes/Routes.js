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
import Signup from '../Components/SignUp/Signup';
import Login from '../Components/Login/Login';
import PrivateRoute from '../Components/Private Route/PrivateRoute';
import Error404rote from '../Components/Error404_route/Error404rote';

 export const router = createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            children : [
                {path:'/',element:<Home></Home>},
                {path:'/courses',element: <PrivateRoute><Courses></Courses></PrivateRoute>,
                children:[
                    {path: 'category/:id',
                    element : <Category></Category>,
                    loader:({params})=> fetch(`https://edusite-server.vercel.app/category/${params.id}`)},
                    
                    {path: 'course/:id',
                    element : <Course></Course>,
                    loader:({params})=> fetch(`https://edusite-server.vercel.app/course/${params.id}`)},
                ]},
                {path:'/blog',element:<Blog></Blog>},
                {path:'/faq',element: <FAQ></FAQ>},
                {path:'/about',element: <About></About>},
                {path:'/signup', element:<Signup></Signup>},
                {path:'/login', element:<Login></Login>},
                {path:'*' ,element:<Error404rote></Error404rote>}           
            ]
            
        }
    ])

