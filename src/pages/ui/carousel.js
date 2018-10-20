import React from 'react';
import {Card,Carousel} from 'antd';
import './../ui/ui.less';

export default class Carrousels extends React.Component{
    
    render(){
        return(
            <div>
              <Card title="文字背景轮播" className="card-wrap">
                    <Carousel autoplay effect="fade">
                        <div>
                            <h3>Ant Motion Banner - React</h3>
                        </div>
                        <div>
                            <h3>Ant Motion Banner - Vue</h3>
                        </div>
                        <div>
                            <h3>Ant Motion Banner - Angular</h3>
                        </div>
                    </Carousel>    
              </Card> 

              <Card title="图片背景轮播" className="slider-wrap">
                    <Carousel autoplay effect="fade">
                        <div>
                            <img src="http://wdlj.zoomdong.xin/baidu4.jpg" alt="first" style={{width:"100%",height:"100%"}}/>
                        </div>
                        <div>
                            <img src="http://wdlj.zoomdong.xin/ccpc1.png" alt="second"/>
                        </div>
                        <div>
                           <img src="http://wdlj.zoomdong.xin/ccpc5.png" alt="third"/>
                        </div>
                    </Carousel>    
              </Card>           
            </div>
        )
    }
}