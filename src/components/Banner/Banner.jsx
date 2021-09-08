import React, { Component } from "react";
import { Link } from "react-scroll";
import "./Banner.css";
import "../../App.css";

export default class Banner extends Component {
    render() {
        return (
            <section className="banner" id="banner">
                <h1 className="banner--titulo">Target Agrimensura</h1>
                <p className="banner--descricao">
                    Anos de experiência em Topografia para atender a sua
                    necessidade
                </p>
                <Link
                    to="contato"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    className="banner--botao botao"
                >
                    Entre em contato
                </Link>
                <Link
                    to="solucoes"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    className="banner--botao botao"
                >
                    Nossas soluções
                </Link>
            </section>
        );
    }
}
