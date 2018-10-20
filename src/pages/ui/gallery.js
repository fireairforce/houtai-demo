import React from 'react';
import {Card,Row,Col,Modal} from 'antd';
import './../ui/ui.less';
const {Meta} = Card;
export default class Gallery extends React.Component{
    state={
        visible:false
    }
    openGallery = (imgSrc)=>{
        this.setState({
            currentImg:imgSrc,
            visible:true
        })
    }

    render(){
        const imgs =[
            ['http://wdlj.zoomdong.xin/1.jpeg','http://wdlj.zoomdong.xin/2.jpeg','http://wdlj.zoomdong.xin/3.jpeg','http://wdlj.zoomdong.xin/4.jpeg','http://wdlj.zoomdong.xin/5.jpeg'],
            ['http://wdlj.zoomdong.xin/6.jpeg','http://wdlj.zoomdong.xin/7.jpeg','http://wdlj.zoomdong.xin/8.jpeg','http://wdlj.zoomdong.xin/9.jpeg','http://wdlj.zoomdong.xin/10.jpeg'],
            ['http://wdlj.zoomdong.xin/11.jpeg','http://wdlj.zoomdong.xin/12.jpeg','http://wdlj.zoomdong.xin/333.jpeg','http://wdlj.zoomdong.xin/444.jpeg','http://wdlj.zoomdong.xin/555.jpeg'],
            ['http://wdlj.zoomdong.xin/baidu1.jpg','http://wdlj.zoomdong.xin/baidu2.jpg','http://wdlj.zoomdong.xin/baidu3.jpg','http://wdlj.zoomdong.xin/baidu4.jpg','http://wdlj.zoomdong.xin/baidu5.jpg'],
            ['http://wdlj.zoomdong.xin/11.jpeg','http://wdlj.zoomdong.xin/2.jpeg','http://wdlj.zoomdong.xin/3.jpeg','http://wdlj.zoomdong.xin/4.jpeg','http://wdlj.zoomdong.xin/5.jpeg'],
        ]
        const imgList =imgs.map((list)=>{
             return list.map((item)=>{
                 return <Card
                    style={{marginBottom:10,marginLeft:10}}
                    cover={<img src={item} alt={item} onClick={()=>{this.openGallery(item)}}/>}
                 >
                   <Meta
                     title="welcome to acmclub"
                     description="http://zoomdong.site/"
                   />  
                 </Card>
             })
        })
       return(
           <div>
              <Card className="card-wrap">
                 <Row>
                    <Col md={5}>
                       {imgList[0]}                  
                    </Col>
          
                    <Col md={5}>
                        {imgList[1]}                  
                    </Col>

                    <Col md={5}>
                        {imgList[2]}                  
                    </Col>
          
                 
                    <Col md={5}>
                        {imgList[3]}                  
                    </Col>
          
                 
                    <Col md={4}>
                        {imgList[4]}                  
                    </Col>
                </Row>
                 <Modal
                 width={500}
                 height={500}
                   visible={this.state.visible}
                   title="我的老婆"
                   onCancel={()=>{
                       this.setState({
                           visible:false
                       })
                   }}
                   onOk={()=>{
                       this.setState({
                           visible:false
                       })
                   }}
                 >
                     <img src={this.state.currentImg} alt={this.state.currentImg} style={{width:"100%"}}/>
                 </Modal>    
              </Card>
           </div>
       )
   }
}