import React from "react";


function Card ({category, course_id, description, enddate, fullname, image, organizers, startdate, daysRemain}){

    console.log(daysRemain)
    return(
        <div style={{width: "245px", height: "250px", border: "1px solid #000000" }}>
            {fullname}
        </div>
    )
}

export default Card