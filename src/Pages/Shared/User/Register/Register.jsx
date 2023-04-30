import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Provider/AuthProvider';

const Register = () => {

    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [accept, setAccept] = useState(false);

    const {createUser} = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault()

        setError('')
        setSuccess('')

        const form = e.target
        const name = form.name.value;
        const photo = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            setSuccess('User Created Successful')
        })
        .catch(error => {
            setError(error.message)
        })

    };


    const handleAccept = (e) => {

        setAccept(e.target.checked)
    };

    return (
        <div>
            <Container className='mx-auto w-25 my-5'>
                <h2 className='text-center my-5'>Register your account</h2>
                <hr />
                <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label className='fs-5 fw-semibold'>Your Name</Form.Label>
                            <Form.Control type="text" placeholder="Your Name" name='name' required/>
                            
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPhotoUrl">
                            <Form.Label className='fs-5 fw-semibold'>Photo URL</Form.Label>
                            <Form.Control type="text" placeholder="Photo URL" name='photoUrl' required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='fs-5 fw-semibold'>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name='email' required />
                            
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='fs-5 fw-semibold'>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name='password' required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check onClick={handleAccept} type="checkbox" 
                            label={<>Accept <Link className='text-reset ' to='/terms'>Term & Conditions</Link></>}  name='accept' required />
                        </Form.Group>

                        <Button variant="secondary" disabled={!accept} type="submit">
                            Submit
                        </Button>

                        <p className='my-3'>Already Registered ?  ? <Link  to='/login' className='text-danger fw-semibold'>Login</Link> </p>
    <br /><br />
                        <Form.Text className="text-success">
                            {success}
                        </Form.Text>

                        <Form.Text className="text-danger">
                            {error}
                        </Form.Text>

                    </Form>
         </Container>
        </div>
    );
};

export default Register;