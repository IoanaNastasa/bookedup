import React, { useState } from 'react'
import './loginform.scss';
export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <form className="login-form">
            <div className="login-form__email-field">
                <label className="email-field__label">Email</label>
                <input 
                value={ email }
                onChange={ e => setEmail(e.target.value) }
                className="email-field__input"
                type="text"
                required></input>
            </div>
            <div className="login-form__password-field">
                <label className="password-field__label">Password</label>
                <input
                value={ password }
                onChange={ e => setPassword(e.target.value)}
                className="password-field__input"
                type="text"
                required></input>
            </div>
            <button className="login-form__submit-btn" type="submit">Submit</button>
        </form>
    )
}
