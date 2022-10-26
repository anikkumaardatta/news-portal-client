import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';


const Login = () => {
    const [error , setError] = useState(false);
    const {signIn} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;  
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
        .then(result => {
            const user = result.user;
            form.reset()
            setError(false)
            navigate(from, { replace: true });
        })
        .catch(err => setError(err))
    }
    
    return (
        <Form onSubmit={handleSubmit} className='w-75 mx-auto shadow-lg p-4 mt-5 rounded-3'>
            <h2>Please Login</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" />
                <Form.Text className={error? "text-danger" : "text-success"}>
                    {
                        error
                        ?
                        <p className='mt-2'>Please type valid username or password.</p>
                        :
                        <p className='mt-2 opacity-0'>login successfully</p>

                    }
                </Form.Text>
            </Form.Group>
            <Button className='w-100 mb-2 fs-5' variant="primary" type="submit">
                Log In
            </Button>
        </Form>
    );
};

export default Login;