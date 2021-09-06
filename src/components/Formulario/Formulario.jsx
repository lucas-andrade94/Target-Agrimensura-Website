import React, { useState } from "react";
import "./Formulario.css";
import { Button, TextField } from "@material-ui/core";
import { validarNome, validarEmail } from "../../models/contatoErros.js";

function validate(campos) {
    const errors = {};

    if (!campos.email.includes("@")) {
        errors.email = true;
    }

    if (campos.telefone.length < 10) {
        errors.telefone = "Insira o telefone com DDD";
    }

    return errors;
}

const Formulario = ({ aoEnviar }) => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [empresa, setEmpresa] = useState("");
    const [mensagem, setMensagem] = useState("");
    const campos = { nome, email, telefone, empresa, mensagem };
    const [erros, setErros] = useState({
        nome: { valido: true, texto: "" },
        email: { valido: true, texto: "" },
    });

    function handleFormSubmit(event) {
        event.preventDefault();
        aoEnviar(campos);
    }

    return (
        <form className="formulario" onSubmit={handleFormSubmit}>
            <h2 className="formulario--titulo">Entre em contato</h2>
            <TextField
                className="formulario--campos"
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
                }}
                onBlur={() => {
                    const nomeEhValido = validarNome(nome);
                    setErros({ nome: nomeEhValido });
                }}
                error={!erros.nome.valido}
                helperText={erros.nome.texto}
                id="nome"
                name="nome"
                label="Nome"
                variant="outlined"
                margin="normal"
                required
            />
            <TextField
                className="formulario--campos"
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
                onBlur={() => {
                    const emailEhValido = validarEmail(email);
                    setErros({ email: emailEhValido });
                }}
                error={!erros.email.valido}
                helperText={erros.email.texto}
                id="email"
                name="email"
                label="E-mail"
                variant="outlined"
                margin="normal"
                required
            />
            <TextField
                className="formulario--campos"
                value={telefone}
                onChange={(event) => {
                    setTelefone(event.target.value);
                }}
                id="telefone"
                name="telefone"
                label="Telefone"
                variant="outlined"
                margin="normal"
                required
            />
            <TextField
                className="formulario--campos"
                value={empresa}
                onChange={(event) => {
                    setEmpresa(event.target.value);
                }}
                id="empresa"
                name="empresa"
                label="Empresa"
                variant="outlined"
                margin="normal"
            />
            <TextField
                className="formulario--campos formulario--mensagem"
                value={mensagem}
                onChange={(event) => {
                    setMensagem(event.target.value);
                }}
                id="mensagem"
                name="mensagem"
                label="Mensagem"
                multiline
                rows={8}
                variant="outlined"
                margin="normal"
                required
            />
            <Button
                className="formulario--botao"
                type="submit"
                variant="contained"
            >
                Enviar
            </Button>
        </form>
    );
};

export default Formulario;
