import React from 'react';
import {Card,Button,Table,Form,Select,Modal,message,DatePicker} from 'antd';
import axios from '../../axios';
import Utils from '../../utils/utils';
import BaseForm from '../../components/BaseForm';
const FormItem = Form.Item;
const Option = Select.Option;
export default class Order extends React.Component{
    state={}
    params = {
        pages:1
    }
    formList = [{
        type:'SELECT',
        label:'城市',
        field:'city',
        placeholder:'全部',
        initialValue:'1',
        width:100,
        list:[{ id:'0',name:'全部'},{ id:'1',name:'北京'},{ id:'2',name:'秦皇岛'},{ id:'3',name:'天门'}]
    },
    {
        type:'时间查询',
    },
    {
        type:'SELECT',
        label:'订单状态',
        field:'order_status',
        placeholder:'全部',
        initialValue:'1',
        width:100,
        list:[{ id:'0',name:'全部'},{ id:'1',name:'进行中'},{ id:'2',name:'结束行程'}]
    }
]
    componentDidMount(){
       this.requestList();
    }

    handleFilter = (params) =>{
         this.params = params;
         this.requestList();
    }

    requestList = () =>{
        let _this = this;
       axios.ajax({
           url:'/order/list',
           data:{
               params:{
                   page:this.params.page
               }   
           }
       }).then((res)=>{
           let list = res.result.item_list.map((item,index)=>{
               item.key = index;
               return item;
           });
           this.setState({
               list,
               pagination:Utils.pagination(res,(current)=>{
                   _this.params.page=current;
                   _this.requestList();
               })
           })
       })
    }
    
    onRowClick = (record,index) => {
        let selectKey = [index];
        this.setState({
            selectedRowKeys:selectKey,
            selectedItem: record
        })
    }

    openOrderDetail = () => {
        let item = this.state.selectedItem;
        if(!item){
            Modal.info({
                title:'信息',
                content:'请先选择一条订单'
            })
            return;
        }
        window.open(`/#/common/order/detail/${item.id}`,'_blank')
    }
    // 订单结束确认
    handleConfirm = () => {
        let item = this.state.selectedItem;
        if(!item){
            Modal.info({
                title:'信息',
                content: '请选择一条订单进行结束'
            })
            return;
        }
        axios.ajax({
            url:'/order/ebike_info',
            data:{
                params:{
                    orderId: item.id
                }
            }
        }).then((res)=>{
            if(res.code === 0||res.code ==='0'){
                this.setState({
                    orderInfo:res.result,
                    orderConfirmVisible:true
                })
            }
        })
    }
    // 结束订单
    handleConfirm = () => {
        let item = this.state.selectedItem;
        axios.ajax({
            url:'/order/finish_order',
            data:{
                params :{
                    orderId: item.id
                }
            }
        }).then((res)=> {
            if(res.code === 0||res.code ==='0'){
                message.success('订单结束成功')
                this.setState({
                    orderConfirmVisible:false
                })
                this.requestList();
            }
        })
    }
    render(){
        const columns = [{
            title:'订单编号',
            dataIndex:'order_sn'
         },{
            title:'车辆编号',
            dataIndex:'bike_sn'
         },{
             title:'用户名',
             dataIndex:'user_name'
         },{
            title:'手机号',
            dataIndex:'mobile'
         },{
            title:'订单编号',
            dataIndex:'order_sn'
         },{
             title:'里程',
             dataIndex:'distance'
         },{
             title:'行驶时长',
             dataIndex:'total_time'
         },{
             title:'状态',
             dataIndex:'status'
         },{
             title:'开始时间',
             dataIndex:'start_time'
         },{
             title:'结束时间',
             dataIndex:'end_time'
         },{
             title:'订单金额',
             dataIndex:'total_fee'
         },{
             title:'实付金额',
             dataIndex:'user_pay'
         }]
         const formItemLayout = {
             labelCol:{span:5},
             wrapperCol:{span:19}
         }
         const selectedRowKeys = this.state.selectedRowKeys;
         const rowSelection = {
             type:'radio',
             selectedRowKeys
         }
        return(
            <div>
              <Card>
                  <BaseForm formList={this.formList} filterSubmit={this.handleFilter}/>
              </Card>
             <Card style={{marginTop:"10px"}}>
                  <Button type="primary" onClick={this.openOrderDetail}>订单详情</Button>
                  <Button type="primary" style={{marginLeft:"10px"}} onClick={this.handleConfirm}>结束订单</Button>
             </Card>    
             <div className="content-wrap">
                <Table 
                   bordered
                   columns={columns}
                   dataSource={this.state.list}
                   pagination={this.state.pagination}
                   rowSelection={rowSelection}
                   onRow = {(record,index) =>{
                       return{
                           onClick: () =>{
                               this.onRowClick(record,index);
                           }
                       };
                   }}
                />
             </div>
            </div>            
        )
    }
}
class FilterForm extends React.Component{ 
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <Form layout="inline">
                <FormItem label="城市">
                    {
                        getFieldDecorator('city_id')(
                            <Select
                                style={{width:100}}
                                placeholder="全部"
                            >
                                <Option value="">全部</Option>
                                <Option value="1">北京市</Option>
                                <Option value="2">天津市</Option>
                                <Option value="3">深圳市</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="订单时间">
                    {
                        getFieldDecorator('start_time')(
                           <DatePicker showTime format = "YYYY-MM-DD HH:mm:ss"/>
                        )
                    }
                  
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator('end_time')(
                           <DatePicker showTime format = "YYYY-MM-DD HH:mm:ss"/>
                        )
                    }
                </FormItem>
                <FormItem label="订单状态">
                    {
                        getFieldDecorator('order_status')(
                            <Select
                                style={{ width: 80 }}
                                placeholder="全部"
                            >
                                <Option value="">全部</Option>
                                <Option value="1">进行中</Option>
                                <Option value="2">结束行程(临时锁车)</Option>
                                <Option value="3">行程结束</Option>
                            </Select>
                        )
                    }
                </FormItem>
        
                <FormItem>
                    <Button type="primary" style={{margin:'0 20px'}}>查询</Button>
                    <Button>重置</Button>
                </FormItem>
            </Form>
        );
    }
}
FilterForm = Form.create({})(FilterForm);