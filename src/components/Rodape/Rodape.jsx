import React, { Component } from "react";
import "./Rodape.css";

export default class Rodape extends Component {
    render() {
        return (
            <footer className="rodape">
                <p>
                    Copyright &copy; 2021{" "}
                    <a href="/" className="rodape--link">
                        Target Agrimensura
                    </a>
                    . Todos os direitos reservados.
                </p>
            </footer>
        );
    }
}
