import React from 'react';
import { Carousel } from 'antd';
import "../components/Carousel.css";
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import Typist from 'react-typist-updated';



class MyCarousel extends React.Component{
    render() {
        return(
            <Carousel autoplay>
            <div align="left" >
            <div className="texty-demo" style={{ marginTop: 190 }}>
            <div style={{  padding: '50px' }}><h1><Texty>WELCOME</Texty></h1>
            <Typist>Bermimpilah dalam hidup, jangan hidup dalam bermimpi</Typist></div>
            </div>
            </div>
            </Carousel>
        )
    }
}

export default MyCarousel;