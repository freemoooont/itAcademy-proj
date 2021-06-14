import React from "react";
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
        <section ref={props.refToContent} className="section-3">
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
                        <div className="col-1"></div>
                        <form className="col-md-3 col-sm-12">
                            <input
                                className="form-control me-2"
                                placeholder="Введите название..."
                                type="search"
                                onKeyPress={(e)=> {handleEnter(e)}}
                            />
                        </form>
                        <form className="col-md-2 col-sm-12">
                            <select className="form-select me-2" name="" id="">
                                <option value="2021">2021</option>
                                <option value="MOOK">MOOK</option>
                                <option value="2020">2020</option>
                                <option value="учебные курсы">учебные курсы</option>
                            </select>
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