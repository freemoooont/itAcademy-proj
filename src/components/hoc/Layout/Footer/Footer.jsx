import React from "react";
import './footer.css'

function Footer() {
    return(
        <footer className="page-footer">
            <div className="container footer-box">
                <div className="row">
                    <div className="col">
                        <h4 className="text-main-box">Центр электронного обучения
                            ИРНИТУ </h4>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#!">пользовательское соглашение</a>
                            </li>
                            <li>
                                <a href="#!">публичная оферта на указание платных образовательных услуг</a>
                            </li>
                            <li>
                                <a href="#!">публичная оферта на оказание платных образовательных услуг по пользовательским соглашениям</a>
                            </li>
                            <li>
                                <a href="#!">Сводка хранения данных</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;