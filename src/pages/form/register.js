import React from 'react';
import {Card,Form,Button ,Input,message,Icon, Checkbox,Radio,Select,Switch,DatePicker,TimePicker,Upload} from 'antd';

const FormItem = Form.Item;
class FormRegister extends React.Component{
    
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div>
                <Card title="注册表单">
                    <Form layout="horizontal" style={{width: 300}}>
                       <FormItem label="用户名">
                            {
                                getFieldDecorator('userName',{
                                    initialValue: 'zoomdong',
                                    rules:[{
                                        required:true,
                                        message:"用户名不能为空"
                                    }]
                                })(
                                    <Input placeholder="请输入用户名" />
                                )
                            } 
                       </FormItem>   

                       <FormItem label="密码">
                            {
                                getFieldDecorator('userPwd',{
                                    initialValue: '',
                                    rules:[{
                                        required:true,
                                        message:"密码不能为空"
                                    }]
                                })(
                                    <Input placeholder="请输入密码" />
                                )
                            } 
                       </FormItem>     
                    </Form>
                </Card>
            </div>
        )
    }
}

export default Form.create()(FormRegister)