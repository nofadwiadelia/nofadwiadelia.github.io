import React from 'react';
import {Card, Icon, Row, Col, Form, Input, Button} from 'antd';
import 'antd/dist/antd.css';
import TweenOne from 'rc-tween-one';
const { TextArea } = Input;

class KoCard extends React.Component{
 
    render() {
        return(
        <Card title="Hubungi Melalui" bordered={false}>
            <Row gutter={16}>
                <Col span={12}>
                    <Card bordered={false}>
                    <div style={{ background: '#ffff', paddingTop: '20px' }}>
                        <div>
                            <TweenOne
                            animation={{ x: '+=5px', y: '-=50px', duration: 1000 }}
                            style={{ opacity: 1, height: 100, transform: 'translate(50px,30px)' }}
                            >
                            <div>
                            <Icon type="home" style={{fontSize: '35px'}}/>
                            <span>&emsp;Guyangan, Tugu, Cawas, Klaten</span></div>
                            </TweenOne>
                        </div>
                        <div>
                            <TweenOne
                            animation={{ x: '+=5px', y: '-=50px', duration: 1000 }}
                            style={{ opacity: 1, height: 100, transform: 'translate(50px,30px)' }}
                            >
                            <div>
                                <Icon type="phone" style={{fontSize: '35px'}}/>
                            <span>&emsp;089622372883</span></div>
                            </TweenOne>
                        </div>
                        <div>
                            <TweenOne
                            animation={{ x: '+=5px', y: '-=50px', duration: 1000 }}
                            style={{ opacity: 1, height: 100, transform: 'translate(50px,30px)' }}
                            >
                            <div>
                                <Icon type="twitter" style={{fontSize: '35px'}}/>
                            <span>&emsp;@noffa_adelia</span></div>
                            </TweenOne>
                        </div>
                        <div>
                            <TweenOne
                            animation={{ x: '+=5px', y: '-=50px', duration: 1000 }}
                            style={{ opacity: 1, height: 100, transform: 'translate(50px,30px)' }}
                            >
                            <div>
                                <Icon type="instagram" style={{fontSize: '35px'}}/>
                            <span>&emsp;@nofa_adelia</span></div>
                            </TweenOne>
                        </div>
                        <div>
                            <TweenOne
                            animation={{ x: '+=5px', y: '-=50px', duration: 1000 }}
                            style={{ opacity: 1, height: 100, transform: 'translate(50px,30px)' }}
                            >
                            <div>
                                <Icon type="facebook" style={{fontSize: '35px'}}/>
                            <span>&emsp;Nofa Dwi Adelia</span></div>
                            </TweenOne>
                        </div>
                    </div>
                    </Card>
                </Col>
                <Col span={12}>
                <Card style={{ width: 400 }}>
                <Form  className="login-form">
                    <Form.Item>
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Nama"/>
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder="Email"/>
                    </Form.Item>
                    <Form.Item>
                    <TextArea rows={4} placeholder="Pesan"/>
                    </Form.Item>
                    <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">Kirim</Button>
                    </Form.Item>
                </Form>
                </Card>
                </Col>
            </Row>        
        </Card>
            
        )
    }
}

export default KoCard;