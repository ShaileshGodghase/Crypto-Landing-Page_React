import React from 'react'
import Accordian from './Accordian'

function Faq() {
    const Questions = [
        {
            question: "How to contact with Customer Service?",
            answer: "Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!."
        },
        {
            question: "App installation failed, how to update system information?",
            answer: "Please read the documentation carefully . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum ."
        },
        {
            question: "Website reponse taking time, how to improve?",
            answer: "At first, Please check your internet connection . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum ."
        },
        {
            question: "New update fixed all bug and issues?",
            answer: "We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us ."
        }
    ]
    return (
        <section className="Faq" id="faq">
            <div className="content">
                <div className="faq-heading" data-aos="fade-up">
                    <h1>Have Any Question ?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu Lorem ipsum dolor Lorem ipsum dolor</p>
                </div>
                <Accordian question={Questions[0].question} answer={Questions[0].answer} id="One" />
                <Accordian question={Questions[1].question} answer={Questions[1].answer} id="Two" />
                <Accordian question={Questions[2].question} answer={Questions[2].answer} id="Three" />
                <Accordian question={Questions[3].question} answer={Questions[3].answer} id="Four" />
            </div>
        </section>
    )
}

export default Faq
