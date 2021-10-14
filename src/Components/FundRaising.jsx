import React from 'react'
import fundGraph from '../Images/circular-graph.png'
import fundRaising from '../Images/fundraising.png'

function FundRaising() {
    return (
        <>
        <section className="fund-raising" id="fundRaising">
            <div className="content">
                <div className="fund-content">
                    <div className="fund-graph">
                        <img src={fundGraph} alt="Graph" />
                    </div>
                    <div className="fund-text-content">
                        <div className="fund-text">
                            <h1>Fund raising allocation</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu Lorem ipsum dolor sit .</p>
                            <img src={fundRaising} alt="Fund Raising" />
                        </div>
                    </div>
                </div>
            </div>
        </section>  
        </>
    )
}

export default FundRaising
