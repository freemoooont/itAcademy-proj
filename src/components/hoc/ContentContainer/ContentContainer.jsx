import React from "react";
import './contentcontainer.css'
import Nav from '../../nav/nav'
import {useDispatch} from "react-redux";
import {findCards} from "../../../redux/action/filters"

function ContentContainer(props){
    const dispatch = useDispatch();
    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            dispatch(findCards(e.target.value))
        }
    }
    return(
        <section className="section-3">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Мероприятия</h1>
                    </div>
                </div>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <Nav
                                    onSelectHandle={props.onSelectHandler}
                                />
                            </ul>
                        </div>
                    </nav>
                    <div className="row billet">
                        <div className="col-md-6 col-sm-12 align-items-center  d-flex mb-4 ">
                            <h2>{props.eventAmount} мероприятий</h2>
                        </div>
                        <form className="col-md-6 col-sm-12">
                            <input
                                className="form-control me-2"
                                placeholder="Введите название..."
                                type="search"
                                onKeyPress={(e)=> {handleEnter(e)}}
                            />
                        </form>
                    </div>
                    <div className="row">
                        {props.children}
                    </div>
            </div>
        </section>
    )
}

export default ContentContainer;