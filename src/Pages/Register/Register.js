import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const emailRef = useRef('')
      const passRef = useRef('')
      const navigate = useNavigate()

      if(user){
        navigate('/home')
      }
    const handleSubmit = event => {
        event.preventDefault();
        const password = passRef.current.value
        const email = emailRef.current.value
       createUserWithEmailAndPassword(email,password)
        
    }
    return (
        <div className="container w-50 mt-4">
            <h3>Register here</h3>
            <Form onSubmit={handleSubmit} classname="p-3">
 
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>name</Form.Label>
    <Form.Control type="name" placeholder="name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>email</Form.Label>
    <Form.Control type="email" placeholder="Email" ref={emailRef} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control  type="password" placeholder="Password" ref={passRef} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <p>Alredy have an account? <Link to="/login">Login here</Link></p>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    );
};

export default Register;