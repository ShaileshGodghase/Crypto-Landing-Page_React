import './styles.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import Mainsection from './Components/Mainsection';
import SaleCountdown from './Components/SaleCountdown';
import TheCoinSection from './Components/TheCoinSection';
import Achievement from './Components/Achievement';
import LastYearSale from './Components/LastYearSale';
import FundRaising from './Components/FundRaising';
import PrivacyFund from './Components/PrivacyFund';
import WalletSection from './Components/WalletSection';
import Faq from './Components/Faq';
import NewsLetter from './Components/NewsLetter';
import Footer from './Components/Footer';
import AOS from "aos";
import "aos/dist/aos.css";

class App extends Component {

  componentDidMount(){
    AOS.init();
    AOS.refresh();
  }
  render() {
    return (
     <>
      <Navbar />
      <Mainsection />
      <SaleCountdown />
      <TheCoinSection />
      <Achievement />
      <LastYearSale />
      <FundRaising />
      <PrivacyFund />
      <WalletSection />
      <Faq />
      <NewsLetter />
      <Footer />
     </>
    )
  }
}

export default App
