import React from 'react';
import {Card ,Table, Modal,Button,message} from 'antd';
import axios from './../../axios';
import Utils from './../../utils/utils.js';

export default class BasicTable extends React.Component{
    state={
     dateSource2:[]
    }
    params={
        page:1,
    }
    componentDidMount(){
        const data = [{
            id: '0',
            userName: 'Jack',
            sex: '1',
            state: '1',
            interest: '2',
            birthday: '2000-01-01',
            address: '秦皇岛海港区东北大学秦皇岛分校',
            time:'09:00'
        },{
            id: '1',
            userName: 'Tom',
            sex: '1',
            state: '1',
            interest: '1',
            birthday: '2000-01-01',
            address: '秦皇岛海港区东北大学秦皇岛分校',
            time:'09:00'
        },{
            id: '2',
            userName: 'Lili',
            sex: '1',
            state: '1',
            interest: '1',
            birthday: '2000-01-01',
            address: '秦皇岛海港区东北大学秦皇岛分校',
            time:'09:00'
        }, 
    ]
    data.map((item,index)=>{
         item.key=index
    })
    this.setState({
        dataSource:data//这个属性是不能改的
    })
      this.request();
    }

    // 动态获取mock数据
    request = ()=>{
       let _this=this; 
       axios.ajax({
           url:'/table/list',
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
                    dataSource2:res.result.list,
                    selectedRowKeys:[],
                    selectedRows:null,
                    pagination:Utils.pagination(res,(current)=>{
                        // todo
                       _this.params.page=current;
                       this.request();
                    })
                })
            }
       })
    }
    
    onRowClick = (record,index)=>{
        let selectKey = [index];
        Modal.info({
            title:'信息',
            content:`用户名: ${record.userName},用户爱好: ${record.interest}`

        })
        this.setState({
            selectedRowKeys:selectKey,//选择的是哪个索引
            selectedItem:record//选择的是哪个项
        })
    }

    // 多选执行删除操作
    handleDelete = (()=>{
        let rows = this.state.selectedRows;
        let ids =[];
        rows.map((item)=>{
           ids.push(item.id)
        })
        Modal.confirm({
            title:"删除提示",
            content:`您确定您要删除这行数据吗? ${ids.join(',')}`,
            onOk:()=>{
                  message.success('删除成功');
                  this.request();
            }
        })
    })

    render(){
        const columns = [{
            title:'id',
            dataIndex:'id' 
        },{
            title:'用户名',
            dataIndex:'userName'
        },{
            title:'性别',
            dataIndex:'sex',
            render(sex){//render用来处理字段的
                return sex===1?'男':'女'
            }
        },{
            title:'状态',
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
            title:'早起时间',
            dataIndex:'time'
        }]
        const {selectedRowKeys}=this.state;
        const rowSelection = {
            type:'radio',
            selectedRowKeys
        };
        const rowCheckedSelection = {
            type:'checkbox',
            selectedRowKeys,
            onChange:(selectedRowKeys,selectedRows)=>{
                // let ids = [];
                // selectedRows.map(()=>{
                //    ids.push(item.id);
                // }) 
                this.setState({
                   selectedRowKeys,
                //    selectedIds:ids//获取到每一行的id值
                   selectedRows 
               }) 
            }
        }
        
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

                 <Card title="动态数据渲染表格-Mock" style={{margin:"10px 0"}}>
                   <Table 
                      bordered
                      columns={columns}
                      dataSource={this.state.dataSource2}   //基础表格的拼接
                      pagination={false} //表示我们不需要分页
                   />
                </Card> 

                 <Card title="Mock-单选" style={{margin:"10px 0"}}>
                   <Table 
                      bordered
                      onRow={(record,index) => {
                        return {
                           onClick:()=>{
                               this.onRowClick(record,index);                           }
                        };
                      }}
                      rowSelection={rowSelection}
                      columns={columns}
                      dataSource={this.state.dataSource2}   //基础表格的拼接
                      pagination={false} //表示我们不需要分页
                   />
                </Card> 

                   <Card title="Mock-复选" style={{margin:"10px 0"}}>
                   <div style={{marginBottom:10}}>
                       <Button onClick={this.handleDelete}>删除</Button>
                   </div>
                   <Table 
                      bordered
                      onRow={(record,index) => {
                        return {
                           onClick:()=>{
                               this.onRowClick(record,index);                           }
                        };
                      }}
                      rowSelection={rowCheckedSelection}
                      columns={columns}
                      dataSource={this.state.dataSource2}   //基础表格的拼接
                      pagination={false} //表示我们不需要分页
                   />
                </Card> 

                <Card title="Mock-分页" style={{margin:"10px 0"}}>
                   <Table 
                      bordered
                      columns={columns}
                      dataSource={this.state.dataSource2}   //基础表格的拼接
                      pagination={this.state.pagination}
                   />
                </Card> 
            </div>
        )
    }
}
