import React from 'react'
import mobile from '../Images/mobile.png'
import secure from '../Images/secure.png'
import wallet from '../Images/wallet.png'
import money from '../Images/transactions.png'
import apple from '../Images/apple.png'
import playStore from '../Images/play-store.png'

function WalletSection() {
    return (
        <>
        <section className="wallet-section">
            <div className="content">
                <div className="wallet-content">
                    <div className="wallet-img">
                        <img src={mobile} alt="Mobile" />
                    </div>
                    <div className="wallet-text-content">
                        <div className="wallet-text">
                            <h1>Our wallet is built for the cryptocurrency beginner</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu Lorem ipsum dolor sit elit sed eiu Lorem ipsum dolor sit .</p>
                            <div className="wallet-features">
                                <div className="w-feature">
                                    <img src={secure} alt="verified" />
                                    <h4>Secure transfers with verified Casinos</h4>
                                </div>
                                <div className="w-feature">
                                    <img src={wallet} alt="verified" />
                                    <h4>Easily buy and sell CLV within the wallet</h4>
                                </div>
                                <div className="w-feature">
                                    <img src={money} alt="verified" />
                                    <h4>Pay as many as you want</h4>
                                </div>
                            </div>
                            <div className="wallet-btn">
                                <div className="apple w-btn">
                                    <img src={apple} alt="Apple" />
                                    <a href="/">APPLE</a>
                                </div>
                                <div className="playstore w-btn">
                                    <img src={playStore} alt="PlayStore" />
                                    <a href="/">PLAY STORE</a>
                                </div>
                            </div>
                            <p>*Windows app coming soon</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
        </>
    )
}

export default WalletSection
