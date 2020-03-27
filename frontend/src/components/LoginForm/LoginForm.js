import React, { useState, useContext } from 'react'
import './loginform.scss';
import UserContext from '../../UserContext';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(UserContext);
    async function onSubmitLogin(event) {
        event.preventDefault();
        const settings = {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        };
        try {
            const fetchResponse = await fetch(`http://localhost:5000/auth/login`, settings); //, settings);
            const data = await fetchResponse.json();
            // save token on cookies
            // save id on context
            setUser(data.user);

            return data;
        } catch (e) {
            return e;
        }    
    }
    return (
        <form className="login-form" onSubmit={onSubmitLogin}>
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
