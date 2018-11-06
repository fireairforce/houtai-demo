import React from 'react';
import Utils from './../../utils/utils';
import {Table} from 'antd';
export default class ETable extends React.Component{
    tableInit = () =>{
       let selectedRowkeys = this.props.selectedRowkeys; 
       let row_selection = this.props.rowSelection;
       const rowSelection = {
           type:'radio',
           selectedRowkeys,
           onChange:this.onSelectChange,
       }
       if(row_selection === false||row_selection === null){
           row_selection=false;
       }else if(row_selection ==='checkbox'){
           rowSelection.type='checkbox';
       }else{
           row_selection ='radio';
       }
      return (<Table 
         bordered
         {...this.props}
         rowSelection={row_selection?rowSelection:null}
      />)
    }

    render(){
        return(
            <div>
              {this.tableInit}
            </div>
        )
    }
}