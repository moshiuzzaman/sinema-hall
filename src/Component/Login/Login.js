import { Container } from '@material-ui/core';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './Config';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    let provider = new firebase.auth.GoogleAuthProvider();

    // goole login handeler function
    const googleSingInHandler = () => {
        firebase.auth().signInWithPopup(provider).then(function (result) {
            sessionStorage.setItem('user', JSON.stringify(result.user))
            history.push(from)
        })
    }

    return (
        <Container align="center" className='p-5'>
            <Link className="logo" to='/'>Sinema Hall</Link>
            <div className="login-section m-5">
                <h4 className="mb-4">Login With</h4>
                <Button onClick={googleSingInHandler} className="login-button"><FcGoogle className='login-button-icon' /> Continue with Google</Button>
                <p className='mt-2'>Don’t have an account? <span onClick={googleSingInHandler} className="create-account">Create an account</span></p>
            </div>
        </Container>
    );
};

export default Login;