import React from 'react';
import {Card,Form,Button ,Input,message,Icon, Checkbox} from 'antd';
const FormItem=Form.Item;

class FormLogin extends React.Component{
    
    handleSubmit=()=>{
       let userInfo=this.props.form.getFieldsValue();
        this.props.form.validateFields((err,values)=>{
            if(!err){
                message.success(`${userInfo.userName}，恭喜您，您通过本次表单信息学习，密码为: ${userInfo.password}`)
            }
        })
    }

    render(){
        const { getFieldDecorator }=this.props.form;

        return(
            <div>
                <Card title="登录行内表单">
                    <Form layout="inline">
                       <FormItem>
                           <Input placeholder="请输入用户名"/>
                       </FormItem>
                       <FormItem>
                           <Input placeholder="请输入密码"/>
                       </FormItem>
                       <FormItem>
                           <Button type="primary">
                             登录
                           </Button>
                       </FormItem>
                     </Form>   
                </Card>

                  <Card title="登录水平表单" style={{marginTop:10}}>
                    <Form style={{width:300}}>
                        <FormItem >
                            {
                                getFieldDecorator('userName',{
                                     initialValue: 'zoomdong',
                                     rules:[{
                                        required:true,
                                        message:"用户名不能为空"
                                    },{
                                        min:5,max:10,
                                        message:"长度不在范围内"
                                    },{
                                        pattern:new RegExp('^\\w+$','g'),
                                        message:"用户名必须为英文字母或者数字"
                                    }]
                                })(
                                    <Input prefix={<Icon type="user" />} placeholder="请输入用户名" />
                                )
                            } 
                        </FormItem>
                      
                        <FormItem >
                            {
                                getFieldDecorator('password',{
                                     initialValue: '123456',
                                     rules:[]
                                })(
                                    <Input prefix={<Icon type="lock" />} type="password" placeholder="请输入密码"/>
                                )
                            } 
                        </FormItem>


                        <FormItem >
                            {
                                getFieldDecorator('remember',{
                                    valuePropName:"checked",//确认记住密码时的默认状态的一个参数
                                     initialValue: false,
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )
                            }
                            <a href=" " style={{float:'right'}}>忘记密码</a> 
                        </FormItem>

                        <FormItem>
                            <Button type="primary" onClick={this.handleSubmit}>
                                登录
                            </Button>
                        </FormItem>
                     </Form>   
                </Card>

            </div>
        )
    }
}
export default Form.create()(FormLogin)