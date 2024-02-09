import React, { useState } from 'react';
import Header from '../Header/header';
import '../Login/Login.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Register() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    async function signup(e) {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/register", {
                userName: userName,
                email: email,
                password: password,
                passwordConfirm: passwordConfirm,
            });
            if (response.data.msg === "User registered successfully") {
                alert("User registered successfully");
                navigate('/login'); 
            } else {
                alert("Failed to register user: " + response.data.msg);
            }
        } catch (e) {
            setError(e.response.data.msg);
        }
    }

    return (
        <>
            <Header />
            <div className="bg-content">
                <div className="container">
                    <div className="overlay"></div>
                    <div className="Signup-box">
                        <h2><b>Sign up</b></h2>
                        <form action="#" method="post">
                            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} name="Username" placeholder="Username" required />
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="Email" placeholder="Email" required />
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Password" required />
                            <input id="confirmP" type="password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} name="Confirm password" placeholder="Confirm password" required />
                            <button type="submit" onClick={signup}>Sign up</button>
                        </form>
                        {error && <p className="error-msg">{error}</p>}
                        <p className="small-text">Already have an account? <Link to="/login">Login</Link></p>
                    </div>
                    <div className='cartoon'><img src='cartoon-2.png' alt=''></img></div>
                </div>
            </div>
        </>
    );
};

export default Register;

