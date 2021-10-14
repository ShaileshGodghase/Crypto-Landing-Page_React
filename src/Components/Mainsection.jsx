import React from 'react'
import mainBg from '../Images/banner-bg.png'

function Mainsection() {
    return (
        <section className="main-section content" id="mainSection">
        <div className="main-text">
            <div className="discount">
                <h4><span>25% Discount</span>on every first project</h4>
            </div>
            <div className="heading">
                <h1>
                Welcome next level cryptocurrency token with faster transfer
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore magna ipsum dolor sit amet consectetur.
                </p>
            </div>
            <div className="buttons">
                <button className="try-for-free">GET TOKEN</button>
                <button className="white-paper">WHITE PAPER</button>
            </div>
        </div>  
        <div className="main-image">
            <img src={mainBg} alt="BG" />
        </div>
        </section>
    )
}

export default Mainsection
