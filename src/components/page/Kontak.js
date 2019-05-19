import React, {Component} from 'react';
import {Col, Row } from 'antd';
import KoCard from "../KoCard";


class Kontak extends Component {
    render() {
        return (
            <div>
                <Row guter={8}>
                    <Col offset={4} span={16}>
                    <KoCard/>
                    </Col>
                </Row>
                
                <div>
                </div>
                
            </div>
        );
    }
}

export default Kontak;
