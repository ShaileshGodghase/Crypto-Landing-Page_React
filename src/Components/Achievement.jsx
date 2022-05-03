import React from 'react'
import award from '../Images/awards.png'
import community from '../Images/community.png'
import mcustomers from '../Images/customers.png'
import transactions from '../Images/transactions.png'

function Achievement() {

    const Card = (props) => {
        return (
            <div className="card" data-aos="fade-up">
                <img src={props.image} alt={props.name} />
                <h1>{props.count}</h1>
                <h3>{props.name}</h3>
            </div>
        )
    }
    return (
        <>
            <section className="achievement" id="achievements">
                <div className="content">
                    <div className="achievement-content">
                        <div className="all-cards">
                            <div className="card-section-1">
                                <Card name="Award" count="75000+" image={award}/>
                                <Card name="Community" count="9350+" image={community}/>
                            </div>
                            <div className="card-section-2">
                                <Card name="Million Customers" count="80" image={mcustomers}/>
                                <Card name="Transactions" count="30000+" image={transactions}/>
                            </div>
                        </div>
                        <div className="achivement-text-section" data-aos="fade-up">
                            <div className="text-content">
                                <h1>Our Largest Achievements</h1>
                                <p>We have worked with some leading agencies around the globe and their appreciation is our main strength. In the modern cryptocurrency era, customer satisfaction is our main criteria.</p>
                                <a href="/">See Our Stories <i className="fal fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Achievement
