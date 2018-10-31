import React,{Fragment}  from 'react';
import { Row ,Col} from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import 'antd/dist/antd.css';
import './style/common.less';

export default class Common extends React.Component{
  render(){
    return(
      <Fragment> 
        <Row className="simple-page">
            <Header menuType="second"/>
        </Row>
        <Row className="content">
            {this.props.children}
        </Row>    
        <Row>
            <Footer />
        </Row>    
      </Fragment> 
    )
  }
} 