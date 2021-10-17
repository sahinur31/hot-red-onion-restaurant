
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { useLocation, useHistory } from 'react-router-dom';

const Login = () => {
    const { signInUsingGoogle, logOut, user, setUser } = useAuth();

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const [error, setError] = useState('');

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

  
    const auth = getAuth();

    const handleSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                setUser(res.user);
                history.push(redirect_url);
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
                            <div className="login-form text-center">
                            {
                                error && <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            }
                                <form onSubmit={handleSignIn}>
                                    <input
                                    onBlur={(e) => setEmail(e.target.value)}
                                    type="email" className="form-control mb-3" placeholder="Email"/>
                                    <input
                                    onBlur={(e) => setPassword(e.target.value)}
                                    type="password" className="form-control mb-3" placeholder="Password"/>
                                    <button type="submit" className="mb-3 btn theme-bg text-white w-100 p-3">Log in</button>
                                    <div className="pt-3 link">
                                        <Link to="/signin">Haven't Account?</Link>
                                    </div>
                                </form>
                                {/* <p>User: {user.displayName}</p> */}

                                {
                                    (!user?.displayName) ?
                                    <button onClick={signInUsingGoogle} className="btn mt-3 theme-bg text-white">
                                    Google Sign In
                                    </button>
                                    :
                                    <button onClick={logOut} className="btn mt-3 theme-bg text-white">
                                    Log Out
                                    </button>
                                
                                }
                            </div>  
                        </div>  
                    </div>  
                </div>  
            </div> 
        </>
    );
};

export default Login;