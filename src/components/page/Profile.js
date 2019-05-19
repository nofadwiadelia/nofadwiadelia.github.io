import React, {Component} from 'react';
import ProCard from "../ProCard";
import {Col, Row, Card } from 'antd';
// import Pendidikan from "../Pendidikan";
import Demo from "../TextProfile";
import Pendidikan from "../Pendidikan";
import Experience from "../experience";
class Profile extends Component {
    render() {
        return (
            <div>
                <Demo/>
                    <Row guter={8}>
                        <Col offset={4} span={16}>
                            <ProCard/>
                        </Col><br/><br/><br/><br/>
                        <Col offset={6} span={12}>
                        <Pendidikan/>
                        </Col>
                        <Col offset={6} span={12}>
                        <br/><br/><br/><br/>
                        <Card title="Expreriences" bordered={false}>
                        </Card>
                        <Experience/>
                        </Col>
                    </Row>
                
            </div>
        );
    }
}

export default Profile;
