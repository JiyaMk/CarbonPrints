import React from 'react';
import Header from '../Header/header';
import './Register.css';

export const Register = () => {
    return (
        <div>
            <Header/>
            <div className="box" id="box2">
                <div className="welcome-text">WELCOME TO <br />CO2 prints </div>
            </div>
            <div className="Signup-box">
                <h2>Sign up</h2>
                <form action="#" method="post">
                    <input type="text" name="Username" placeholder="Username" required />
                    <input type="email" name="Email" placeholder="Email" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <input id="confirmP" type="password" name="Confirm password" placeholder="Confirm password" required />
                    <button type="submit">Sign up</button>
                </form>
            </div>
        </div>
    );
};