import React from 'react';
import {HashRouter ,Route,Switch} from 'react-router-dom';
import App from './App';
import Admin from './Admin';
import Login from './pages/login';
import Buttons from './pages/ui/buttons';
import NoMatch from './pages/nomatch';
export default class IRouter extends React.Component{
    render(){
        return(
           <div>
              <HashRouter>
                  <App>
                    <Route path="/login" component={Login} />
                    <Route path="/admin" render={()=>
                         <Admin>
                             <Switch>
                                <Route path="/admin/ui/buttons" component={Buttons}/>
                                <Route  component={NoMatch}/>
                             </Switch>   
                         </Admin>    
                    } />
                    <Route path="/order/detail" component={Login}/>
                  </App>
             </HashRouter>
           </div>
        );
    }
}