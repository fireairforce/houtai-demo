import React from 'react';
import {Card,Button,Radio} from 'antd';
import './index.less';

export default class Buttons extends React.Component{
    state={
        loading:true
    }
    handleCloseLoading = () => {
         this.setState({
             loading:false,
         });
    }
    handleStartLoading = ()=>{
        this.setState({
            loading:true
        });
    }
    handleChange=(e)=>{
        this.setState({
            size:e.target.value//获取按钮的value值
        })
    }
    render(){
        return(
            <div >
               <Card title="基础按钮" className="card-wrap">
                  <Button type="primary">ACM</Button>
                  <Button>ACM</Button>   
                  <Button type="dashed">ACM</Button>  
                  <Button type="danger">ACM</Button>  
                  <Button disabled>ACM</Button> 
               </Card>

               <Card title="图形按钮" className="card-wrap">
                  <Button icon="plus">创建</Button>
                  <Button icon="edit">编辑</Button>   
                  <Button icon="delete">删除</Button>  
                  <Button shape="circle" icon="search"></Button>  
                  <Button type="primary" icon="search">搜索</Button> 
                  <Button type="primary" icon="download">下载</Button> 
               </Card>

                <Card title="Loading按钮" className="card-wrap">
                  <Button type="primary" loading={this.state.loading}>确定</Button>
                  <Button type="primary" shape="circle" loading={this.state.loading}></Button>   
                  <Button loading={this.state.loading}>点击加载</Button>  
                  <Button shape="circle"></Button>  
                  <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button> 
                  <Button type="primary" onClick={this.handleStartLoading}>开始</Button> 
               </Card>

                 <Card title="按钮组">
                   <Button.Group>
                       <Button type="primary" icon="left" >返回</Button>
                       <Button type="primary" icon="right">前进</Button>
                   </Button.Group>    
               </Card>

                <Card title="按钮尺寸" className="card-wrap">
                    <Radio.Group value={this.state.size} onChange={this.handleChange}>
                        <Radio value="small">小</Radio> 
                        <Radio value="default">中</Radio> 
                        <Radio value="large">大</Radio> 
                    </Radio.Group>  
                  <Button type="primary" size={this.state.size}>ACM</Button>
                  <Button size={this.state.size}>ACM</Button>   
                  <Button type="dashed" size={this.state.size}>ACM</Button>  
                  <Button type="danger" size={this.state.size}>ACM</Button>     
               </Card>
            </div>
        )
    }
}