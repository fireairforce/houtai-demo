import React from 'react';
import {Card,Button,Modal} from 'antd';
import './index.less';

export default class Modals extends React.Component{
    state={
       showModal1:false,
       showModal2:false,
       showModal3:false,
       showModal4:false,
    }
    handleOpen=(type)=>{
        // console.log([type]);
       this.setState({
         [type]:true,
       })
    }
    handleConfirm=(type)=>{
        Modal[type]({
            title:'确认',
            content:'你确定会用这个系统了吗？',
            onOk(){
               console.log('Ok');
            },
            onCancel(){
                console.log('Cancel');
            } 
        })
    }
    render(){
        return(
            <div className="card-wrap">
                <Card title="基础模态框" className="class-wrap">
                   <Button type="primary" onClick={()=>this.handleOpen('showModal1')}>Open</Button>
                   <Button type="primary" onClick={()=>this.handleOpen('showModal2')}>自定义页脚</Button>
                   <Button type="primary" onClick={()=>this.handleOpen('showModal3')}>顶部20px弹框</Button>
                   <Button type="primary" onClick={()=>this.handleOpen('showModal4')}>水平垂直居中</Button>
                </Card>   

                 <Card title="信息确认框" className="class-wrap">
                   <Button type="primary" onClick={()=>this.handleConfirm('confirm')}>Confirm</Button>
                   <Button type="primary" onClick={()=>this.handleConfirm('info')}>Info</Button>
                   <Button type="primary" onClick={()=>this.handleConfirm('success')}>Success</Button>
                   <Button type="primary" onClick={()=>this.handleConfirm('warning')}>Warning</Button>
                </Card>  

                <Modal 
                  title="React"
                  visible={this.state.showModal1}
                  onCancel={()=>{
                      this.setState({
                          showModal1:false,
                      })
                  }}
                >
                  <p>欢迎来到ACM管理系统</p>
                </Modal>

                 <Modal 
                  title="React"
                  visible={this.state.showModal2}
                  onText="算了"
                  cancelText="好的"
                  onCancel={()=>{
                      this.setState({
                          showModal2:false,
                      })
                  }}
                >
                  <p>欢迎来到ACM管理系统</p>
                </Modal>  

                <Modal 
                  title="React"
                  style={{top:20}}
                  visible={this.state.showModal3}
                  onText="算了"
                  cancelText="好的"
                  onCancel={()=>{
                      this.setState({
                          showModal3:false,
                      })
                  }}
                >
                  <p>欢迎来到ACM管理系统</p>
                </Modal>   

                <Modal 
                  title="React"
                  wrapClassName="vertical-center-modal"
                  visible={this.state.showModal4}
                  onCancel={()=>{
                      this.setState({
                          showModal4:false,
                      })
                  }}
                >
                  <p>欢迎来到ACM管理系统</p>
                </Modal>   

            </div>
        )
    }
}