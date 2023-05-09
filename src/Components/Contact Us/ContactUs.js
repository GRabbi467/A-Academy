import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className='help-section'> 
            <h2 className='text-center text-5xl  text-blue-700'>Contact Us</h2>
        <div className="container-contact">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mwkjygbp"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              name="username"
              placeholder="Name"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              placeholder='Write your message here'
              cols="30"
              rows="6"
              autoComplete="off"
              required>
              </textarea>

            <input type="submit" className='form-control-btn' value='Send'/>
            
          </form>
        </div>
      </div>
        </div>
    );
};

export default ContactUs;