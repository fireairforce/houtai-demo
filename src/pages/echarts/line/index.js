import React from 'react';
import {Card} from 'antd';
import echartTheme from './../echartTheme';
// import echarts from 'echarts';
//按需加载
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import Reactecharts from 'echarts-for-react';
export default class Line extends React.Component{
    componentWillMount(){
        echarts.registerTheme('IMOOC',echartTheme);
    }
    getOption=()=>{
     let option = {
         title:{
             text:'用户骑行订单',
         },
         tooltip:{
            trigger:'axis',
         },
         xAxis:{
            data:[
                '周一','周二','周三','周四','周五','周六','周日'
            ]
         },
         yAxis:{
           type:'value'
         },
         series:[
             {
                 name:'订单量',
                 type:'line',
                 data:[
                    1200,3000,4500,6000,8000,12000,2000
                 ]
             }
         ]
     }
     return option;
    }
    getOption1=()=>{
        let option = {
            title:{
                text:'用户骑行订单',
            },
            tooltip:{
               trigger:'axis',
            },
            legend:{
               data:[
                   'OFO订单量',
                   'MOBILE订单量'
               ]
            },
            xAxis:{
               data:[
                   '周一','周二','周三','周四','周五','周六','周日'
               ]
            },
            yAxis:{
              type:'value'
            },
            series:[
                {
                    name:'mobile订单量',
                    type:'line',
                    data:[
                       1000,2000,5500,6000,8000,10000,12000
                    ]
                },
                {
                    name:'ofo订单量',
                    type:'line',
                    data:[
                        1200,3000,4500,6000,8000,12000,2000
                    ]
                }
            ]
        }
        return option;
       }
    render(){
        return(
            <div>
               <Card title="折线图1.0">
               <Reactecharts option={this.getOption()} theme="IMOOC" style={{height:500}}/>
               </Card>
               <Card title="折线图2.0">
               <Reactecharts option={this.getOption1()} theme="IMOOC" style={{height:500}}/>
               </Card>
            </div>
        )
    }
}