import React from "react";
import "./Rodape.css";

const Rodape = () => {
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
};

export default Rodape;
