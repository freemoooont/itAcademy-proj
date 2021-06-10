import React from "react";
import LazyLoad from "react-lazyload";
import './card.css';

function Card ({category, course_id, description, enddate, fullname, image, organizers, startdate, daysRemain}){

    console.log(daysRemain)
    return(
        <div className="col-4">
            <div className="box d-flex flex-column">
                    <LazyLoad height={200} offset={100} once>
                        <img style={{maxWidth: '100%'}} src={image && `${image}`} alt=""/>
                    </LazyLoad>
                <div className="event-card-mini">
                    {category}
                </div>
                <div className="event-card-text">
                    {fullname}
                </div>
                <div className="event-card-mini">
                    организаторы
                </div>
                <div className="event-card-data">
                    {startdate.toLocaleDateString()}
                </div>
            </div>
        </div>
    )
}

export default Card