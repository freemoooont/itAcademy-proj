import React from "react";
import people from "../../assets/people.svg";
import "./event.css";
import {useSelector} from "react-redux";

function Event({stateHandler}){
    React.useEffect(()=>window.scrollTo(0,0),[])
    const handler = stateHandler()
    let state;
    let isLoaded = useSelector(({event})=>event.isLoaded);
    state = useSelector(({event})=>event.item);

    if (handler[0]){
        state = handler[1];
        isLoaded = true;
    }

    return(

            <>
                {isLoaded ?
                <>

                    <section className="section-1-event">
                        <div className="container">
                            <div className="row card-event">
                                <div className="col-md-6 col-sm-12">
                                    <div><img style={{width: '540px', height: '351px'}} src={state[0].image} alt=""/>
                                    </div>
                                    <div className="text-under-image text-bold">
                                        Дата проведения: НУ ТИПА
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="event-name text-bold">
                                        {state[0].fullName}
                                    </div>
                                    <div className="event-other">
                                        <div className="text-bold">Участвуют: <span>kek</span> <img src={people}
                                                                                                    alt=""/></div>
                                        <div className="text-bold">До
                                            начала: <span>{`${state[0].daysRemain} ${state[0].daysRemain < 5 ? `дня` : `дней`}`}</span>
                                        </div>
                                    </div>

                                    <button className="btn-other">Подать заявку на участие</button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-2-event">
                        <div className="container">
                            <div className="row">
                                <div className="main-about-event">О мероприятии</div>
                                <div className="about-event">
                                    {state[0].description}
                                </div>
                                <div style={{marginTop: "53.5px", marginBottom: "30px"}}
                                     className="text-normal">Организаторы
                                </div>
                                <div style={{marginBottom: "53.5px"}} className="text-normal">
                                    {state[0].organizers}
                                </div>
                            </div>
                        </div>
                    </section>
                </>
                : null}
            </>
    )
}

export default Event;