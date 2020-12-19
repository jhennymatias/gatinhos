import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Item from './pages/item';
import Home from './pages/home'
import Categoria from './pages/categoria'
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/item" component={Item} />
            <Route path="/categoria" component={Categoria} />
        </Switch>
    </BrowserRouter>
);

export default Routes;