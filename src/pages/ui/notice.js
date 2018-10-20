import React from 'react';
import {Card ,Button,notification} from 'antd';
import './../ui/ui.less';
export default class Notifications extends React.Component{

   openNotification=(type,direction)=>{
       if(direction){
       notification.config({
          placement:direction
       })
    }
        notification[type]({
          message:'拿牌了',
          description:'最后几分钟绝杀拿牌了'
        })
    }

   render(){
       return(
           <div>
                <Card title="通知提醒框" className="card-wrap">
                    <Button type="primary" onClick={()=>{this.openNotification('success')}}>一键拿牌</Button>
                    <Button type="primary" onClick={()=>{this.openNotification('info')}}>Info</Button>
                    <Button type="primary" onClick={()=>{this.openNotification('warning')}}>Wraning</Button>
                    <Button type="primary" onClick={()=>{this.openNotification('error')}}>Error</Button>
                </Card>
                <Card title="通知提醒框-方向感" className="card-wrap">
                        <Button type="primary" onClick={()=>{this.openNotification('success','topLeft')}}>一键拿牌</Button>
                        <Button type="primary" onClick={()=>{this.openNotification('info','topRight')}}>Info</Button>
                        <Button type="primary" onClick={()=>{this.openNotification('warning','bottomLeft')}}>Wraning</Button>
                        <Button type="primary" onClick={()=>{this.openNotification('error','bottomRight')}}>Error</Button>
                </Card>
            </div> 
       )
   }
}