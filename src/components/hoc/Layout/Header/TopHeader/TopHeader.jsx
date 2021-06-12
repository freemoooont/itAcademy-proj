import React from "react";
import './topheader.css';
import leftMan from '../../../../../assets/svgHeader/left_man.svg'
function TopHeader(props){
    console.log(props.scrollToContent)
    return(
        <section className="section-1">
            <div className="container">
                <div className="row mt-5">
                    <div className="col main-info">
                        Центр <br/>
                        электронного <br/>
                        обучения <br/>
                        Ирниту
                    </div>
                </div>
                <div className="row welcome-information">
                    <div className="col text-center text-lg-start">
                        <h6>При поддержке ирниту</h6>
                        <h1>
                            Принимай <br/>
                            участие в <br/>
                            конкурсах и <br/>
                            олимпиадах
                        </h1>
                        <button
                            onClick={props.scrollToContent}
                            className="btn-other">перейти к мероприятиям</button>
                    </div>
                    <div className="col d-none d-lg-block">
                        <img src={leftMan} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopHeader;