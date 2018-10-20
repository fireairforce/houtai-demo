import React from 'react';
import { Card ,Spin,Icon,Alert} from 'antd';
import './../ui.less';

export default class Loading extends React.Component{
    render(){
        const icon = <Icon type="plus" style={{fontSize:24}}/>
        const iconLoading = <Icon type="loading" style={{fontSize:24}}/>
        return(
            <div>
               <Card title="Spin用法" className="card-wrap">
                   <Spin size="small"/>
                   <Spin style={{margin:'0 10px'}}/>
                   <Spin size="large"/>
                   <Spin indicator={icon} style={{marginLeft:10}} spinning={true}/>
               </Card>
               <Card title="内容遮盖" className="card-wrap">
                    <Alert 
                       message="ACM俱乐部"
                       description="欢迎来到NEUQACM俱乐部"
                       type="info"
                    />
                     
                    <Spin>
                        <Alert 
                            message="ACM俱乐部"
                            description="欢迎来到NEUQACM俱乐部"
                            type="warning"
                        />
                    </Spin>

                     <Spin tip="加载中...">
                        <Alert 
                            message="ACM俱乐部"
                            description="欢迎来到NEUQACM俱乐部"
                            type="warning"
                        />
                    </Spin>
                    <Spin tip="加载中..." indicator={iconLoading}>
                        <Alert 
                            message="ACM俱乐部"
                            description="欢迎来到NEUQACM俱乐部"
                            type="warning"
                        />
                    </Spin>
                </Card>   
            </div>
        )
    }
}