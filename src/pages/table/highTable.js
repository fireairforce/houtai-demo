import React from 'react';
import {Card,Table,Modal,Button,message ,Badge} from 'antd';
import axios from './../../axios';
import Utils from './../../utils/utils.js';

export default class HighTable extends React.Component{
    state={
        
    }
    params={
        page:1,
    }
    componentDidMount(){
        this.request();
    }
     // 动态获取mock数据
     request = ()=>{
        let _this=this; 
        axios.ajax({
            url:'/table/high/list',
            data:{
                params:{
                    page:this.params.page
                },
             //    isShowLoading:false,
            }
        }).then((res)=>{
             if(res.code===0){
                 res.result.list.map((item,index)=>{
                     item.key=index
                 })
                 this.setState({
                     dataSource:res.result.list,
                 })
             }
        })
     }

     handleChange = (pagination,filters,sorter)=>{
         this.setState({
             sortOrder:sorter.order
         })
     }
     //删除操作
     handleDelete = (item) =>{
        let id = item.id;
        Modal.confirm({
            title:'确认',
            'content':'您确认要删除此条数据吗? ',
            onOk:()=>{
                message.success('删除成功');
                this.request();
            }
        })
     }

    render(){

        const columns = [{
            title:'id',
            key:'id',
            width:80,
            dataIndex:'id' 
        },{
            title:'用户名',
            key:'userName',
            width:80,
            dataIndex:'userName'
        },{
            title:'性别',
            width:80,
            dataIndex:'sex',
            render(sex){//render用来处理字段的
                return sex===1?'男':'女'
            }
        },{
            title:'状态',
            key:'state',
            width:80,
            dataIndex:'state',
            render(state){
                let config = {
                    '1':'菜鸡一个',
                    '2':'lowbee WD',
                    '3':'阿里FE',
                    '4':'东秦大佬',
                    '5':'top-coder'
                }
                return config[state]
            }
        },{
            title:'爱好',
            key:'interest',
            width:80,
            dataIndex:'interest',
            render(state){
                let config = {
                    '1':'学概率论',
                    '2':'打篮球',
                    '3':'游泳',
                    '4':'挂科补考',
                    '5':'跑步',
                    '6':'玩蛇',
                    '7':'骑行',
                    '8':'口语'
                }
                return config[state]
            }
        },{
            title:'生日',
            key:'birthday',
            width:120,
            dataIndex:'birthday'
        },{
            title:'地址',
            key:'address',
            width:120,
            dataIndex:'address'
        },{
            title:'早起时间',
            width:80,
            key:'time',
            dataIndex:'time'
        }];

        const columns2 = [{
            title:'id',
            key:'id',
            width:80,
            fixed:'left',
            dataIndex:'id' 
        },{
            title:'用户名',
            key:'userName',
            width:80,
            fixed:'left',
            dataIndex:'userName'
        },{
            title:'性别',
            width:80,
            dataIndex:'sex',
            fixed:'left',
            render(sex){//render用来处理字段的
                return sex===1?'男':'女'
            }
        },{
            title:'状态',
            key:'state',
            width:80,
            dataIndex:'state',
            render(state){
                let config = {
                    '1':'菜鸡一个',
                    '2':'lowbee WD',
                    '3':'阿里FE',
                    '4':'东秦大佬',
                    '5':'top-coder'
                }
                return config[state]
            }
        },{
            title:'爱好',
            key:'interest',
            width:80,
            dataIndex:'interest',
            render(state){
                let config = {
                    '1':'学概率论',
                    '2':'打篮球',
                    '3':'游泳',
                    '4':'挂科补考',
                    '5':'跑步',
                    '6':'玩蛇',
                    '7':'骑行',
                    '8':'口语'
                }
                return config[state]
            }
        },{//120*20+80*6
            title:'生日',
            key:'birthday',
            width:120,
            dataIndex:'birthday'
        },{
            title:'生日',
            key:'birthday',
            width:120,
            dataIndex:'birthday'
        },{
            title:'生日',
            key:'birthday',
            width:120,
            dataIndex:'birthday'
        },{
            title:'生日',
            key:'birthday',
            width:120,
            dataIndex:'birthday'
        },{
            title:'生日',
            key:'birthday',
            width:120,
            dataIndex:'birthday'
        },{
            title:'生日',
            key:'birthday',
            width:120,
            dataIndex:'birthday'
        },{
            title:'生日',
            key:'birthday',
            width:120,
            dataIndex:'birthday'
        },{
            title:'生日',
            key:'birthday',
            width:120,
            dataIndex:'birthday'
        },{
            title:'生日',
            key:'birthday',
            width:120,
            dataIndex:'birthday'
        },{
            title:'生日',
            key:'birthday',
            width:120,
            dataIndex:'birthday'
        },{
            title:'生日',
            key:'birthday',
            width:120,
            dataIndex:'birthday'
        },{
            title:'生日',
            key:'birthday',
            width:120,
            dataIndex:'birthday'
        },{
            title:'生日',
            key:'birthday',
            width:120,
            dataIndex:'birthday'
        },{
            title:'生日',
            key:'birthday',
            width:120,
            dataIndex:'birthday'
        },{
            title:'生日',
            key:'birthday',
            width:120,
            dataIndex:'birthday'
        },{
            title:'生日',
            key:'birthday',
            width:120,
            dataIndex:'birthday'
        },{
            title:'生日',
            key:'birthday',
            width:120,
            dataIndex:'birthday'
        },{
            title:'生日',
            key:'birthday',
            width:120,
            dataIndex:'birthday'
        },{
            title:'生日',
            key:'birthday',
            width:120,
            dataIndex:'birthday'
        },{
            title:'地址',
            fixed:'right',
            key:'address',
            width:120,
            dataIndex:'address'
        },{
            title:'早起时间',
            fixed:'right',
            width:80,
            key:'time',
            dataIndex:'time'
        }]

        const columns3 = [{
            title:'id',
            key:'id',
            dataIndex:'id' 
        },{
            title:'用户名',
            key:'userName',
            dataIndex:'userName'
        },{
            title:'性别',
            dataIndex:'sex',
            render(sex){//render用来处理字段的
                return sex===1?'男':'女'
            }
        },{
            title:'年龄',
            key:'age',
            dataIndex:'age',
            sorter:(a,b)=>{
                return a.age-b.age;
            },
            sorterOrder:this.state.sorterOrder
        },{
            title:'状态',
            key:'state',
            dataIndex:'state',
            render(state){
                let config = {
                    '1':'菜鸡一个',
                    '2':'lowbee WD',
                    '3':'阿里FE',
                    '4':'东秦大佬',
                    '5':'top-coder'
                }
                return config[state]
            }
        },{
            title:'爱好',
            key:'interest',
            dataIndex:'interest',
            render(state){
                let config = {
                    '1':'学概率论',
                    '2':'打篮球',
                    '3':'游泳',
                    '4':'挂科补考',
                    '5':'跑步',
                    '6':'玩蛇',
                    '7':'骑行',
                    '8':'口语'
                }
                return config[state]
            }
        },{
            title:'生日',
            key:'birthday',
            dataIndex:'birthday'
        },{
            title:'地址',
            key:'address',
            dataIndex:'address'
        },{
            title:'早起时间',
            key:'time',
            dataIndex:'time'
        }];

        const columns4 = [{
            title:'id',
            dataIndex:'id' 
        },{
            title:'用户名',
            dataIndex:'userName'
        },{
            title:'性别',
            render(sex){//render用来处理字段的
                return sex===1?'男':'女'
            }
        },{
            title:'年龄',
            dataIndex:'age',
        },{
            title:'状态',
            dataIndex:'state',
            render(state){
                let config = {
                    '1': <Badge status="success" text="成功"/> ,
                    '2': <Badge status="error" text='报错'/>,
                    '3': <Badge status="default" text='正常'/>,
                    '4': <Badge status="processing" text='等待'/>,
                    '5': <Badge status="warning" text='警告'/>,
                }
                return config[state]
            }
        },{
            title:'爱好',
            dataIndex:'interest',
            render(state){
                let config = {
                    '1':'学概率论',
                    '2':'打篮球',
                    '3':'游泳',
                    '4':'挂科补考',
                    '5':'跑步',
                    '6':'玩蛇',
                    '7':'骑行',
                    '8':'口语'
                }
                return config[state]
            }
        },{
            title:'生日',
            dataIndex:'birthday'
        },{
            title:'地址',
            dataIndex:'address'
        },{
            title:'操作',
            render:(text,item)=>{
                return <Button size="small" onClick={(item)=>{this.handleDelete(item)}}></Button>
            }
        }];
       return(
           <div>
                <Card title="头部固定">
                   <Table 
                      bordered
                      columns={columns}
                      dataSource={this.state.dataSource}   //基础表格的拼接
                      pagination={false} //表示我们不需要分页
                      scroll={{y:240}} //这里要注意要给表格加宽度
                   />
                </Card>    

                 <Card title="左侧固定" style={{margin:"10px 0"}}>
                   <Table 
                      bordered
                      columns={columns2}
                      dataSource={this.state.dataSource}   //基础表格的拼接
                      pagination={false} //表示我们不需要分页
                      scroll={{x:2900}}
                   />
                </Card> 

                 <Card title="表格排序" style={{margin:"10px 0"}}>
                   <Table 
                      bordered
                      columns={columns3}
                      dataSource={this.state.dataSource}   //基础表格的拼接
                      pagination={false} //表示我们不需要分页
                      onChange={this.handleChange}
                   />
                </Card> 


                 <Card title="操作按钮" style={{margin:"10px 0"}}>
                   <Table 
                      bordered
                      columns={columns4}
                      dataSource={this.state.dataSource}   //基础表格的拼接
                      pagination={false} //表示我们不需要分页
                   />
                </Card> 
           </div>
       )
    }
}