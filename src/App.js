import React, { Component } from "react";
import "./App.css";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Banner from "./components/Banner/Banner";
import QuemSomos from "./components/Quem-Somos/Quem-Somos";
import Rodape from "./components/Rodape/Rodape";
import Clientes from "./components/Clientes/Clientes";
import Solucoes from "./components/Solucoes/Solucoes";
import Contato from "./components/Contato/Contato";
import Formulario from "./components/Formulario/Formulario";

function aoEnviarForm(dados) {
    const templateId = "template_d5w0gxp";
    if (dados.empresa.length === 0) {
        dados.empresa = "Particular";
    }
    sendFeedback(templateId, {
        from_name: dados.nome,
        from_email: dados.email,
        from_telefone: dados.telefone,
        from_empresa: dados.empresa,
        from_message: dados.mensagem,
    });
}

function sendFeedback(templateId, variables) {
    window.emailjs
        .send(
            "service_i8l2ner",
            templateId,
            variables,
            "user_QqXVavJaGt8ojZkn5MZ4M"
        )
        .then((res) => {
            console.log("Email successfully sent!");
        })
        .catch((err) =>
            console.error(
                "Oh well, you failed. Here some thoughts on the error that occured:",
                err
            )
        );
}

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
