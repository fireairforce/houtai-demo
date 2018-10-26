import React from 'react';
import {Card ,Button} from 'antd';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


// 1.sudo yarn add react-draft-wysiwyg
// 2.sudo yarn add draftjs-to-html
export default class RichText extends React.Component{
    state={

    }
    onEditorStateChange = (editorState) =>{
       this.setState({
           editorState
       });
    }
    render(){

        const {editorState} = this.state;
        return(
            <div>
                <Card>
                    <Button type="primary">
                        清空内容
                    </Button>
                    <Button type="primary">
                        获取HTML文本
                    </Button>
                </Card>
                <Card title = "富文本编辑器">
                   <Editor
                     editorState={editorState}
                     onEditorStateChange={this.onEditorStateChange}
                   />
                </Card> 
            </div>
        )
    }
}