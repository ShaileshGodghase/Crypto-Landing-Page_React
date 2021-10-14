import React from 'react'
import marketValue from '../Images/market-value.png';
import verifiedMining from "../Images/verified-mining.png";
import fastestMiner from "../Images/fastest-miner.png";
import secureTransactions from "../Images/secure-transactions.png";

const Feature = (props)=>{
    return (
        <div className="single-feature">
            <img src={props.img} alt="Market Value" />
            <h3>{props.h3}</h3>
            <p>{props.p}</p>
        </div>
    )
}
function TheCoinSection() {
    return (
        <section className="the-coin-section content" id="keyFeatures">
            <div className="coin-heading">
                <h1>Why you choose TheCoin</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu Lorem ipsum dolor Lorem ipsum dolor</p>
            </div>
            <div className="features">
                <Feature 
                    img = {marketValue}
                    h3 = "Great Market Value"
                    p = "The leading digital currency by market capitalization, has grown in value by more than 10 times."
                />
                <Feature 
                    img = {verifiedMining}
                    h3 = "Verified Mining"
                    p = "Your mining rigs are already set up and running. As soon as you set up your account."
                />
                <Feature 
                    img = {fastestMiner}
                    h3 = "Fastest Miner"
                    p = "Don’t wrestle with rig assembly and hot, noisy miners at home. We have the fastest bitcoin mining."
                />
                <Feature 
                    img = {secureTransactions}
                    h3 = "Secure Transactions"
                    p = "You can mine any cryptocurrency available in our catalogue! Switch your mining power."
                />
            </div>
        </section>
    )
}

export default TheCoinSection
