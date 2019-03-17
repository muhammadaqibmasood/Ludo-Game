import React from 'react';
import Startgame from './startpage';
import MainPage from './mainpage'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
const routes = () => {
    return (
        <div>
            <BrowserRouter>
            <Switch>
             <Route exact path='/' component={Startgame}/>
             <Route path='/game/:id' component={MainPage}/>
             </Switch>
            </BrowserRouter>
        </div>
    );
};

export default routes;