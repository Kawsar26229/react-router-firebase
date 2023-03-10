import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <div className='w-50 mx-auto mt-5 bg-light p-5 border rounded'>
      <Form>
      <Form.Group
          className='mb-3'
          controlId='formBasicName'>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter full name'
          />
        </Form.Group>
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
          Register
        </Button>
      </Form>
      <div className='mt-4'>
       <p>Already Have an Account? <Link to='/login'>Login</Link></p>
      </div>
    </div>
  );
};

export default Registration;
