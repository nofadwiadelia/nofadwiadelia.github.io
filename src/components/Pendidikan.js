import React from 'react';
import { Steps, Icon  } from 'antd';

const Step = Steps.Step;

class Pendidikan extends React.Component {
  render() {
    return ( 
    <Steps current={3}>
    <Step title="Finished" description="SMP N 1 Cawas"/>
    <Step title="Finished" description="SMA N 1 Cawas"/>
    <Step status="process" title="Now" icon={<Icon type="loading"/>} description="Universitas Gadjah Mada" />
  </Steps>
    );
  }
}
export default Pendidikan;