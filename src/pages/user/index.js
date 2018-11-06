import React from 'react';
import {Card,Button} from 'antd';
import axios from './../../axios';
import Utils from './../../utils/utils';
import Etable from './../../components/Etable';
import BaseForm from '../../components/BaseForm';

export default class User extends React.Component{


    params = {
        page:1
    }
    state={

    }
    formList = [{
        type:'INPUT',
        label:'用户名',
        field:'user_name',
        placeholder:'请输入用户名',
        width: 130,
    },
    {
        type:'INPUT',
        label:'用户手机号',
        field:'user_mobile',
        placeholder:'请输入手机号',
        width: 130,
    },{
        type:'DATE',
        label:'请选择入职日期',
        field:'user_date',
        placeholder:'请输入日期',
    },{
       
    }
]
    componentDidMount(){
        this.requestList();
    } 
   
    handleFilter = (params) =>{
        this.params=params;
        this.requestList();
    }
    requestList = () =>{
        axios.requestList(this,'/user/list',this.params)
    }

    render(){
        const columns = [
            {
              title:'id',
              dataIndex:'id'
            },{
                title:'用户名',
                dataIndex:'username'
              },
              {
                title:'性别',
                dataIndex:'sex',
                render(sex){
                    return sex == 1?'男':'女'
                }
              },
              {
                title:'状态',
                dataIndex:'state',
                render(state){
                   return {
                       '1':'菜鸡wd',
                       '2':'牛逼chy',
                       '3':'东秦大佬',
                       '4':'阿里FE',
                       '5':'创业者'
                   }[state]
                }
              },
              {
                title:'爱好',
                dataIndex:'interest',
                render(interest){
                    return {
                        '1':'打篮球',
                        '2':'打游戏',
                        '3':'爬山',
                        '4':'骑行',
                        '5':'ignb',
                        '6':'搞学习',
                        '7':'写代码',
                        '8':'水群'
                    }[interest]
                 }
              },
              {
                title:'生日',
                dataIndex:'birthday'
              },
              {
                title:'联系地址',
                dataIndex:'address'
              },
              {
                title:'早起时间',
                dataIndex:'time'
              },
        ];
        return(
            <div>
                <Card>
                    <BaseForm formList={this.formList} filterSubmit={this.handleFilter}/>
                </Card>   
                <Card style={{marginTop:"10px"}}>
                  <Button type="primary" onClick={this.openOrderDetail}>订单详情</Button>
                  <Button type="primary" style={{marginLeft:"10px"}} onClick={this.handleConfirm}>结束订单</Button>
             </Card>   
             <div className="content-wrapper">
                  <Etable 
                    updateSelected={Utils.updateSelectedItem.bind(this)}
                    columns={columns}
                    dataSource={this.state.list}
                    selectedRowKeys={this.state.selectedRowKeys}
                    selectedItem={this.state.selectedItem}
                    pagination={false}
                  />
             </div>      
            </div>
        )
    }
}