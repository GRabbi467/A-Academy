import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Context/Authprovide/Authprovider';
import { GoogleAuthProvider } from 'firebase/auth';



const Signup = () => {
  const [error, setSError] = useState('');
  const {providerLogin,createUser} = useContext(AuthContext);
  const navigate = useNavigate();


 

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email= form.email.value;
        const password = form.password.value;
        console.log(name,email,password);
       createUser(email,password)
       .then(data=>{
        const user = data.user;
        form.reset();
       })
       .catch(error =>{
        const errorCode = error.code;
        const errorMessage = error.message;
        setSError(errorCode);
        console.log(errorCode)
        console.log(errorMessage)
       })
    }

    const handleGoogleSingIn =()=>{
     
      const provider = new GoogleAuthProvider();
      //google login function
     providerLogin(provider)
     .then(result=>{
       const user = result.user;
       navigate('/');
     })
     .catch(error=>{
       const errorMessage = error.message;
       const errorCode = error.code;
     })


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

      <Form.Group className="mb-3" controlId="formBasicCheckbox" required>
        <Form.Check type="checkbox" label="Agree on Terms and conditions" />
      </Form.Group>
      <Button variant="primary" type="submit">
       Sign Up
      </Button>
      <small className='text-red-600 ml-5'>{error.slice(5)}</small>

      <p>or
      </p>
      <Button onClick={handleGoogleSingIn}> SignUp with Google</Button>
      <p className='mt-3'><Link to='/login'>Already have an account?</Link></p>
    </Form>
    
            
        </div>
    );
};

export default Signup;