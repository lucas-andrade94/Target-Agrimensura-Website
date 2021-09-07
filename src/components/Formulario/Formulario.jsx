import React, { useState } from "react";
import "./Formulario.css";
import { Button, TextField } from "@material-ui/core";
import {
    validarNome,
    validarEmail,
    validarTelefone,
    validarMensagem,
} from "../../models/contatoErros.js";

const Formulario = ({ aoEnviar }) => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [empresa, setEmpresa] = useState("");
    const [mensagem, setMensagem] = useState("");
    const campos = { nome, email, telefone, empresa, mensagem };
    const [erroNome, setErroNome] = useState({
        nome: { valido: true, texto: "" },
    });
    const [erroEmail, setErroEmail] = useState({
        email: { valido: true, texto: "" },
    });
    const [erroTelefone, setErroTelefone] = useState({
        telefone: { valido: true, texto: "" },
    });
    const [erroMensagem, setErroMensagem] = useState({
        mensagem: { valido: true, texto: "" },
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
                    setErroNome({ nome: nomeEhValido });
                }}
                error={!erroNome.nome.valido}
                helperText={erroNome.nome.texto}
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
                    setErroEmail({ email: emailEhValido });
                }}
                error={!erroEmail.email.valido}
                helperText={erroEmail.email.texto}
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
                onBlur={() => {
                    const telefoneEhValido = validarTelefone(telefone);
                    setErroTelefone({ telefone: telefoneEhValido });
                }}
                error={!erroTelefone.telefone.valido}
                helperText={erroTelefone.telefone.texto}
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
                onBlur={() => {
                    const mensagemEhValido = validarMensagem(mensagem);
                    setErroMensagem({ mensagem: mensagemEhValido });
                }}
                error={!erroMensagem.mensagem.valido}
                helperText={erroMensagem.mensagem.texto}
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
