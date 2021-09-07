function validarNome(nome) {
    if (nome.length === 0) {
        return {
            valido: false,
            texto: "O campo nome não pode ser vazio",
        };
    } else {
        return { valido: true, texto: "" };
    }
}

function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email)) {
        return {
            valido: false,
            texto: "Insira um e-mail válido",
        };
    } else {
        return {
            valido: true,
            texto: "",
        };
    }
}

function validarTelefone(telefone) {
    if (telefone.length < 10) {
        return {
            valido: false,
            texto: "Insira o telefone com DDD",
        };
    } else {
        return {
            valido: true,
            texto: "",
        };
    }
}

function validarMensagem(mensagem) {
    if (mensagem.length === 0) {
        return {
            valido: false,
            texto: "O campo mensagem não pode ser vazio",
        };
    } else {
        return { valido: true, texto: "" };
    }
}

export { validarNome, validarEmail, validarTelefone, validarMensagem };
