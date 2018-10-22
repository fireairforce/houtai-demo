import React from 'react';
import {Card ,Table} from 'antd';
import axios from 'axios';

export default class BasicTable extends React.Component{
    state={
     dateSource2:[]
    }

    componentDidMount(){
        const data = [{
            id: '0',
            userName: 'Jack',
            sex: '1',
            state: '1',
            interset: '1',
            birthday: '2000-01-01',
            address: '秦皇岛海港区东北大学秦皇岛分校',
            time:'09:00'
        },{
            id: '1',
            userName: 'Tom',
            sex: '1',
            state: '1',
            interset: '1',
            birthday: '2000-01-01',
            address: '秦皇岛海港区东北大学秦皇岛分校',
            time:'09:00'
        },{
            id: '2',
            userName: 'Lili',
            sex: '1',
            state: '1',
            interset: '1',
            birthday: '2000-01-01',
            address: '秦皇岛海港区东北大学秦皇岛分校',
            time:'09:00'
        },
    ]
    this.setState({
        dataSource:data//这个属性是不能改的
    })
    }

    // 动态获取mock数据
    request = ()=>{
       
    }

    render(){
        const columns = [{
            title:'id',
            dataIndex:'id' 
        },{
            title:'用户名',
            dataIndex:'userName'
        },{
            title:'性别',
            dataIndex:'sex'
        },{
            title:'状态',
            dataIndex:'state'
        },{
            title:'爱好',
            dataIndex:'interest'
        },{
            title:'生日',
            dataIndex:'birthday'
        },{
            title:'地址',
            dataIndex:'address'
        },{
            title:'早起时间',
            dataIndex:'time'
        }]
        return(
            <div>
                <Card title="基础表格">
                   <Table 
                      bordered
                      columns={columns}
                      dataSource={this.state.dataSource}   //基础表格的拼接
                      pagination={false} //表示我们不需要分页
                   />
                </Card>    

                 <Card title="动态数据渲染表格" style={{margin:"10px 0"}}>
                   <Table 
                      bordered
                      columns={columns}
                      dataSource={this.state.dataSource2}   //基础表格的拼接
                      pagination={false} //表示我们不需要分页
                   />
                </Card> 
            </div>
        )
    }
}
