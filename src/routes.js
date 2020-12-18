import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Item from './pages/item';
import Home from './pages/home'
import Alimentos from './pages/alimentos'
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/item" component={Item} />
            <Route path="/alimentos" component={Alimentos} />
        </Switch>
    </BrowserRouter>
);

export default Routes;