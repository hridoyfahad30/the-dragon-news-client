import React, { useContext, useState } from 'react';
import { Button, Container, Form, Toast } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Provider/AuthProvider';

const Login = () => {

    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const {signIn} = useContext(AuthContext);

    const location = useLocation();
    
    const from = location?.state?.from?.pathname || '/';

    const navigate = useNavigate()

    const loginHandle = (e) => {
        e.preventDefault()

        setSuccess('');
        setError('')

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const loggedInUser = result.user;
            setSuccess('LogIn Successful');
            navigate(from)
        })
        .catch(error => {
            setError(error.message)
        })
        
        
    }

    return (
        <Container className='mx-auto w-25 my-5'>
            <h2 className='text-center my-5'>Login your account</h2>
            <hr />
             <Form onSubmit={loginHandle}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fs-5 fw-semibold'>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' required />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='fs-5 fw-semibold'>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name='password' required />
                    </Form.Group>


                    <Button variant="secondary" type="submit">
                        Submit
                    </Button>

                    <p className='mt-4 mb-2'>Dont’t Have An Account ? <Link  to='/register' className='text-danger fw-semibold'>Register</Link> </p>

                    <Form.Text className="text-success fs-5 fw-semibold">
                        {
                            success
                        }

                    </Form.Text>

                    <Form.Text className="text-danger fs-5 fw-semibold">
                        {error}
                    </Form.Text>

                </Form>

                
        </Container>
    );
};

export default Login;