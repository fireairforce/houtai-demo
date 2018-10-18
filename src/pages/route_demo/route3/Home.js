import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component{
     render(){
         return(
                  <div>
                      <ul>
                          <li>
                              <Link to='/main'>Home</Link>
                          </li>
                          <li>
                              <Link to='/about'>About1</Link>
                          </li>
                          <li>
                              <Link to='/topics'>topics1</Link>
                          </li>
                          <li>
                              <Link to='/acm'>ACM</Link>
                          </li>
                      </ul>
                      <hr/> 
                      {this.props.children}                
                  </div>  
         )
     }
}