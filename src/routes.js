import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Item from './pages/item';
import Home from './pages/home';
import Categoria from './pages/categoria';
import Cuidados from './pages/cuidados';
import Info from './pages/info';
import Cadastro from './pages/cadastro';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/item" component={Item} />
            <Route path="/categoria" component={Categoria} />
            <Route path="/cuidados" component={Cuidados} />
            <Route path="/info" component={Info} />
            <Route path="/cadastro" component={Cadastro} />
        </Switch>
    </BrowserRouter>
);

export default Routes;