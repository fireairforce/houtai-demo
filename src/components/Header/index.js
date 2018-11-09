import React from 'react';
import { Row ,Col} from 'antd';
import './index.less'
import Util from '../../utils/utils';
import axios from '../../axios'
export default class Header extends React.Component{
    state={

    }
   componentWillMount(){
       this.setState({
           userName:"zoomdong"
       })
       setInterval(()=>{
          let sysTime=Util.formateDate(new Date().getTime());
          this.setState({
              sysTime
          })
       },1000)
       this.getWeatherAPIData();
   }
   //对jsonp插件进行一个封装
   getWeatherAPIData(){
      let city='北京'; 
      axios.jsonp({
          url: 'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=9xxfjXBUcftkqi4xRLwkArPsTABzdaQl'
         
      }).then((res)=>{
         if(res.status){
             if(res.status === 'success'){
                 let data = res.results[0].weather_data[0];
                 this.setState({
                     dayPictureUrl:data.dayPictureUrl,
                     weather:data.weather
                 })
             }
         }
      })
   }
    render(){
        const menuType = this.props.menuType;
        return(
            <div className="header">
               <Row className="header-top">
                 {
                     menuType?
                     <Col span="6" className="logo">
                        <img src="/assets/logo-ant.svg" alt="logo"/>
                        <span>NEUQ ACM通用管理系统</span>
                     </Col>
                     :''
                 }
                 <Col span={menuType?18:24}>
                     <span>欢迎，{this.state.userName}</span>
                     <a href=" ">退出</a>
                   </Col>
               </Row>
               {
                   menuType?'': 
                <Row className="breadcrumb">
                   <Col span="4" className="breadcrumb-title">
                     首页
                   </Col>
                   <Col span="20" className="weather">
                      <span className="date">{this.state.sysTime}</span>
                      <span className="weather-image">
                        <img src={this.state.dayPictureUrl} alt="qaq"/>
                      </span> 
                      <span className="weather-detail">{this.state.weather}</span>
                   </Col>
               </Row>    
               }
              
            </div>
        )
    }
}