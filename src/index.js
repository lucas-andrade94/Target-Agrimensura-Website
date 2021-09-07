import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import "normalize.css";
import App from "./App";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Banner from "./components/Banner/Banner";
import QuemSomos from "./components/Quem-Somos/Quem-Somos";
import Clientes from "./components/Clientes/Clientes";
import Solucoes from "./components/Solucoes/Solucoes";
import Contato from "./components/Contato/Contato";

ReactDOM.render(
    (
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={Banner}/>
                    <Route exact path="/quem-somos" component={QuemSomos}/>
                    <Route exact path="/clientes" component={Clientes}/>
                    <Route exact path="/solucoes" component={Solucoes}/>
                    <Route exact path="/contato" component={Contato}/>
                </Switch>
            </App>
        </Router>
    ),
    document.getElementById("root")
);
