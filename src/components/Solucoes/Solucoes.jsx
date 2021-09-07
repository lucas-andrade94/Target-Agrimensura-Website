import React, { Component } from "react";
import "./Solucoes.css";

export default class Solucoes extends Component {
    render() {
        return (
            <section className="solucoes" id="solucoes">
                <h2 className="solucoes--titulo">Soluções</h2>
                <ul className="solucoes--tipos">
                    <li className="solucoes--tipos__geral solucoes--tipos__lev-top-img">
                        <h3 className="solucoes--tipos__titulo">
                            Levantamento Topografico
                        </h3>
                        <p className="solucoes--tipos__texto">
                            Levantamentos Planimétricos, Perimétricos e
                            Planialtimétricos, atendendo diversas finalidades,
                            desde regularizações cartoriais e judiciais à
                            projetos de infraestrutura, engenharia e
                            arquitetura.
                        </p>
                    </li>
                    <li className="solucoes--tipos__geral solucoes--tipos__drones-img">
                        <h3 className="solucoes--tipos__titulo">
                            Aerofotogrametria com drones
                        </h3>
                        <p className="solucoes--tipos__texto">
                            Execução de Mapeamento aéreo que possibilita
                            mensurações precisas através dos produtos gerados,
                            tais como, MDT, MDS, Ortomosaico, Nuvem de Pontos,
                            etc.
                        </p>
                    </li>
                    <li className="solucoes--tipos__geral solucoes--tipos__asbuilt-img">
                        <h3 className="solucoes--tipos__titulo">
                            As Built - Cadastral Arquitetônico
                        </h3>
                        <p className="solucoes--tipos__texto">
                            Levantamento da situação atual de edificações e
                            elaboração de produtos, planta baixa, cortes e
                            fachadas.
                        </p>
                    </li>
                    <li className="solucoes--tipos__geral solucoes--tipos__regularizacao-img">
                        <h3 className="solucoes--tipos__titulo">
                            Regularização de Imóveis
                        </h3>
                        <p className="solucoes--tipos__texto">
                            Montagem de peças técnicas para atendimento de
                            processos judiciais e administrativos, Retificação
                            de Registro, Usucapião, Unificação/Desdobro de
                            lotes, dentre outros.
                        </p>
                    </li>
                    <li className="solucoes--tipos__geral solucoes--tipos__volumetria-img">
                        <h3 className="solucoes--tipos__titulo">
                            Cálculo de Volumetria
                        </h3>
                        <p className="solucoes--tipos__texto">
                            Execução conjunta de trabalhos em campo e
                            escritório, possibilitando a geração de superfícies
                            e comparação entre elas, sendo possível calcular o
                            volume do solo ou material de interesse.
                        </p>
                    </li>
                    <li className="solucoes--tipos__geral solucoes--tipos__demarcacao-img">
                        <h3 className="solucoes--tipos__titulo">Demarcação</h3>
                        <p className="solucoes--tipos__texto">
                            Demarcações de pontos de interesse, tais como,
                            divisas de imóveis, sistema viário, sondagem, etc.
                        </p>
                    </li>
                </ul>
            </section>
        );
    }
}
