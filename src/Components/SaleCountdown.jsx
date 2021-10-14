import React, { Component } from 'react'

class SaleCountdown extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            Day: "10",
            Hours: "20",
            Minute: "30",
            Second: "40"         
        }
    }
    componentDidMount() {
        let tempDate = new Date();
        let tempYear = tempDate.getFullYear();
        let futureDate = new Date(tempYear, 11, 31, 0, 0, 0);
        const futureTime = futureDate.getTime();
        
        let countdown = setInterval(() => {    
            const today = new Date().getTime();
  
            const t = futureTime - today;
            const oneDay = 24 * 60 * 60 * 1000;
            const oneHour = 60 * 60 * 1000;
            const oneMinute = 60 * 1000;

            // calculate all values
            let days = t / oneDay;
            days = Math.floor(days);
            let hours = Math.floor((t % oneDay) / oneHour);
            let minutes = Math.floor((t % oneHour) / oneMinute);
            let seconds = Math.floor((t % oneMinute) / 1000);

            function format(item) {
                if (item < 10) {
                    return (item = `0${item}`);
                }
                return item;
            }
            this.setState({
                Day: format(days),
                Hour: format(hours),
                Minute: format(minutes),
                Second: format(seconds)
            })
            if (t < 0) {
                clearInterval(countdown);
              }
        }, 1000);
      }
    render() {
        const {Day,Hours,Minute,Second} = this.state;
        return (
            <>
            <section className="countdown-section content">
                <h1>Token Pre-sale starting in:</h1>
                <div className="countdown">
                    <div className="label">
                        <div className="countdown-format">
                            <h4>{Day}</h4>
                        </div>
                        <p>DAYS</p>
                    </div>
                    <span>:</span>
                    <div className="label">
                        <div className="countdown-format">
                            <h4>{Hours}</h4>
                        </div>
                        <p>HOURS</p>
                    </div>
                    <span>:</span>
                    <div className="label">
                        <div className="countdown-format">
                            <h4>{Minute}</h4>
                        </div>
                        <p>MINUTES</p>
                    </div>
                    <span>:</span>
                    <div className="label">
                        <div className="countdown-format">
                            <h4>{Second}</h4>
                        </div>
                        <p>SECONDS</p>
                    </div>
                </div>
                <button className="try-for-free">PRE ORDER NOW</button>
            </section>
            </>
        )
    }
}

export default SaleCountdown
