import React from 'react';
import { Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import MyAvatar from "./Avatar";
import QueueAnim from 'rc-queue-anim';
import 'rc-texty/assets/index.css';


class ProCard extends React.Component{
    render() {
        return(

            
            <div style={{ background: '#ffff', padding: '20px' }}>
            <Row gutter={16}>
            <QueueAnim type="bottom">
                <Col span={8}>
                <Card bordered={false}>
                    <center key="0"><MyAvatar/></center>
                    
                </Card>
                </Col>
                <Col span={12}>
                    <Card title="Info" bordered={false}>
                    <QueueAnim type="bottom">
                    <div className="texty-demo" style={{ marginTop: 64 }}>
                    <p>Nama&emsp; &emsp;  :&emsp;Nofa Dwi Adelia</p>
                    </div>
                    
                    <p key="p1">Alamat&emsp; &emsp;:&emsp;Guyangan, Tugu, Cawas, Klaten</p>
                    <p key="p2">TTL&emsp; &emsp; &emsp;:&emsp;Klaten, 4 November 1999</p>
                    </QueueAnim>
                    </Card>
                </Col>
                </QueueAnim>
            </Row>
            
            </div>
        )
    }
}

export default ProCard;