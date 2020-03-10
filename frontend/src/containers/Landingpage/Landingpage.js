import React from 'react';
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
                    <button className="content__btn--register">Register</button>
                    <button className="content__btn--login">Log In</button>
                    <span className="content__browse-span">or <a href="#">browse without an account</a></span>
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
