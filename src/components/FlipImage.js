import React from 'react';
import { Col, Row } from 'antd';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import QueueAnim from 'rc-queue-anim';
import zayn from './page/img/zayn-min.jpg';
import dear from './page/img/dear.jpg';
import ayuk from './page/img/ayuk-min.jpg';
import komposisi from './page/img/komposisi.jpg';
import Texty from 'rc-texty';


class FlipImage extends React.Component{
    render() {
    return(
    <div style={{backgroundColor:'#efefef'}}>
    <div className="texty-demo" style={{ marginTop: 24 }}>
            <div><br/><h1 key="h" style={{color: '0000', textAlign: 'center'}}><Texty>DESIGN</Texty></h1></div>
    </div>
     <div style={{  padding: '100px' }}>
     <Row gutter={24}>
     <QueueAnim ease={[[0.175, 0.885, 0.32, 1.275]]}>
     <div key="1">
        <Col span={6}>
            <Flippy
                flipOnHover={true} // default false
                flipOnClick={false} // default false
                flipDirection="horizontal" // horizontal or vertical
                ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div
                style={{ width: '235px', height: '330px' }} /// these are optional style, it is not necessary
            >
                <FrontSide
                style={{
                    background: '#fff',
                }}
                >
                <img src={zayn} width={205} height={300} alt="zayn"/>
                </FrontSide>
                <BackSide
                style={{ backgroundColor: '#41669d'}}>
                <br/><br/><br/>
                <p style={{color: '#ffff', textAlign: 'center' }}>ZAYN MALIK</p><br/>
                <p style={{color: '#ffff', textAlign: 'center'}}>Vektor wajah Zayn Malik, mantan anggota One Direction</p>
                </BackSide>
            </Flippy>
            
         </Col>
     </div>
     <div key="2">
        <Col span={6}>
            <Flippy
                flipOnHover={true} // default false
                flipOnClick={false} // default false
                flipDirection="horizontal" // horizontal or vertical
                ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div
                style={{ width: '235px', height: '330px' }} /// these are optional style, it is not necessary
            >
                <FrontSide
                style={{
                    background: '#fff',
                }}
                >
                <img src={dear} width={205} height={300} alt="dear"/>
                </FrontSide>
                <BackSide
                style={{ backgroundColor: '#41669d'}}>
                <br/><br/><br/>
                <p style={{color: '#ffff', textAlign: 'center' }}>DEAR NASYITA</p><br/>
                <p style={{color: '#ffff', textAlign: 'center'}}>Low Poly wajah Dear Nasyita si anak Klaten </p>
                </BackSide>
            </Flippy>
            
        </Col>
    </div>
    <div key="3">

         <Col span={6}>
            <Flippy
                flipOnHover={true} // default false
                flipOnClick={false} // default false
                flipDirection="horizontal" // horizontal or vertical
                ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div
                style={{ width: '235px', height: '330px' }} /// these are optional style, it is not necessary
            >
                <FrontSide
                style={{
                    background: '#fff',
                }}
                >
                <img src={ayuk} width={200} height={300} alt="ayuk"/>
                </FrontSide>
                <BackSide
                style={{ backgroundColor: '#41669d'}}>
                <br/><br/><br/>
                <p style={{color: '#ffff', textAlign: 'center' }}>AYUK YULIASTUTI</p><br/>
                <p style={{color: '#ffff', textAlign: 'center'}}>Mozaik dari kumpulan foto teman saya  </p>
                </BackSide>
            </Flippy>
            
         </Col>
     </div>
     <div key="4">

         
         <Col span={6}>
            <Flippy
                flipOnHover={true} // default false
                flipOnClick={false} // default false
                flipDirection="horizontal" // horizontal or vertical
                ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div
                style={{ width: '235px', height: '330px' }} /// these are optional style, it is not necessary
            >
                <FrontSide
                style={{
                    background: '#fff',
                }}
                >
                <img src={komposisi} width={205} height={300} alt="komposisi"/>
                </FrontSide>
                <BackSide
                style={{ backgroundColor: '#41669d'}}>
                <br/><br/><br/>
                <p style={{color: '#ffff', textAlign: 'center' }}>Abstract</p><br/>
                <p style={{color: '#ffff', textAlign: 'center'}}>Gambar abstract , dibuat guna menyelesaikan tugas Desain Elementer</p>
                </BackSide>
            </Flippy>
            
         </Col>
        </div>
         </QueueAnim>
     </Row>
        
    </div>
    </div>

    )
    }
}
export default FlipImage;