import React from 'react';
import './AboutContent.css';
import ReactPlayer from 'react-player';
import img from '../../Assets/Images/Contact.jpg';
import { Textarea } from "@material-tailwind/react"

const AboutContent = () => {
    return (
        <div className='content'>
            <div className="first-portion">
                <div className="first-portion-content">
                    <h1 className='text-6xl text-white'>Education - Your Door to the future</h1>
                    <p className='p-8 text-3xl pl-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quae, consequatur consectetur numquam mollitia unde eveniet deserunt neque iure cum dignissimos corrupti nulla dicta nam velit tenetur at fugit quaerat.</p>
                </div>

                <div className="first-portion-video">
                <ReactPlayer 
                url = 'https://www.youtube.com/watch?v=5MgBikgcWnY' 
                controls
                width='950px'
                height='600px'
                ></ReactPlayer>
                </div>
            </div>





            <div className="second-portion">
                <div className="img-section">
                <img 
                height='600px'
                width='600px'
                src={img} alt="" />
                </div>

                <div className="help-section ">
                   <h1 className='text-blue-600 text-center'>Message Us</h1>
                   <div className="text-area w-96 ">
                        <Textarea className='' label="Will be impleneted later" />
                   </div>
                   
                </div>
            </div>
            
        </div>
    );
};

export default AboutContent;