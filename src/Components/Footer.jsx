import React from 'react'
import logo from '../Images/logo.png'

const SubSection = (props)=>{
    return (
        <div className="footer-section">
            <h4>{props.item.title}</h4>
                <div className="sub-section">
                    {
                        props.item.content.map((it)=>{
                            return(
                                <p><a href="/">{it}</a></p>
                            )
                        })
                    }
                </div>
        </div>
    )
}
const Credits = () =>{
    return (
        <section className="credits">
            <div className="content">
                <h5>Developed By <a href="https://www.linkedin.com/in/shailesh-godghase-b4392220a/" target="_blank" rel="noreferrer">Shailesh Godghase</a> | <i className="fal fa-copyright"></i> 2021 All rights reserved.</h5>
            </div>
        </section>
    )
}
function Footer() {
    const Section = [ 
        {   
            id: "1",
            title: "About us",
            content: ["Support Center","Customer Center","About us","Copyright","Popular Campaign"]
        },
        {
            id: "2",
            title: "Our Information",
            content: ["Return Policy","Privacy Policy","Terms & Conditions","Site Map","Store Hours"]
        },
        {
            id: "3",
            title: "My Account",
            content: ["Press inquiries","Social media directories","Images & B-roll","Permissions","Speaker requests"]
        },
        {
            id: "4",
            title: "Policy",
            content: ["Application security","Software principles","Unwanted software","policy","Responsible supply"]
        }
    ]
    return (
        <>
        <section className="footer">
            <div className="content">
                <div className="footer-content">
                    <div className="company-info">
                        <img src={logo} alt="SG" /><span>React Next</span>
                        <p><a href="mailto:shaileshgodghase19@gmail.com">shaileshgodghase19@gmail.com</a></p>
                        <p>+887-889-54832</p>
                    </div>
                    {
                    Section.map((it,index)=> {
                        return <SubSection item={it} />
                    })}
                </div>
            </div>
        </section>    
        <Credits />
        </>
    )
}

export default Footer
