import React from "react";
import LazyLoad from "react-lazyload";
import './card.css';
import {Link} from "react-router-dom";

function Card ({category, course_id, fullname, image, status, dateForRender}){

    return(
        <div className="col-md-6 col-lg-4 col-sm-12">
            <Link to={`event/${course_id}`}>
                <div className={`event-card ${!status && `event-card-completed`} d-flex flex-column`}>
                        <LazyLoad height={200} offset={100} once>
                            <img className="event-card-image" src={ image } alt=""/>
                        </LazyLoad>
                    <div className="p-4 event-card-box ">
                        <div className="event-card-mini">
                            {category}
                        </div>
                        <div className="event-card-text">
                            {fullname}
                        </div>
                        <div className="event-card-mini">
                            организаторы
                        </div>
                    </div>
                        <div className="event-card-data">
                            { `${dateForRender}` }
                        </div>
                </div>
            </Link>
        </div>
    )
}

export default Card