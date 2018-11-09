import React from 'react';
import {Card} from 'antd';
import echartTheme from './../themeLight';
// import echarts from 'echarts';
//按需加载
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import Reactecharts from 'echarts-for-react';
export default class Pie extends React.Component{
    componentWillMount(){
        echarts.registerTheme('IMOOC',echartTheme);
    }
    getOption=()=>{
     let option = {
         title:{
             text:'用户骑行订单',
             x:'center'
         },
         legend:{
             orient:'vertical',
             right:10,
             top:20,
             bottom:20,
            data:['周一','周二','周三','周四','周五','周六','周日']
         },
         tooltip:{
            trigger:'item',
            formatter:'{a}<br />{b}:{c}({d}%)'
         },
         series:[
             {
                 name:'订单量',
                 type:'pie',
                 data:[
                     {
                         value:1000,
                         name:'周一'
                     },
                     {
                        value:2000,
                        name:'周二'
                    },
                    {
                        value:4000,
                        name:'周三'
                    },
                    {
                        value:5000,
                        name:'周四'
                    },
                    {
                        value:7000,
                        name:'周五'
                    },
                    {
                        value:8000,
                        name:'周六'
                    },
                    {
                        value:9000,
                        name:'周日'
                    }
                 ]
             }
         ]
     }
     return option;
    }
    getOption2 = () =>{
        let option = {
            title:{
                text:'用户骑行订单',
                x:'center'
            },
            legend:{
                orient:'vertical',
                right:10,
                top:20,
                bottom:20,
               data:['周一','周二','周三','周四','周五','周六','周日']
            },
            tooltip:{
               trigger:'item',
               formatter:'{a}<br />{b}:{c}({d}%)'
            },
            series:[
                {
                    name:'订单量',
                    type:'pie',
                    radius:['50%','80%'],
                    center:['50%','60%'],
                    data:[
                        {
                            value:2000,
                            name:'周一'
                        },
                        {
                           value:2000,
                           name:'周二'
                       },
                       {
                           value:4000,
                           name:'周三'
                       },
                       {
                           value:5000,
                           name:'周四'
                       },
                       {
                           value:7000,
                           name:'周五'
                       },
                       {
                           value:8000,
                           name:'周六'
                       },
                       {
                           value:9000,
                           name:'周日'
                       }
                    ]
                }
            ]
        }
        return option;
    }
    getOption3 = () =>{
        let option = {
            title:{
                text:'用户骑行订单',
                x:'center'
            },
            legend:{
                orient:'vertical',
                right:10,
                top:20,
                bottom:20,
               data:['周一','周二','周三','周四','周五','周六','周日']
            },
            tooltip:{
               trigger:'item',
               formatter:'{a}<br />{b}:{c}({d}%)'
            },
            series:[
                {
                    name:'订单量',
                    type:'pie',
                    data:[
                        {
                            value:2000,
                            name:'周一'
                        },
                        {
                           value:2000,
                           name:'周二'
                       },
                       {
                           value:4000,
                           name:'周三'
                       },
                       {
                           value:5000,
                           name:'周四'
                       },
                       {
                           value:7000,
                           name:'周五'
                       },
                       {
                           value:8000,
                           name:'周六'
                       },
                       {
                           value:9000,
                           name:'周日'
                       }
                    ].sort((a,b)=>{
                        return a.value-b.value;
                    }),
                    roseType:'radius',
                    
                }
            ]
        }
        return option;
    }
    render(){
        return(
            <div>
               <Card title="饼形图1.0">
               <Reactecharts option={this.getOption()} theme="IMOOC" style={{height:500}}/>
               </Card>
               <Card title="饼形图2.0" style={{marginTop:10}}>
               <Reactecharts option={this.getOption2()} theme="IMOOC" style={{height:500}}/>
               </Card>
               <Card title="饼形图3.0" style={{marginTop:10}}>
               <Reactecharts option={this.getOption3()} theme="IMOOC" style={{height:500}}/>
               </Card>
            </div>
        )
    }
}