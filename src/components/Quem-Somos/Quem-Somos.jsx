import React from "react";
import "./Quem-Somos.css";

const QuemSomos = () => {
    return (
        <section className="quemSomos">
            <h2 className="quemSomos--titulo">Quem Somos</h2>
            <div className="quemSomos--informacao">
                <div className="quemSomos--descricao">
                    <p>
                        Nós somos a Target Agrimensura e temos uma nova proposta
                        de trazer uma maior transparência e qualidade para os
                        trabalhos das áreas de Agrimensura, Cartografia e
                        Topografia, evitando diversos problemas conhecidos pela
                        nossa experiência.
                    </p>
                    <p>
                        A nossa missão é e sempre será a de ser uma referência
                        dentro da área, trabalhando com qualidade e auxiliando
                        os clientes e parceiros que necessitam de nossos
                        serviços.
                    </p>
                    <p>
                        Esperamos que possamos bater um papo ou até mesmo tomar
                        um café. Será um prazer lhe apresentarmos melhor nossa
                        empresa, soluções e qualidade de trabalhos anteriormente
                        executados.
                    </p>
                    <p>
                        Com certeza iremos lhe apresentar um preço justo de
                        acordo com suas necessidades.
                    </p>
                </div>
                <iframe
                    className="quemSomos--video"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/3jTLqJQSobc"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </section>
    );
};

export default QuemSomos;
