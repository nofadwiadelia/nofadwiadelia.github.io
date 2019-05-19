import React from 'react';
import { Card, Icon, Avatar, Col, Row } from 'antd';
import pict from './page/img/pict.jpg'

class MyAvatar extends React.Component{
    render() {
        return(
            <div >
     
                    <Avatar size={200} src={pict} />
                
            </div>
        )
    }
}

export default MyAvatar;