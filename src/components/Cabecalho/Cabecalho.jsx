import React, { Component } from "react";
import "./Cabecalho.css";
import { Link } from "react-scroll";
import Logo from "../../assets/img/LOGO.png";
import EmailIcon from "@material-ui/icons/Email";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import PhoneIcon from "@material-ui/icons/Phone";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

export default class Cabecalho extends Component {
    render() {
        return (
            <header className="cabecalho--container">
                <a href="/">
                    <img
                        className="cabecalho--logo"
                        src={Logo}
                        alt="Logo Target Agrimensura"
                    />
                </a>
                <nav className="cabecalho--menu">
                    <div className="cabecalho--contatos">
                        <a
                            className="cabecalho--email"
                            href="mailto:contato@targetagrimensura.com.br"
                        >
                            <EmailIcon
                                style={{ color: "grey" }}
                                className="cabecalho--icones"
                            />{" "}
                            contato@targetagrimensura.com.br
                        </a>
                        <a
                            className="cabecalho--whatsapp"
                            href="https://wa.me/5511995316146"
                        >
                            <WhatsAppIcon
                                style={{ color: "#25D366" }}
                                className="cabecalho--icones"
                            />{" "}
                            (11) 99531-6146
                        </a>
                        <a
                            className="cabecalho--telefone"
                            href="tel:+55114979-6921"
                        >
                            <PhoneIcon
                                style={{ color: "grey" }}
                                className="cabecalho--icones"
                            />{" "}
                            (11) 4979-6921
                        </a>
                        <div className="cabecalho--redesSociais">
                            <a
                                className="cabecalho--icones"
                                style={{ color: "#0072b1" }}
                                href="https://www.linkedin.com/company/target-agrimensura/"
                            >
                                <LinkedInIcon />
                            </a>
                            <a
                                className="cabecalho--icones"
                                style={{ color: "#c13584" }}
                                href="https://www.instagram.com/targetagrimensura/"
                            >
                                <InstagramIcon />
                            </a>
                            <a
                                className="cabecalho--icones"
                                style={{ color: "#c4302b" }}
                                href="https://www.youtube.com/channel/UCEcIei1CGnIAbpsEtuGWgLA"
                            >
                                <YouTubeIcon />
                            </a>
                        </div>
                    </div>
                    <div className="cabecalho--navegacao">
                        <Link
                            to="banner"
                            spy={true}
                            smooth={true}
                            className="cabecalho--itens"
                        >
                            Início
                        </Link>
                        <Link
                            to="quemSomos"
                            spy={true}
                            smooth={true}
                            offset={-90}
                            className="cabecalho--itens"
                        >
                            Quem Somos
                        </Link>
                        <Link
                            to="clientes"
                            spy={true}
                            smooth={true}
                            offset={-90}
                            className="cabecalho--itens"
                        >
                            Clientes
                        </Link>
                        <Link
                            to="solucoes"
                            spy={true}
                            smooth={true}
                            offset={-90}
                            className="cabecalho--itens"
                        >
                            Soluções
                        </Link>
                        <Link
                            to="contato"
                            spy={true}
                            smooth={true}
                            offset={-150}
                            className="cabecalho--itens"
                        >
                            Contato
                        </Link>
                    </div>
                </nav>
            </header>
        );
    }
}
