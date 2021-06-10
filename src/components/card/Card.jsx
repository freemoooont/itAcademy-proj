import React from "react";
import LazyLoad from "react-lazyload";
import './card.css';
import zaglushka from '../../assets/zaglushka.png'

const month = [
    "Января","Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Декабря"
]
function Card ({category, course_id, description, enddate, fullname, image, organizers, startdate, daysRemain, status}){

    console.log(daysRemain)
    return(
        <div className="col-4">
            <div className="box d-flex flex-column">
                    <LazyLoad height={200} offset={100} once>
                        <img style={{maxWidth: '100%'}} src={image ? image : zaglushka } alt=""/>
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
                    {status ?
                        `${startdate.getDate()} ${enddate ? `- ${enddate.getDate()}`:``} ${month[startdate.getMonth()]} ${startdate.toLocaleDateString('default', { year: 'numeric' })}`
                        : `МЕРОПРИЯТИЕ ЗАВЕРШЕНО`}
                </div>
            </div>
        </div>
    )
}

export default Card