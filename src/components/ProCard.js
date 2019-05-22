import React from 'react';
import { Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import MyAvatar from "./Avatar";
import QueueAnim from 'rc-queue-anim';


class ProCard extends React.Component{
    render() {
        return(
            <div style={{ background: '#ffff', padding: '20px' }}>
            <Row gutter={16}>

                <Col span={8}>
                <Card bordered={false}>
                    <center key="0"><MyAvatar/></center>
                    
                </Card>
                </Col>
                <Col span={12}>
                    <Card title="Info" bordered={false}>
                    <QueueAnim type="bottom">
                    <p key="p0">Nama&emsp; &emsp;  :&emsp;Nofa Dwi Adelia</p>
                    <p key="p1">Alamat&emsp; &emsp;:&emsp;Guyangan, Tugu, Cawas, Klaten</p>
                    <p key="p2">TTL&emsp; &emsp; &emsp;:&emsp;Klaten, 4 November 1999</p>
                    </QueueAnim>
                    </Card>
                </Col>
            </Row>
            
            </div>
        )
    }
}

export default ProCard;