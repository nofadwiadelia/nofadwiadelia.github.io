import React from 'react';
import { Avatar } from 'antd';
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