import React from "react";
import './contentcontainer.css'
import Nav from '../../nav/nav'

function ContentContainer(props){
    return(
        <section className="section-3">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Мероприятия</h1>
                    </div>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <Nav />
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="row billet">
                        <div className="col">{props.eventAmount} мероприятий</div>
                        <form className="d-flex col">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                        </form>
                    </div>
                    <div className="row">
                        {props.children}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContentContainer;