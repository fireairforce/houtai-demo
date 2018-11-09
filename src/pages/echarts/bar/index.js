import React from 'react';
import {Card} from 'antd';
import echartTheme from './../echartTheme';
// import echarts from 'echarts';
//按需加载
import echarts from 'echarts/lib/echarts';
//导入柱形图
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import Reactecharts from 'echarts-for-react';
export default class Bar extends React.Component{

    componentWillMount(){
        echarts.registerTheme('ACM',echartTheme)
    }
    getOption(){
        let option = {
           title:{
               text: '用户骑行订单'
           },
           tooltip:{
              trigger: 'axis'
           },
           xAxis:{
               data:['周一','周二','周三','周四','周五','周六','周日']
           },
           yAxis:{
               type:'value'
           },
           series:[{
               name:'订单量',
               type:'bar',
               data:[1000,2000,1500,3000,2000,1200,800]
           }]
        }
        return option;
    }

    getOption2(){
        let option = {
           title:{
               text: '不同车型的对比'
           },
           legend:{
                data:['捷安特','美利达','崔克']
           },
           tooltip:{
              trigger: 'axis'
           },
           xAxis:{
               data:['周一','周二','周三','周四','周五','周六','周日']
           },
           yAxis:{
               type:'value'
           },
           series:[{
               name:'捷安特',
               type:'bar',
               data:[2000,3000,5500,7000,8000,12000,20000]
              },
                {
                    name:'美利达',
                    type:'bar',
                    data:[1500,3000,4500,6000,8000,10000,15000]
                },{
                    name:'崔克',
                    type:'bar',
                    data:[1000,2000,2500,4000,6000,7000,8000]
                }]
        }
        return option;
    }

    render(){
        return(
            <div>
               <Card title="柱形图表之一">
                    <Reactecharts option={this.getOption()} theme="ACM" style={{height:500}}/>
               </Card>
               <Card title="柱形图表之二" style={{marginTop:10}}>
               <Reactecharts option={this.getOption2()} theme="ACM" style={{height:500}}/>
               </Card>
            </div>
        )
    }
}