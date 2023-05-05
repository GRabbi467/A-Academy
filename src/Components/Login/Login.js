import React, { useContext } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Context/Authprovide/Authprovider';

const Login = () => {
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
      const user = userCredential.user;
      form.reset();
      navigate(from,{replace : true});
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
    
   }


    return (
        <div className='flex justify-center m-8 '>
        
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
   Login
  </Button>
  <p className='mt-3'><Link to='/signup'>Don't have an account?</Link></p>
</Form>

        
    </div>
    );
};

export default Login;