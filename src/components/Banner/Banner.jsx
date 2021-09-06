import React from "react";
import "./Banner.css";
import "../../App.css";

const Banner = () => {
    return (
        <section className="banner">
            <h1 className="banner--titulo">Target Agrimensura</h1>
            <p className="banner--descricao">
                Anos de experiência em Topografia para atender a sua necessidade
            </p>
            <a className="banner--botao botao">Entre em contato</a>
            <a className="banner--botao botao">Nossas soluções</a>
        </section>
    );
};

export default Banner;
