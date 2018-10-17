import React,{Fragment}  from 'react';
import { Row ,Col} from 'antd';
import NavLeft from './components/NavLeft';
import Header from './components/Header';
import Footer from './components/Footer';
import 'antd/dist/antd.css';
import './style/common.less';

export default class Admin extends React.Component{
  render(){
    return(
      // <div className="App">QAQ</div>
     <Fragment> 
       <Row className="container">
          <Col span="3" className="nav-left">
             <NavLeft />
          </Col>
          <Col span="21" className="main">
             <Header />
             <Row className="content">
               content
               {/* {this.props.children} */}
             </Row>  
             <Footer />
          </Col>
       </Row>
     </Fragment> 
    )
  }
} 
