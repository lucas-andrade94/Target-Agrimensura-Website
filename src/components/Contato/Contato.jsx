import React, { Component } from "react";
import "./Contato.css";
import EmailIcon from "@material-ui/icons/Email";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import PhoneIcon from "@material-ui/icons/Phone";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import RoomIcon from "@material-ui/icons/Room";

export default class Contato extends Component {
    render() {
        return (
            <section className="contato" id="contato">
                <h2 className="contato--titulo">Contato e Localização</h2>
                <ul className="contato--modos">
                    <li>
                        <a
                            className="contato--email"
                            href="mailto:contato@targetagrimensura.com.br"
                        >
                            <EmailIcon
                                style={{ color: "black", fontSize: "2rem" }}
                                className="contato--icones"
                            />{" "}
                            contato@targetagrimensura.com.br
                        </a>
                    </li>
                    <li>
                        <a
                            className="contato--whatsapp"
                            href="https://wa.me/5511995316146"
                        >
                            <WhatsAppIcon
                                style={{ color: "#1ea952", fontSize: "2rem" }}
                                className="contato--icones"
                            />{" "}
                            (11) 99531-6146
                        </a>
                    </li>
                    <li>
                        <a
                            className="contato--telefone"
                            href="tel:+55114979-6921"
                        >
                            <PhoneIcon
                                style={{ color: "black", fontSize: "2rem" }}
                                className="contato--icones"
                            />{" "}
                            (11) 4979-6921
                        </a>
                    </li>
                    <li>
                        <a
                            className="contato--local"
                            href="https://g.page/target-agrimensura?share"
                        >
                            <RoomIcon
                                style={{ color: "#ea4335", fontSize: "2rem" }}
                                className="contato--icones"
                            />
                            <p>
                                Rua Almirante Protógenes, 289 <br />
                                CJ 122 - Jardim – Santo André <br />
                                CEP: 09090-760
                            </p>
                        </a>
                    </li>
                </ul>
                <ul className="contato--redesSociais">
                    <li
                        className="contato--icones-sociais"
                        href="https://www.linkedin.com/company/target-agrimensura/"
                    >
                        <LinkedInIcon
                            style={{ color: "#0072b1", fontSize: "4rem" }}
                        />
                        LinkedIn
                    </li>
                    <li
                        className="contato--icones-sociais"
                        href="https://www.instagram.com/targetagrimensura/"
                    >
                        <InstagramIcon
                            style={{ color: "#c13584", fontSize: "4rem" }}
                        />
                        Instagram
                    </li>
                    <li
                        className="contato--icones-sociais"
                        href="https://www.youtube.com/channel/UCEcIei1CGnIAbpsEtuGWgLA"
                    >
                        <YouTubeIcon
                            style={{ color: "#c4302b", fontSize: "4rem" }}
                        />
                        YouTube
                    </li>
                </ul>
                <iframe
                    className="contato--localizacao"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14618.79309260869!2d-46.5353583!3d-23.6509743!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa30f791b88f86e33!2sTARGET%20AGRIMENSURA%20E%20CARTOGRAFIA!5e0!3m2!1sen!2sca!4v1630701880011!5m2!1sen!2sca"
                    width="50%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </section>
        );
    }
}
