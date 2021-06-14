import React from "react";
import {Link} from "react-router-dom";

function Header(){
    return(
        <header className="container">
            <div className="row mt-5 ">
                <div className="col main-info">
                    <Link to="/">
                        Центр <br/>
                        электронного <br/>
                        обучения <br/>
                        Ирниту
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;
