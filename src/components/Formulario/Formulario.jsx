import React, { useState } from 'react';
import "./Formulario.css"
import { Switch, Button, TextField, FormControlLabel } from "@material-ui/core";
import { SettingsRemoteOutlined } from '@material-ui/icons';

const Formulario = () => {
    const [nome, setNome] = useState("");

    return (
        <form>
            <TextField value={nome}
            onChange={(event) => {
                SettingsRemoteOutlined(event.target.value);
            }}
            id="nome"
            name="nome"
            label="Nome"
            variant="outlined"
            margin="normal"
            fullWidth />
        </form>
    )
}

export default Formulario;