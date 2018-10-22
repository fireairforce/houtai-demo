import React from 'react';
import {Card,Form,Button ,Input,Icon, Checkbox,Radio,Select,Switch,DatePicker,TimePicker,Upload, InputNumber} from 'antd';
import moment from 'moment';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option=Select.Option;
const TextArea = Input.TextArea;

class FormRegister extends React.Component{
   
    state={

    } 
    handleSubmit=()=>{
        let usetInfo = this.props.form.getFieldsValue();//通过这个可以获得所有的值
        console.log(JSON.stringify(usetInfo));
    }
    handleReset=()=>{
        this.props.form.resetFields();
    }
     getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      }
      
    handleChange = (info) => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          this.getBase64(info.file.originFileObj, imageUrl => this.setState({
            userImg:imageUrl,
            loading: false,
          }));
        }
      }

    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol:{
                xs:24,//像素小于576px
                sm:4
            },
            wrapperCol:{
                xs:24,
                sm:20
            }
        }
        const offsetLayout={
            wrapperCol:{
                xs:24,
                sm:{
                  span:12,offset:4//表示占用12列，偏移4列
                }
            }
        }

        const rowObject={
            minRows:4,maxRows:6
        }
        return(
            <div>
                <Card title="注册表单">
                    <Form layout="horizontal">

                       <FormItem label="用户名" {...formItemLayout}>
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

                       <FormItem label="密码" {...formItemLayout}>
                            {
                                getFieldDecorator('userPwd',{
                                    initialValue: '',
                                    rules:[{
                                        required:true,
                                        message:"密码不能为空"
                                    }]
                                })(
                                    <Input placeholder="请输入密码" type="password"/>
                                )
                            } 
                       </FormItem>  

                       <FormItem label="性别" {...formItemLayout}>
                            {
                                getFieldDecorator('sex',{
                                    initialValue: '1',
                                })(
                                    <RadioGroup>
                                        <Radio value="1">男</Radio>
                                        <Radio value="2"></Radio>
                                    </RadioGroup>
                                )
                            } 
                       </FormItem>  

                          <FormItem label="年龄" {...formItemLayout}>
                            {
                                getFieldDecorator('age',{
                                    initialValue: 18,
                                })(
                                  <InputNumber />
                                )
                            } 
                       </FormItem>

                        <FormItem label="当前状态" {...formItemLayout}>
                            {
                                getFieldDecorator('state',{
                                    initialValue: "菜鸡WD",
                                })(
                                  <Select>
                                      <Option value="1">咸鱼一条</Option>
                                      <Option value="2">东秦大佬</Option>
                                      <Option value="3">阿里FE</Option>
                                      <Option value="4">头条BE</Option>
                                      <Option value="5">菜鸡WD</Option>
                                  </Select>
                                )
                            } 
                       </FormItem>

                       <FormItem label="爱好" {...formItemLayout}>
                            {
                                getFieldDecorator('interst',{
                                    initialValue: ['2','5'],
                                })(
                                  <Select mode="multiple">
                                      <Option value="1">游泳</Option>
                                      <Option value="2">打篮球</Option>
                                      <Option value="3">踢足球</Option>
                                      <Option value="4">跑步</Option>
                                      <Option value="5">爬山</Option>
                                      <Option value="6">骑行</Option>
                                      <Option value="7">桌球</Option>
                                      <Option value="8">玩蛇</Option>
                                  </Select>
                                )
                            } 
                       </FormItem>

                       <FormItem label="是否有对象" {...formItemLayout}>
                            {
                                getFieldDecorator('isMarried',{
                                    valuePropName:'checked',
                                    initialValue: true,
                                })(
                                   <Switch />
                                )
                            } 
                       </FormItem>

                        <FormItem label="生日" {...formItemLayout}>
                            {
                                getFieldDecorator('birthday',{
                                       initialValue:moment('2018-08-08') //使用日期控件一定要记住和moment来一起使用
                                })(
                                   <DatePicker 
                                      showTime
                                      format="YYYY-MM-DD HH:mm:ss" 
                                   />
                                )
                            } 
                       </FormItem>

                       <FormItem label="联系地址" {...formItemLayout}>
                            {
                                getFieldDecorator('address',{ 
                                    initialValue:'北京市海淀区奥林匹克公园' 
                                })(
                                  <TextArea 
                                  autosize={
                                      {...rowObject}
                                  }                                
                                   />
                                )
                            } 
                       </FormItem>


                       <FormItem label="早起时间" {...formItemLayout}>
                            {
                                getFieldDecorator('time',{ 
                                    initialValue:'' 
                                })(
                                   <TimePicker                                
                                   />
                                )
                            } 
                       </FormItem>

                        <FormItem label="头像" {...formItemLayout}>
                            {
                                getFieldDecorator('userImg',{ 
                                    initialValue:'' 
                                })(
                                   <Upload
                                     listType="picture-card"
                                     showUploadList={false}
                                     action="//jsonplaceholder.typicode.com/posts/"//把这个地方的接口换成真正开发给的接口
                                     onChange={this.handleChange}
                                   >
                                       {this.state.userImg?<img src={this.state.userImg} alt={this.state.userImg}/>:<Icon type="plus" />}
                                   </Upload>    
                                )
                            } 
                       </FormItem>

                          <FormItem  {...offsetLayout}>
                            {
                                getFieldDecorator('userImg',{ 
                                    initialValue:'' 
                                })(
                                   <Checkbox>我已经阅读过<a href=" ">ACM管理规章制度</a></Checkbox>
                                )
                            } 
                       </FormItem>
                    </Form>
                    <Form layout="inline">
                         <FormItem  {...offsetLayout} >
                            {<Button type="primary" onClick={this.handleSubmit} >注册</Button> }
                       </FormItem>

                        <FormItem   >
                            {<Button type="primary" onClick={this.handleReset} >重置</Button> }
                       </FormItem>
                     </Form>

                </Card>
            </div>
        )
    }
}

export default Form.create()(FormRegister)