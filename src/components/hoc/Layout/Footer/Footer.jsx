import React from "react";

function Footer() {
    return(
        <footer className="page-footer">
            <div className="container footer-box">
                <div className="row">
                    <div className="col">
                        <h4 className="text-main-box">Центр электронного обучения <br/>
                            ИРНИТУ</h4>

                        <ul className="list-unstyled">
                            <li>
                                <a href="https://open.istu.edu/login/policy.php">пользовательское соглашение</a>
                            </li>
                            <li>
                                <a href="https://open.istu.edu/enrol/robokassa/pay_policy1.php">публичная оферта на указание платных образовательных услуг</a>
                            </li>
                            <li>
                                <a href="https://open.istu.edu/enrol/robokassa/pay_policy0.php">публичная оферта на оказание платных образовательных <br/> услуг по пользовательским соглашениям</a>
                            </li>
                            <li>
                                <a href="https://open.istu.edu/admin/tool/dataprivacy/summary.php">Сводка хранения данных</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;