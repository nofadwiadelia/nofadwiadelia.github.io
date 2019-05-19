import React, {Component} from 'react';
import MyCard from "../MyCard";
import FlipImage from "../FlipImage";
import axios from 'axios';
import QueueAnim from 'rc-queue-anim';
class Portofolio extends Component {

    state = {
        portfolio: []
    }
    componentDidMount() {
        axios.get(`https://my-json-server.typicode.com/nofadwiadelia/api-portfolio/portfolio`)
          .then(res => {
            const portfolio = res.data;
            this.setState({ portfolio });
          })
      }

    render() {
        return (
            <div >
                <QueueAnim type={['right', 'left']} className="demo-content">
                    <h2 key="h2">My Portofolio</h2>
                    <hr key="hr"/>
                    <ul>
                        { this.state.portfolio.map(portfolio => <li>{portfolio.portfolio_name }<br/>
                            {portfolio.desc } </li>)}
                    </ul>
                    <br/>
                    <FlipImage/>
                    <br/>
                    <br/>
                    <MyCard/>
                </QueueAnim>
                
            </div>
        );
    }
}

export default Portofolio;
