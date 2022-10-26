import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Signup = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [accepted, setAccepted ] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result => {
            const user = result.user;
            setError('')
            navigate('/')
            form.reset();
            handleUpdateUserProfile(name, image)

        })
        .catch(err => setError(err.message))
        
        form.reset();
    }
    const handleAccepted = (event) => {
        setAccepted(event.target.checked)
    }
    const handleUpdateUserProfile = (name , photoUrl) => {
        const profile = {
            displayName: name,
            photoURL: photoUrl
        }
        updateUserProfile(profile)
        .then(()=>{})
        .catch(err => console.error(err.message))

    }
    return (
        <Form onSubmit={handleSubmit} className='w-75 mx-auto shadow-lg p-4 mt-5 rounded-3'>
            <h2>Please SignUp</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Image URL</Form.Label>
                <Form.Control type="text" name='image' placeholder="Enter your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required/>
                <Form.Group className="my-3" controlId="formBasicCheckbox">
                    <Form.Check
                    type="checkbox"
                    onClick={handleAccepted}
                    label={<>Accept <Link to='/terms'>Terms & Conditions</Link></>} />
                </Form.Group>
                <Form.Text className="text-danger">
                    {
                        error
                        ?
                        <p className='mt-2'>{error}</p>
                        :
                        <p className='opacity-0'>Registar successlly</p>
                    }
                </Form.Text>
            </Form.Group>
            <Button className='w-100 mb-2 fs-5' variant="primary" type="submit" disabled={!accepted}>
                Submit
            </Button>
        </Form>
    );
};

export default Signup;