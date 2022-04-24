import React, { useRef} from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import {  useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin'


import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
const Login = () => {
    const emailRef = useRef('')
    const passRef = useRef('')
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()

    const location = useLocation()
    let from = location.state?.from?.pathname || '/'


    const handleSubmit =(event) => {
        event.preventDefault();
        const email = emailRef.current.value
        const password = passRef.current.value
        signInWithEmailAndPassword(email,password)
    }

    if(user){
      navigate(from,{replace:true})
    }

    return (
        <div className="container w-50 mt-4">
            <h3>login here</h3>
            <Form onSubmit={handleSubmit} classname="p-3">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passRef} type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  
  <p>New to Darkfam cars? <Link to="/register">Please Register</Link></p>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<SocialLogin/>
        
        </div>
        
    );
};

export default Login;