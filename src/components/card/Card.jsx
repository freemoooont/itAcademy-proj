import React from "react";
import LazyLoad from "react-lazyload";
import './card.css';
import zaglushka from '../../assets/zaglushka.png'

const month = [
    "Января","Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Декабря"
]
function Card ({category, course_id, description, enddate, fullname, image, organizers, startdate, daysRemain, status}){
    //АДСКИЙ КОСТЫЛЬ!!!!!!!
    function dateRender() {
        if(status){
            if(enddate){
                if(startdate.getMonth() !== enddate.getMonth()){
                    return(`${startdate.getDate()} ${month[startdate.getMonth()]} - ${enddate.getDate()} ${month[enddate.getMonth()]} ${startdate.toLocaleDateString('default', { year: 'numeric' })}`)
            }else return(`${startdate.getDate()} - ${enddate.getDate()} ${month[startdate.getMonth()]} ${startdate.toLocaleDateString('default', { year: 'numeric' })}`)
            }else return(`${startdate.getDate()} ${month[startdate.getMonth()]} ${startdate.toLocaleDateString('default', { year: 'numeric' })}`)
        }else return('МЕРОПРИЯТИЕ ЗАВЕРШЕНО')
    }
    const date = dateRender()
    console.log(date)

    console.log(daysRemain)
    return(
        <div className="col-md-6 col-lg-4 col-sm-12">
            <div className={`event-card ${!status && `event-card-completed`} d-flex flex-column`}>
                    <LazyLoad height={200} offset={100} once>
                        <img style={{maxWidth: '100%'}} src={image ? image : zaglushka } alt=""/>
                    </LazyLoad>
                <div className="p-4">
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
                        { `${date}` }
                    </div>
            </div>
        </div>
    )
}

export default Card