import React from "react";
import './card.css'

function Card ({category, course_id, description, enddate, fullname, image, organizers, startdate, daysRemain}){

    console.log(daysRemain)
    return(
        // <div style={{width: "245px", height: "250px", border: "1px solid #000000" }}>
        //     {fullname}
        // </div>
        <div className="col-4">
            <div className="box d-flex flex-column">
                <div><img style={{maxWidth: '100%'}} src={image && `${image}`} alt=""/></div>
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