import React, { Component } from "react";
import "./Clientes.css";
import Fonseca from "../../assets/img/Clientes/FONSECA.webp";
import GR from "../../assets/img/Clientes/GR.webp";
import IconRealty from "../../assets/img/Clientes/ICON-REALTY.webp";
import Mitre from "../../assets/img/Clientes/MITRE.webp";
import TCRE from "../../assets/img/Clientes/TCRE.webp";
import TR10 from "../../assets/img/Clientes/TR10.webp";
import Vertice from "../../assets/img/Clientes/VERTICE.webp";

export default class Clientes extends Component {
    render() {
        return (
            <section className="clientes" id="clientes">
                <h2 className="clientes--titulo">Principais Parceiros</h2>
                <div className="clientes--logos">
                    <img
                        className="clientes--imagens-logos"
                        src={Fonseca}
                        alt="Construtora Fonseca e Mercadante"
                    />
                    <img
                        className="clientes--imagens-logos"
                        src={GR}
                        alt="GR Gestão de Engenharia"
                    />
                    <img
                        className="clientes--imagens-logos"
                        src={IconRealty}
                        alt="Icon Realty"
                    />
                    <img
                        className="clientes--imagens-logos"
                        src={Mitre}
                        alt="Mitre Realty"
                    />
                    <img
                        className="clientes--imagens-logos"
                        src={TCRE}
                        alt="TCRE Engenharia"
                    />
                    <img
                        className="clientes--imagens-logos"
                        src={TR10}
                        alt="TR10 Arquitetura"
                    />
                    <img
                        className="clientes--imagens-logos"
                        src={Vertice}
                        alt="Vértice Arquitetura e Consultoria"
                    />
                </div>
            </section>
        );
    }
}
