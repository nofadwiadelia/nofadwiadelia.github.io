import React from 'react';
import { Timeline, Icon } from 'antd';

class Experience extends React.Component{
    render() {
        return(
  <Timeline mode="alternate" >
    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} >2019&emsp;BKLASSACE (CTO)</Timeline.Item>
    <Timeline.Item color="green">BLASTOUT (IT Division)2019&emsp;2019</Timeline.Item>
    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>2019&emsp;
      Vocational Computer Festival
    </Timeline.Item>
    <Timeline.Item color="red">BLASTOUT&emsp;2018</Timeline.Item>
    <Timeline.Item>2018&emsp;Vocational Computer Festival</Timeline.Item>
    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>Balairung Klaten Association&emsp;2018
    </Timeline.Item>
  </Timeline>
  )
}
}

export default Experience;