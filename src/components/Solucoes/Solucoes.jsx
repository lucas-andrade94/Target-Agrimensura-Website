import React, { Component } from "react";
import "./Solucoes.css";
import ImgLevTop from "../../assets/img/Solucoes/picto-topografico_classico.svg";
import ImgDrone from "../../assets/img/Solucoes/picto-vant.svg";
import ImgAsBuilt from "../../assets/img/Solucoes/asbuilt.svg";
import ImgRegImv from "../../assets/img/Solucoes/picto-avaliacao_imoveis.svg";
import ImgVol from "../../assets/img/Solucoes/CALCULO-DE-VOLUME.svg";
import ImgDem from "../../assets/img/Solucoes/picto-cadastral_geometrico.svg";

export default class Solucoes extends Component {
    render() {
        return (
            <section className="solucoes" id="solucoes">
                <h2 className="solucoes--titulo">Soluções</h2>
                <ul className="solucoes--tipos">
                    <li className="solucoes--tipos__geral">
                        <img
                            src={ImgLevTop}
                            height="89px"
                            alt="Levantamento Topografico"
                        />
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
                    <li className="solucoes--tipos__geral">
                        <img
                            src={ImgDrone}
                            height="89px"
                            alt="Aerofotogrametria com Drones"
                        />
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
                    <li className="solucoes--tipos__geral ">
                        <img src={ImgAsBuilt} height="89px" alt="As-Built" />
                        <h3 className="solucoes--tipos__titulo">
                            As Built - Cadastral Arquitetônico
                        </h3>
                        <p className="solucoes--tipos__texto">
                            Levantamento da situação atual de edificações e
                            elaboração de produtos, planta baixa, cortes e
                            fachadas.
                        </p>
                    </li>
                    <li
                        className="solucoes--tipos__geral"
                        alt="Regularização de Imóveis"
                    >
                        <img src={ImgRegImv} height="89px" alt="Regularização de Imóveis"/>
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
                    <li className="solucoes--tipos__geral ">
                        <img src={ImgVol} height="89px" alt="Volumetria" />
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
                    <li className="solucoes--tipos__geral ">
                        <img src={ImgDem} height="89px" alt="Demarcação" />
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
