import React, { useState } from 'react'
import './registerform.scss'

export default function RegisterForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    return (
        <form className="register-form">
            <div className="register-form__firstName-field">
                <label className="firstName-field__label">First Name</label>
                <input className="firstName-field__input" value={firstName} onChange={e => setFirstName(e.target.value)} type="text"/>
            </div>
            <div className="register-form__lastName-field">
                <label className="lastName-field__label">Last Name</label>
                <input className="lastName-field__input" value={lastName} onChange={e => setLastName(e.target.value)} type="text"/>
            </div>
            <div className="register-form__email-field">
                <label className="email-field__label">Email</label>
                <input className="email-field__input" value={email} onChange={e => setEmail(e.target.value)} type="text"/>
                </div>
            <div className="register-form__password-field">
                <label className="password-field__label">Password</label>
                <input className="password-field__input" value={password} onChange={e => setPassword(e.target.value)} type="text"/>
            </div>
            <div className="register-form__repeatPassword-field">
                <label className="repeatpassword-field__label">Repeat password</label>
                <input className="repeatpassword-field__input" value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)} type="text"/>
            </div>
            <button className="register-form__submit-btn" type="submit">Create new account</button>
        </form>
    )
}
