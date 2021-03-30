import React from 'react';
import './modal.styles.scss';
import CloseButton from '../closeButton/closeButton.component';

const Modal = ({ show, toggle }) => {

    const renderHelper = () => {
        if (show) {
            return (
                <div className='modalBackground'>
                    <div className="innerContainer">
                        <CloseButton onClick={toggle} />

                        <h3 className="title">Comentários da ata</h3>
                        <div className="comments">
                            <div className="comment">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quo vero molestiae deleniti in beatae modi magnam animi eaque quod blanditiis nesciunt magni recusandae eos doloremque minima natus, ullam debitis.
                                </p>
                                <span className="commentDate">Em: 23/03/2021</span>
                            </div>

                            <div className="comment">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quo vero molestiae deleniti in beatae modi magnam animi eaque quod blanditiis nesciunt magni recusandae eos doloremque minima natus, ullam debitis.
                                </p>
                                <span className="commentDate">Em: 23/03/2021</span>
                            </div>

                            <div className="comment">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quo vero molestiae deleniti in beatae modi magnam animi eaque quod blanditiis nesciunt magni recusandae eos doloremque minima natus, ullam debitis.
                                </p>
                                <span className="commentDate">Em: 23/03/2021</span>
                            </div>

                            <div className="comment">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quo vero molestiae deleniti in beatae modi magnam animi eaque quod blanditiis nesciunt magni recusandae eos doloremque minima natus, ullam debitis.
                                </p>
                                <span className="commentDate">Em: 23/03/2021</span>
                            </div>

                            <div className="comment">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quo vero molestiae deleniti in beatae modi magnam animi eaque quod blanditiis nesciunt magni recusandae eos doloremque minima natus, ullam debitis.
                                </p>
                                <span className="commentDate">Em: 23/03/2021</span>
                            </div>

                            <div className="comment">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quo vero molestiae deleniti in beatae modi magnam animi eaque quod blanditiis nesciunt magni recusandae eos doloremque minima natus, ullam debitis.
                                </p>
                                <span className="commentDate">Em: 23/03/2021</span>
                            </div>
                        </div>

                        <div className="newComment">
                            <textarea name="" id="" cols="30" rows="10" placeholder="Digite seu comentári"></textarea>
                            <button className="btn btn-primary salvarComentario">Salvar comentário</button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }

    return renderHelper();
}
export default Modal;