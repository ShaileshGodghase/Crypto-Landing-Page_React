import React from 'react'
import privacy from '../Images/privacy-preserving.png'

function PrivacyFund() {
    return (
        <>
        <section className="privacy-fund">
            <div className="content">
                <div className="privacy-fund-content">
                    <div className="privacy-fund-text">
                        <h1>Privacy Preserving Anonymous Funds Protocol</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu</p>
                    </div>
                    <div className="privacy-fund-image">
                        <img src={privacy} alt="Mobile" />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default PrivacyFund
