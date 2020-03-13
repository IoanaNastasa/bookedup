import React from 'react';
import { Link } from 'react-router-dom'
import { ReactSVG } from 'react-svg';
import girlreading from '../../assets/girl-reading.svg';
import './landingpage.styles.scss';
export default function Landingpage() {
    return (
        <div className="landingpage-container">
            <div className="landingpage-container__content">
                <div className="content__title">BookedUp</div>
                <section className="content__cta">The place you’ve dreamt of all your life is here. Join for something great!</section>
                <div>
                    <Link to="/auth/register" className="content__btn--register">Register</Link>
                    <Link to="/auth/login" className="content__btn--login">Log In</Link>
                    <Link to="/main/browse" className="content__browse-link">browse without an account</Link>
                </div>
            </div>
            <div className="landingpage-container__illustration-box">
                <ReactSVG 
                src={ girlreading }
                beforeInjection={svg => {
                    svg.classList.add('illustration-box__svg')
                }}
                />
            </div>
        </div>
    )
}
