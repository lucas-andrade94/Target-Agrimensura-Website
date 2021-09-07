import React, { Component } from 'react';
import "./App.css";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Banner from "./components/Banner/Banner";
import QuemSomos from "./components/Quem-Somos/Quem-Somos";
import Rodape from "./components/Rodape/Rodape";
import Clientes from "./components/Clientes/Clientes";
import Solucoes from "./components/Solucoes/Solucoes";
import Contato from "./components/Contato/Contato";
import Formulario from "./components/Formulario/Formulario";

export default class App extends Component {
    render() {
        return (
            <section>
                <Cabecalho />
                <Banner />
                <QuemSomos />
                <Clientes />
                <Solucoes />
                <section>
                    <Contato />
                    <Formulario aoEnviar={aoEnviarForm} />
                </section>
                <Rodape />
            </section>
        );
    }
}

function aoEnviarForm(dados) {
    console.log(dados);
}
