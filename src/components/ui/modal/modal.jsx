import React from "react";
import {Modal} from "react-bootstrap";
import close from '../../../assets/close.svg';

function modal({show, handleClose}){
    return(
        <Modal show={show} onHide={handleClose}>
                    <div className="modal-header">
                        <h5 className="modal-title">Подача заявки на мероприятие</h5>
                        <img
                            className="btn-close"
                            data-bs-dismiss="modal"
                            src={close} alt=""
                            onClick={handleClose}
                        />
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label className="form-text FIO" htmlFor="exampleInputFIO">Введите ФИО <span
                                    className="form-text-mini">*</span> </label>
                                <input type="fio" className="form-control form-group-radius" id="exampleInputFIO"
                                       placeholder="Фамилия Имя Отчество"/>
                            </div>
                            <div className="form-group">
                                <label className="form-text Email" htmlFor="exampleInputEmail">Введите email <span
                                    className="form-text-mini">*</span> </label>
                                <input type="email" className="form-control form-group-radius" id="exampleInputEmail"
                                       placeholder="example@example.example"/>
                            </div>
                            <div className="form-check d-flex align-items-center">
                                <input type="checkbox" className="form-check-input check-input" id="exampleCheck1"/>
                                    <label className="form-check-label check-label-style Check" htmlFor="exampleCheck1">Я
                                        даю согласие на обработку персональных данных</label>
                            </div>
                            <button type="button" className="btn btn-primary">Подать заявку на участие</button>
                        </form>
                    </div>
        </Modal>
    )
}

export default modal;