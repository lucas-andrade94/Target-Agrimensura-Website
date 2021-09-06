import React from 'react';
import "./Clientes.css"
import Fonseca from "../../assets/img/Clientes/FONSECA.png"
import GR from "../../assets/img/Clientes/GR.jpg"
import IconRealty from "../../assets/img/Clientes/ICON-REALTY.png"
import Mitre from "../../assets/img/Clientes/MITRE.png"
import TCRE from "../../assets/img/Clientes/TCRE.png"
import TR10 from "../../assets/img/Clientes/TR10.png"
import Vertice from "../../assets/img/Clientes/VERTICE.png"

const Clientes = () => {
    return (
        <section className="clientes">
            <h2 className="clientes--titulo">Principais Parceiros</h2>
            <div className="clientes--logos">
                <img className="clientes--imagens-logos" src={Fonseca} alt="Construtora Fonseca e Mercadante" />
                <img className="clientes--imagens-logos" src={GR} alt="GR Gestão de Engenharia" />
                <img className="clientes--imagens-logos" src={IconRealty} alt="Icon Realty" />
                <img className="clientes--imagens-logos" src={Mitre} alt="Mitre Realty" />
                <img className="clientes--imagens-logos" src={TCRE} alt="TCRE Engenharia" />
                <img className="clientes--imagens-logos" src={TR10} alt="TR10 Arquitetura" />
                <img className="clientes--imagens-logos"src={Vertice} alt="Vértice Arquitetura e Consultoria" />
            </div>
        </section>
    )
}

export default Clientes;