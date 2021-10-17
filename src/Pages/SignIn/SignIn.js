import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import initializeAuthentication from '../Login/Firebase/firebase.init';
import { useLocation, useHistory } from 'react-router-dom';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
initializeAuthentication();


const SignIn = () => {

    
        const { user, setUser, signInUsingGoogle } = useAuth();
    
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [name, setName] = useState('');
    
        const [success, setSuccess] = useState(false);
        const [error, setError] = useState('');
    
        const auth = getAuth();
    
        const location = useLocation();
        const history = useHistory();
        const redirect_url = location.state?.from || '/home';
    
        const signInGoogle = () => {
            signInUsingGoogle()
                .then(res => {
                    setUser(res.user);
                    history.push(redirect_url);
                })
                .catch(error => {
                    setError(error.message);
                })
        }
    
        const createUser = (e) => {
            e.preventDefault();
            createUserWithEmailAndPassword(auth, email, password)
                .then(res => {
                    setSuccess(true);
                    updateName();
                })
                .catch(error => {
                    setSuccess(false);
                    setError(error.message);
                })
        }
    
        const updateName = () => {
            updateProfile(auth.currentUser, {
                displayName: name
            })
                .then(res => {
    
                })
                .catch(error => {
                    setError(error.message);
                })
        }

    return (
        <>
            <div className="log-in-area py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 mx-auto p-0">
                            <div className="login-form">
                            {
                        error ? <div className="alert alert-danger" role="alert">
                            {error}
                        </div> : ''
                    }
                    {
                        success && <div className="alert alert-success" role="alert">
                            User sign up successfully! Now user can sign in.
                        </div>
                    }
                                <form onSubmit={createUser}>
                                    <input
                                    onBlur={(e) => setName(e.target.value)}
                                    type="text" className="form-control mb-3" placeholder="Name"/>
                                    <input 
                                    onBlur={(e) => setEmail(e.target.value)}
                                    type="email" className="form-control mb-3" placeholder="Email"/>
                                    <input
                                    onBlur={(e) => setPassword(e.target.value)}
                                    type="password" className="form-control mb-3" placeholder="Password"/>
                                    <input type="password" className="form-control mb-3" placeholder="Confirm Password"/>
                                    <button type="submit" className="mb-3 btn theme-bg text-white w-100 p-3">Sign in</button>
                                    <p className="text-center theme-color"><Link to="/login">Already have an account?</Link></p>
                                    {user.email}
                                </form>
                                <p>---------------------- or ----------------------</p>
                                <div className="text-center m-0">
                                    <button onClick={signInGoogle} className="m-0 g-btn"> Sign In With Google</button>
                                </div>
                            </div>  
                        </div>  
                    </div>  
                </div>  
            </div>  
        </>
    );
};

export default SignIn;