import React from 'react';
import {Card,Tabs,message,Icon} from 'antd';
import './../ui/ui.less'
const TabPane = Tabs.TabPane;
export default class Tab extends React.Component{

    newTabIndex = 0;
    handleCallback = (key) =>{
        message.info(`hi,您选择了页签: ${key}`);
    }

    componentWillMount(){
        const panes=[{
            title:'Tab1',
            content:'欢迎加入ACM俱乐部',
            key:"1"
        },
        {
            title:'Tab2',
            content:'欢迎加入ACM俱乐部',
            key:"2"
        },
        {
            title:'Tab3',
            content:'欢迎加入ACM俱乐部',
            key:"3"
        }]
        this.setState({
            activeKey:panes[0].key,
            panes//key值和value值相同可以直接省略掉
        })
    }
    onchange = (activeKey) => {
        this.setState({
            activeKey
        })
    }
    onEdit = (targetKey,action) => {
        this[action](targetKey);
    }
    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: activeKey, content: 'New Tab Pane', key: activeKey });
        this.setState({ panes, activeKey });
      }
    
      remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
          activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });
      }
    render(){
        
        return(
            <div>
               <Card title="内部页签" className="card-wrap">
                  <Tabs defaultActivekey="1" onChange={this.handleCallback}>
                      <TabPane tab="Tab1" key="1">欢迎来到ACM俱乐部</TabPane>
                      <TabPane tab="Tab2" key="2" disabled>欢迎来到ACM俱乐部</TabPane>
                      <TabPane tab="Tab3" key="3">JS是世界上最好的语言</TabPane>
                  </Tabs>    
               </Card>
               {/* 如果这个地方是UI给的图标我们就可以把Icon换成img标签 */}
                <Card title="带图的页签" className="card-wrap">
                  <Tabs defaultActivekey="1" onChange={this.handleCallback}>
                      <TabPane tab={<span><Icon type="plus" />Tab1</span>} key="1">欢迎来到ACM俱乐部</TabPane>
                      <TabPane tab={<span><Icon type="edit" />Tab2</span>} key="2">欢迎来到ACM俱乐部</TabPane>
                      <TabPane tab={<span><Icon type="delete" />Tab3</span>} key="3">JS是世界上最好的语言</TabPane>
                  </Tabs>    
               </Card>

               <Card title="动态的页签" className="card-wrap">
                  <Tabs 
                        onChange={this.onchange}
                        // defaultActivekey="1" 
                        activeKey={this.state.activeKey}
                        type="editable-card"
                        onEdit={this.onEdit}
                  >
                    {
                        this.state.panes.map((item,index)=>{
                            return <TabPane
                               tab={item.title}
                               key={item.key}
                            />
                        })
                    }
                  </Tabs>    
               </Card>
            </div>
        )
    }
}