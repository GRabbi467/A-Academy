import React from 'react';
import './HomeMiddle.css';
import { FaHeadSideVirus ,FaUserTie,FaGraduationCap } from "react-icons/fa";
import { Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';


const HomeMiddle = () => {
    const navigate = useNavigate();

    const handleJoin=()=>{
        navigate('/courses')
        
    }
    return (
        <div className='ml-0'>
            <h1 className='text-center text-blue-600'>ENROLL NOW AND ...</h1>
            <div class="text-center boxes  grid grid-rows-1 grid-flow-col gap-0 m">

                <div id='box2' className='box-1 '>
                    <h2 className=' text-white mt-4'>Acuire Skills</h2>
                    <div className='icon-holder1'> <FaHeadSideVirus size={50}/></div>
                    <p className='mt-3 text-white text-xl '>Acquiring valuable industry skills can help you succeed in your current position and in future roles.</p>
                    <Button className='rounded-full' onClick={handleJoin}>JOIN NOW</Button>
                </div>





                <div id='box1' className='box-2'>
                <h1 className=' text-white mt-4'>Get Certificates</h1>
                <div className='icon-holder2'> <FaGraduationCap size={50}/></div>
                    <p className='mt-3 text-white text-xl '>Acquiring valuable industry skills can help you succeed in your current position and in future roles.</p>
                    <Button className='rounded-full' color='purple' onClick={handleJoin}>JOIN NOW</Button>
                </div>



                <div id='box2' className='box-1 '>
                    <h2 className=' text-white mt-4'>Land a Job</h2>
                    <div className='icon-holder1'> <FaUserTie size={50}/></div>
                    <p className='mt-3 text-white text-xl '>Looking for a new job can be an arduous process. However,with right strategy its easier to you. </p>
                    <Button className='rounded-full' onClick={handleJoin}>JOIN NOW</Button>
                </div>
                
            </div>
        </div>
    );
};

export default HomeMiddle;