import React from 'react';
import logo from '../../free-logo2.svg';
import { FaFacebook,FaInstagram,FaLinkedinIn ,FaTwitter,FaRegCopyright} from "react-icons/fa";
import './Footer.css';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='footer'>
        <div className='wrap'>
            <div className="company-info">
             <img className='footer-logo'  src={logo} alt="" />
             <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi inventore culpa error velit neque dolor delectus.</p>
             <section className=' text-white d-flex justify-evenly mt-5'>
                <FaFacebook></FaFacebook>
                <FaInstagram></FaInstagram>
                <FaLinkedinIn></FaLinkedinIn>
                <FaTwitter></FaTwitter>
             </section>
            </div>

            <div className="minimal">
                <p className='text-center font-bold'>MINIMAL</p>
               <div className='links'>
                <p><Link>About Us</Link></p>
                <p><Link>Contact Us</Link></p>
                <p><Link>FAQs</Link></p>
               </div>
            </div>

            <div className="legal">
            <p className='text-center font-bold'>LEGAL</p>
            <div className='links'>
                <p><Link>Terms and conditions</Link></p>
                <p><Link>Privacy Policy</Link></p>
               </div>


            </div>

            <div className="contact">
            <p className='text-center font-bold'>CONTACT US</p>
            <div className='links'>
                <p><Link>Address: Dhaka 1212,Bangladesh</Link></p>
                <p><Link>Email:  a+@academy.com</Link></p>
               </div>


            </div>
            
            
        </div>
        <div className="copyright text-white"><FaRegCopyright className=' text-white float-left mt-1 mr-3'></FaRegCopyright>All Rights Reserved by A+ Academy.</div>
        </div>
    );
};

export default Footer;