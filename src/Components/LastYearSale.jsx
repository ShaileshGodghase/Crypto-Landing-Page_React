import React from 'react'
import graph from '../Images/graph.png'

function LastYearSale() {
    return (
        <>
            <section className="last-year-sale">
                <div className="content">
                    <div className="last-year-content">
                        <div className="sale-text" data-aos="fade-up">
                            <h1>
                                Total Investment sale from last year transaction
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu
                            </p>
                        </div>
                        <div className="sale-graph"  data-aos="fade-up">
                            <img src={graph} alt="Last years Sale" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LastYearSale
