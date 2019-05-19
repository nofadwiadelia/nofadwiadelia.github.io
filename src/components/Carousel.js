import React from 'react';
import { Carousel } from 'antd';
import "../components/Carousel.css";
// import bg from "../components/page/img/bg.png";
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';



class MyCarousel extends React.Component{
    render() {
        return(
            <Carousel autoplay>
            <div align="left" >
            <div className="texty-demo" style={{ marginTop: 24 }}>
            <div style={{  padding: '50px' }}><h1><Texty>WELCOME</Texty></h1></div>
            </div>
                {/* <Typist>
                    WELCOME <br/>
                    <span className="typist">
                  Making the Impossible...Possible...
                </span>
                </Typist> */}
            </div>

                
            </Carousel>
        )
    }
}

export default MyCarousel;