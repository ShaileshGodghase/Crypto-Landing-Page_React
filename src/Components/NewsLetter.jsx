import React from 'react'

function NewsLetter() {
    return (
        <>
            <section className="newsLetter">
                <div className="content bg-blue">
                    <div className="newsletter-content">
                        <div className="newsletter-text" data-aos="fade-up">
                            <h3>Get Started Mining now!</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore</p>
                        </div>
                        <div className="input-area" data-aos="fade-up">
                            <input type="input" className="form__field" placeholder="Email Address" name="email" id='email' required />
                        </div>
                        <div className="get-access" data-aos="fade-up">
                            <a href="/">GET ACCESS</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewsLetter
