import React from 'react';
import { Card, Icon, Avatar, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import P1 from './page/img/1.JPG';
import pict from './page/img/pict.jpg';
import P2 from './page/img/2.JPG';
import P3 from './page/img/3.JPG';
import Animate from 'react-smooth';
import axios from 'axios';



const { Meta } = Card;

class MyCard extends React.Component{
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
        return(
        <div>
        <div style={{  paddingTop: '60px' }}>
            <Row gutter={8}>
            <Col offset={4} span={16}>
                <Row>
                    <Animate to="1" from="0" attributeName="opacity" duration='500'>
                    <Col span={8}>
                    {this.state.portfolio.map((data) => {
                    return(
                        <Card
                        style={{ width: 270 }}
                        cover={<img alt="example" src={P1} />}
                        actions={[<Icon type="github" />, <Icon type="link" />]}
                    >
                        <Meta
                            avatar={<Avatar src={pict} />}
                            title={data.portfolio_name}
                            description={data.desc}
                        />
                    </Card>
                    )
                    })}
                    
                    </Col>
                    </Animate>
                    <Animate to="1" from="0" attributeName="opacity" duration='1500'>
                    <Col span={8}>
                    <Card
                        style={{ width: 270 }}
                        cover={<img alt="example" src={P2} />}
                        actions={[<Icon type="github" />, <Icon type="link" />]}
                    >
                        <Meta
                            avatar={<Avatar src={pict} />}
                            title="BOOFIND"
                            description="Sistem informasi pencarian ketersediaan buku disuatu kota"
                        />
                    </Card>
                    </Col>
                    </Animate>
                    <Animate to="1" from="0" attributeName="opacity" duration='2500'>
                    <Col span={8}>
                    <Card
                        style={{ width: 270 }}
                        cover={<img alt="example" src={P3} />}
                        actions={[<Icon type="github" />, <Icon type="link" />]}
                    >
                        <Meta
                            avatar={<Avatar src={pict} />}
                            title="BOOFIND V2"
                            description="Sistem Informasi pencarian buku pada Toko Buku menggunakan REST API"
                        />
                    </Card>
                    </Col>
                    </Animate>
                </Row>
            </Col>
            </Row>
        </div>
        </div>
            
            
        )
    }
}

export default MyCard;