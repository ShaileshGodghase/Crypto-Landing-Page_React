import React, { Component } from 'react'
import '../styles.css'
import logo from '../Images/logo.png'

class Navbar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             menuState: false,
             sticky: ""
        };
        this.menuClickHandler= this.menuClickHandler.bind(this);
        this.menuCloseHandler = this.menuCloseHandler.bind(this);
        this.listenToScroll = this.listenToScroll.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }
    listenToScroll(){
        window.scrollY > 0 ? this.setState({sticky: "sticky"}) : this.setState({sticky:""});
    }
    menuClickHandler(){
        this.setState({
            menuState: true
        })
    }
    menuCloseHandler(){
        this.setState({
            menuState: false
        })
    }
    render() {
        const {menuState,sticky} = this.state;
        return (
            <>
                <nav className={menuState ? `Navbar show ${sticky}`:`Navbar ${sticky}`}>
                    <div className="content">
                        <div className="logo">
                            <img src={logo} alt="SG" className="logo-icon" />
                            <a href="/">React Next</a>
                        </div>
                        <ul className="menu-list">
                            <div className="icon cancel-btn" onClick={this.menuCloseHandler}>
                                <i className="fas fa-times"></i>
                            </div>
                            <li><a onClick={this.menuCloseHandler}href="/">Home</a></li>
                            <li><a onClick={this.menuCloseHandler}href="#keyFeatures">Key Features</a></li>
                            <li><a onClick={this.menuCloseHandler}href="#fundRaising">Fund Raising</a></li>
                            <li><a onClick={this.menuCloseHandler}href="#achievements">Achievements</a></li>
                            <li><a onClick={this.menuCloseHandler}href="#faq">FAQ</a></li>
                            <li><a onClick={this.menuCloseHandler}href="/" className="try-for-free tff">Try For Free</a></li>
                        </ul>
                        <div className={menuState ? "icon menu-btn hide":"icon menu-btn"} onClick={this.menuClickHandler}>
                            <i className="fas fa-bars"></i>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar
