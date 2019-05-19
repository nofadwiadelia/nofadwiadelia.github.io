import React from 'react';
import { Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import TweenOne from 'rc-tween-one';
import asset1 from '../components/page/img/asset1.png';
import asset2 from '../components/page/img/asset2.png';
import asset3 from '../components/page/img/asset3.png';
import asset4 from '../components/page/img/asset4.png';
import asset5 from '../components/page/img/asset5.png';

class KoCard extends React.Component{
    render() {
        return(

            <Card title="Hubungi Melalui" bordered={false}>
            <div style={{ background: '#ffff', padding: '20px' }}>
                <div>
                    <TweenOne
                    animation={{ x: '+=300px', y: '-=50px', duration: 1000 }}
                    style={{ opacity: 1, height: 100, transform: 'translate(50px,30px)' }}
                    >
                    <div><img src={asset1}/><span>&emsp;Guyangan, Tugu, Cawas, Klaten</span></div>
                    </TweenOne>
                </div>
                <div>
                    <TweenOne animation={{ x: '+=250px', y: '+=10px', rotate: 360, duration: 2000 }}
                    Style={{  top: 0, left: 50, width: 100, height: 10, background: '#000',
                    Transform: 'rotate(360deg)' }} >
                    <img src={asset2}/>
                    </TweenOne>
                    <TweenOne
                    animation={{ x: '+=330px', y: '-=100px', duration: 2000 }}
                    style={{ opacity: 1, height: 100, transform: 'translate(50px,30px)' }}
                    >
                    <div>089622372883</div>
                    </TweenOne>
                </div>
                <div>
                <TweenOne
                    animation={{ x: '+=380px', y: '-=150px', duration: 2000 }}
                    style={{ opacity: 1, height: 100, transform: 'translate(50px,30px)' }}
                    >
                    <div><img src={asset3}/><span>&emsp;nofadwiadelia47@gmail.com</span></div>
                    </TweenOne>
                </div>
                <div>
                    <TweenOne animation={{ x: '+=300px', y: '-=100px', rotate: 360, duration: 2000 }}
                    Style={{  top: 0, left: 50, width: 100, height: 10, background: '#000',
                    Transform: 'rotate(360deg)' }} >
                    <img src={asset4}/>
                    </TweenOne>
                    <TweenOne
                    animation={{ x: '+=380px', y: '-=200px', duration: 2000 }}
                    style={{ opacity: 1, height: 100, transform: 'translate(50px,30px)' }}
                    >
                    <div>nofa_adelia</div>
                </TweenOne>
                </div>
                <div>
                <TweenOne
                animation={[
                    { rotateY: 360, duration: 2000 },
                    { delay: -900, translateX: 400,translateY: -170, duration: 1000 },
                ]}
                style={{
                    x: '+=400px', y: '+=0px', width: 100,
                    transform: 'perspective(100px) rotateY(10deg)',
                }}
                >
                <div><img src={asset5}/></div>
                </TweenOne>
                <TweenOne
                    animation={{ x: '+=480px', y: '-=260px', duration: 2000 }}
                    style={{ opacity: 1, height: 100, transform: 'translate(50px,30px)' }}
                    >
                    <div>noffa_adelia</div>
                </TweenOne>
                </div>
            </div>
            </Card>
          
            
            
        )
    }
}

export default KoCard;