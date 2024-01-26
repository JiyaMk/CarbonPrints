import React from 'react';
import Header from '../Header/header';
import './Login.css';
export const Login = () => {
    return (
        <>
        <Header/>
        <div class="container">
        <div className="box" id="box2">
                <div className="welcome-text">WELCOME TO <br />CO2 prints </div>
            </div>
        <div class="box" id="box1">
            <div class="login-box">
                <h2>Login</h2>
                <form action="#" method="post">
                    <input type="text" placeholder="Username" required />
                    <input type="text" name="Password" placeholder="Username" required />
                    <button type="submit">Login</button>
                </form>
                {/* <p class="small-text">Don't have an account? <a href="signup.html" target="_blank">Sign Up</a></p> */}
            </div>      

        </div>
    </div>
    </>
    );
};