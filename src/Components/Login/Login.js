import React, { useState } from 'react';
import Header from '../Header/header';
import './Login.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    async function submit(e) {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/login", {
                email: email, 
                password: password
            })
            if (response.data.msg === "Login successful") {
                alert("Login successful");
                navigate('/dashboard'); 
            } else {
                alert("Failed to login user: " + response.data.msg);
            }
        }
        catch (e) {
            setError(e.response.data.msg);
        }
    }

    return (
        <>
            <Header />
            <div className="bg-content">
                <div className="container-l">
                    <div className="overlay"></div>
                    <div className="login-box">
                        <h2><b>Login</b></h2>
                        <form onSubmit={submit} method="post">
                            <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" required />
                            <input type="password" onChange={(e) => { setPassword(e.target.value) }} name="Password" placeholder="Password" required />
                            <button type="submit" onClick = {submit}>Login</button>
                        </form>
                        {error && <p className="error-msg">{error}</p>}
                        <p className="small-text">Don't have an account? <Link to="/register">SignUp</Link></p>
                    </div>
                    <div className='cartoon'><img src='cartoon-2.png' alt=''></img></div>
                </div>
            </div>
        </>
    );
};

export default Login;
