import React from 'react';
import "./Home.css";
import MyCarousel from '../Carousel';
import PicDetailsDemo from '../PicDetail';

class Home extends React.Component{
    render(){
        return(
            <div>
                <MyCarousel/>
                <br/>
                <PicDetailsDemo/>      
            </div>
        )
    }
}

export default Home;