import React from "react";
import LazyLoad from "react-lazyload";
import peopleIcon from "../../assets/people-icon.svg";
import {Link} from "react-router-dom";

function Card ({category, course_id, fullname, image, status, dateForRender, organizers}){

    return(
        <div className="col-md-6 col-lg-4 col-sm-12">
            <Link to={`event/${course_id}`}>
                <div className={`event-card ${!status && `event-card-completed`} d-flex flex-column`}>
                        <LazyLoad height={200} offset={100} once>
                            <img className="event-card-image" src={ image } alt=""/>
                        </LazyLoad>
                    <div className="event-card-box">
                        <div className="event-card-year">
                            <span className="badge bg-primary" style={{fontSize: '0.8rem'}}>
                                {category}
                            </span>
                        </div>
                        <div className="event-card-text">
                            {fullname}
                        </div>
                        <div className="event-card-mini-main"><img src={peopleIcon} alt=""/> организаторы
                        </div>
                        <div className="event-card-mini position-relative">
                            <div className="position-absolute">
                                {organizers.map((obj,idx)=> <div key={idx} >{obj} <br/> </div>)}
                            </div>
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