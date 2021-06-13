import React from "react";
import {Modal} from "react-bootstrap";

function modal({show, handleClose}){
    return(
        <Modal show={show} onHide={handleClose}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Подача заявки на мероприятие</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={handleClose}
                        />
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group ">
                                <label className="form-text" htmlFor="exampleInputFIO">Введите ФИО <span
                                    className="form-text-mini">*</span> </label>
                                <input type="fio" className="form-control" id="exampleInputFIO" placeholder="Enter fio"/>
                            </div>
                            <div className="form-group">
                                <label className="form-text" htmlFor="exampleInputEmail">Введите email <span
                                    className="form-text-mini">*</span> </label>
                                <input type="email" className="form-control" id="exampleInputEmail" placeholder="Email"/>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" htmlFor="exampleCheck1">Я ДАЮ Согласие на
                                        обработку ПЕРСОНАЛЬНЫХ ДАННЫХ</label>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Подать заявку на участие</button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default modal;