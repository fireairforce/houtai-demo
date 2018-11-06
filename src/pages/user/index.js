import React from 'react';
import {Card,Button,Modal,Form,Radio,DatePicker,Select,Input} from 'antd';
import axios from './../../axios';
import Utils from './../../utils/utils';
import Etable from './../../components/Etable';
import BaseForm from '../../components/BaseForm';
import moment from 'moment';
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

export default class User extends React.Component{
    params = {
        page:1
    }
    state={
      
      list:[]
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
    // 功能区操作
    handleOperate = (type) =>{
        let item = this.state.selectedItem;
       if(type == 'create'){
          this.setState({
              type,
              title:'创建员工',
              isVisible:true
          })
       }
       else if(type =='edit'){
          if(!item){
              Modal.info({
                  title:"提示",
                  content:'请选择一个用户'
              })
              return ;
          }
          this.setState({
              type,
              isVisible:true,
              title:'编辑员工',
              userInfo:item
          })
       }else if(type=='detail'){
        this.setState({
            type,
            isVisible:true,
            title:'员工详情',
            userInfo:item
        })
       }else if(type=='delete'){
        if(!item){
            Modal.info({
                title:"提示",
                content:'请选择一个用户'
            })
            return ;
        }
        let _this =this;
        Modal.confirm({
            title:'确认删除',
            content:'是否要删除当前选中员工',
            onOk(){
                axios.ajax({
                    url:'/user/delete',
                    data:{
                        params:{
                            id:item.id
                        }
                    }
                }).then((res)=>{
                    if(res.code==0){
                        _this.setState({
                            isVisible:false
                        })
                        _this.requestList();
                    }
                })
            }
        })
       }
    }
    // 创建员工提交
    handleSubmit = () => {
        let type = this.state.type;
        let data = this.userForm.props.form.getFieldsValue();
        axios.ajax({
            url:type=='create'?'/user/add':'/user/edit',
            data:{
                params:data
            }
        }).then((res)=>{
            if(res.code == 0||res.code == '0'){
                this.userForm.props.form.resetFields();
                this.setState({
                    isVisible:false
                })
                this.requestList()
            }
        })
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
        let footer = {};
        if(this.state.type =='detail'){
            footer = {
                footer:null
            }
        }
        return(
            <div>
                <Card>
                    <BaseForm formList={this.formList} filterSubmit={this.handleFilter}/>
                </Card>   
                <Card style={{marginTop:"10px"}} className="operate-wrap">
                  <Button type="primary" icon="plus" onClick={()=> {this.handleOperate('create')} }>创建员工</Button>
                  <Button type="primary" icon="edit" onClick={()=> {this.handleOperate('edit')} }>编辑员工</Button>
                  <Button type="primary"  onClick={()=> {this.handleOperate('detail')} } >员工详情</Button>
                  <Button type="primary" icon="delete" onClick={()=>{this.handleOperate('delete')}}>删除员工</Button>
             </Card>   
             <div className="content-wrapper">
                  <Etable 
                    columns={columns}
                    updateSelectedItem={Utils.updateSelectedItem.bind(this)}
                    selectedRowKeys={this.state.selectedRowKeys}
                    dataSource={this.state.list}
                    pagination={this.state.pagination}
                  />
             </div>   
              <Modal
               title={this.state.title}
               visible={this.state.isVisible}
               onOk={this.handleSubmit}
               onCancel={()=>{
                   this.setState({
                       isVisible:false
                   })
               }}
               width={600}
               {...footer}
              >
                 <UserForm type={this.state.type} userInfo={this.state.userInfo} wrapperComponentRef={(inst)=>this.userForm = inst}></UserForm>
              </Modal>       
            </div>
        )
    }
}
class UserForm extends React.Component{

    getState = (state)=>{
        return {
            '1':'菜鸡wd',
            '2':'牛逼chy',
            '3':'东秦大佬',
            '4':'阿里FE',
            '5':'创业者'
        }[state]
     }
    render(){
        let type=this.props.type;
        let userInfo=this.props.userInfo || {};
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {span: 5},
            wrapperCol: {span: 16}
        }
        return(

            <Form layout="horizontal">
               <FormItem label="姓名" {...formItemLayout}>
                  {
                      type=='detail'?userInfo.username:
                      getFieldDecorator('user_name',{
                          initialValue:userInfo.username
                      })(
                          <Input type="text" placeholder="请输入用户名"/>
                      )
                  }
               </FormItem>
               <FormItem label="性别"  {...formItemLayout}>
                  {
                       type=='detail'?userInfo.sex==1?'男':'女':
                      getFieldDecorator('sex',{
                          initialValue:userInfo.sex
                      })(
                         <RadioGroup>
                             <Radio value={1}>男</Radio>
                             <Radio value={2}>女</Radio>
                         </RadioGroup>
                      )
                  }
               </FormItem>
               <FormItem label="状态"  {...formItemLayout}>
                  {
                      type=='detail'?this.getState(userInfo.state):
                      getFieldDecorator('state',{
                          initialValue:userInfo.state
                      })(
                         <Select>
                             <Option value={1}>菜鸡wd</Option>
                             <Option value={2}>牛逼chy</Option>
                             <Option value={3}>东秦大佬</Option>
                             <Option value={4}>阿里FE</Option>
                             <Option value={5}>创业者</Option>
                         </Select>    
                      )
                  }
               </FormItem>

                 <FormItem label="生日"  {...formItemLayout}>
                  {
                      type=='detail'?userInfo.birthday:
                      getFieldDecorator('birthday',{
                          initialValue:moment(userInfo.birthday)
                      })(
                        <DatePicker />
                      )
                  }
               </FormItem>
               <FormItem label="联系地址"  {...formItemLayout}>
                  {
                      type=='detail'?userInfo.address:
                      getFieldDecorator('address',{
                          initialValue:userInfo.address
                      })(
                        <Input.TextArea rows={3} placeholder="请输入联系地址"/>
                      )
                  }
               </FormItem>
            </Form>
        );
    }
}
UserForm = Form.create({})(UserForm);

