import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='w-50 mx-auto mt-5 bg-light p-5 border rounded'>
      <Form>
        <Form.Group
          className='mb-3'
          controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
          />
        </Form.Group>

        <Form.Group
          className='mb-3'
          controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
          />
        </Form.Group>
        <Button
          variant='primary'
          type='submit'>
          Login
        </Button>
      </Form>
      <div>
        <button className='border-0 btn btn-primary text-white rounded p-2 mt-4 me-5'>
          Google Sign In
        </button>
        <button className='border-0 btn btn-primary text-white rounded p-2 mt-4'>
          Github Sign In
        </button>
        <p className='mt-4'>
          <Link to='/registration'>Create New Account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
