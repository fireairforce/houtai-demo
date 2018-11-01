import React from 'react';
import {Input,Select,Form,Button,Checkbox,Radio} from 'antd';
import { Utils } from '../../utils/utils';

const FormItem = Form.Item;
const Option = Select.Option;

class FilterForm extends React.Component{
    initFormList = () =>{
        const {getFiledDecorator} = this.props.form;
        const formList = this.props.formList;
        if(formList && formList.length>0){
            formList.forEach((item,i)=>{
                let label = item.label;
                let field = item.field;
                let initialValue = item.initialValue || '';
                let placeholder = item.placeholder;
                let width = item.width;
                if(item.type==='INPUT'){
                    const SELECT = <FormItem label={label} key={field}>
                       {
                           getFiledDecorator([field],{
                               initialValue:initialValue
                           })(
                               <Input type="text" placeholder={placeholder}/>
                           )
                       }
                    </FormItem>
                }
                else if(item.type ==='SELECT'){
                    const SELECT = <FormItem label={label} key={field}>
                         {
                             getFiledDecorator([field],{
                                 initialValue:initialValue,
                             })(
                            <Select
                                style={{ width: width }}
                                placeholder={placeholder}
                            >
                               {Utils.getOptionList(item.list)}
                            </Select>
                             )
                         }
                    </FormItem>;
                }
               else if(item.type==='CHECKBOX'){
                const SELECT = <FormItem label={label} key={field}>
                {
                    getFiledDecorator([field],{
                        valuePropName:'checked',
                        initialValue:initialValue, //true | false 
                    })(
                     <Checkbox>
                         {label}
                     </Checkbox>
                    )
                }
           </FormItem>;
               } 
            })
        }
    }
    render(){
        return(
            <Form>
             
            </Form>    
        )
    }
}
export default Form.create({})(FilterForm);