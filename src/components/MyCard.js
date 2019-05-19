import React from 'react';
import { Card, Icon, Avatar, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import P1 from './page/img/1.JPG';
import pict from './page/img/pict.jpg';


const { Meta } = Card;

class MyCard extends React.Component{
    

    render() {
        return(
        <div style={{  padding: '10px' }}>
            <Row gutter={16}>
            <Col span={5}>
            <Card
                style={{ width: 270 }}
                cover={<img alt="example" src={P1} />}
                actions={[<Icon type="github" />, <Icon type="link" />]}
            >
                <Meta
                    avatar={<Avatar src={pict} />}
                    title="BLASTOUT 2019"
                    description="Sistem pendaftaran dan pengumuman online try out"
                />
            </Card>
            </Col>
            
            </Row>
        </div>
            
            
        )
    }
}

export default MyCard;