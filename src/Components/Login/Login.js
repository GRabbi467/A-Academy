import React, { useContext, useState } from 'react';
import { Link, redirect, useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Context/Authprovide/Authprovider';

const Login = () => {
  const [error,setError] = useState('');
  const {user,signIn} = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';
  


   const handleSubmit =e=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email,password)
    .then((userCredential) => {
      
      const user2 = userCredential.user;
      form.reset();
      console.log(from);
     // navigate(from,{replace:true});
     navigate('/')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorCode);
    });
    
   }


    return (
        <div className='flex justify-center m-8 '>
        
    <Form onSubmit={handleSubmit}>
  

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
   Login
  </Button>
  <small className='text-red-600 ml-2'>{error}</small>
  <p className='mt-3'><Link to='/signup'>Don't have an account?</Link></p>
</Form>  
    </div>
    );
};

export default Login;