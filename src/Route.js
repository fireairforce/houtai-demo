import React from 'react';
import {HashRouter ,Route,Switch} from 'react-router-dom';
import App from './App';
import Home from './pages/home'
import Admin from './Admin';
import Login from './pages/login';
import Buttons from './pages/ui/buttons';
import Modals from './pages/ui/modals';
import Loading from './pages/ui/loading';
import Notifications from './pages/ui/notice';
import Messages from './pages/ui/message';
import Tabs from './pages/ui/tabs';
import Gallery from './pages/ui/gallery';
import NoMatch from './pages/nomatch';
import Carrousels from './pages/ui/carousel';
import FormLogin from './pages/form/login';
import FormRegister from './pages/form/register';
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
                                <Route path="/admin/home" component={Home} />  
                                <Route path="/admin/ui/buttons" component={Buttons}/>
                                <Route path="/admin/ui/modals" component={Modals}/>
                                <Route path="/admin/ui/loadings" component={Loading}/>
                                <Route path="/admin/ui/messages" component={Messages}/>
                                <Route path="/admin/ui/tabs" component={Tabs}/>
                                <Route path="/admin/ui/gallery" component={Gallery} />
                                <Route path="/admin/ui/carousel" component={Carrousels} />
                                <Route path="/admin/form/login" component={FormLogin} />
                                <Route path="/admin/form/reg" component={FormRegister} />
                                <Route path="/admin/ui/notification" component={Notifications}/>
                       
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