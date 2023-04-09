import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Signup = () => {
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email= form.email.value;
        const password = form.password.value;
        console.log(name,email,password);
    }
    return (
        <div className='flex justify-center m-8'>
            <Form onSubmit={handleSubmit}>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control name="name" type="name" placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail" required>
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword" required>
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Agree on Terms and conditions" />
      </Form.Group>
      <Button variant="primary" type="submit">
       Sign Up
      </Button>
      <p className='mt-3'><Link to='/login'>Already have an account?</Link></p>
    </Form>
    
            
        </div>
    );
};

export default Signup;