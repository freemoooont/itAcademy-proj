import React, {Fragment} from "react";
import people from "../../assets/people.svg";
import {InfoEventContentLoader, EventContentLoader} from "./LoadingEvent";
import {useSelector} from "react-redux";

import Modal from "../../components/ui/modal/modal"
function Event({stateHandler}){
    React.useEffect(()=>window.scrollTo(0,0),[])

    //костыль, каких еще свет не видел
    const handler = stateHandler()
    let state;
    let isLoaded = useSelector(({event})=>event.isLoaded);
    state = useSelector(({event})=>event.item);
    if (handler[0]){
        state = handler[1];
        isLoaded = true;
    }

    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return(
            <>
                {isLoaded ?
                <>
                    <section className="section-1-event">
                        <div className="container">
                            <div className="row card-event">
                                <div className="col-lg-6 col-12">
                                    <div><img style={{width: '100%', objectFit: 'cover', height: '351px'}} src={state[0].image} alt=""/>
                                    </div>
                                    <div className="text-under-image text-bold">
                                        { state[0].status && `Дата проведения: ${state[0].dateForRender}` }
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="event-name text-bold">
                                        {state[0].fullname}
                                    </div>
                                    {
                                        state[0].status ?
                                        <>
                                            <div className="event-other">
                                                <div className="text-bold">Участвуют:
                                                    <span className="event-other-text-mini">>
                                                            0
                                                        </span>
                                                    <img src={people} alt=""/>
                                                </div>
                                                <div className="text-bold">До
                                                    начала:
                                                    <span className="event-other-text-mini">
                                                    {`${state[0].daysRemain} ${state[0].daysRemain < 5 ? `дня` : `дней`}`}
                                                    </span>
                                                </div>
                                            </div>
                                            <button className={state[0].status ? `btn-other` : 'btn-other btn-secondary disabled'} onClick={handleShow} >Подать заявку на участие</button>
                                        </>
                                            : <div className="text-bold">{state[0].dateForRender}</div>
                                    }
                                    <Modal show={show} handleClose={handleClose}/>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-2-event">
                        <div className="container">
                            <div className="row">
                                <div className="main-about-event">О мероприятии</div>
                                <div className="about-event" dangerouslySetInnerHTML={{__html: state[0].description}}>

                                </div>
                                <div className="text-normal organizers">Организаторы
                                </div>
                                <div style={{marginBottom: "53.5px"}} className="text-normal">
                                    {state[0].organizers.map((obj,idx)=> <Fragment key={idx}> {obj} <br key={idx}/></Fragment>)}
                                </div>
                            </div>
                        </div>
                    </section>
                </>
                    : <>
                        <section className="section-1-event">
                            <div className="container">
                                <EventContentLoader/>
                            </div>
                        </section>
                        <section className="section-1-event">
                            <div className="container">
                                <InfoEventContentLoader/>
                            </div>
                        </section>
                        </>
                }
            </>
    )
}

export default Event;