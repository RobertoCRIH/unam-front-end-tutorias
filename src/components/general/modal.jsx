import "../../assets/styles/modal.scss"
import { IoIosCloseCircleOutline } from "react-icons/io"; //Este es el icono del botón de cerrar


function MyModal({visible,turnOff,title,bttn,acceptFunction,children}) {
    //Visible es donde se va a declarar si es visible el modal
    //turn off s el useState que va a apagar el modal
    if(visible){
        return(
            <div className="modal">
                        <div className="modal__container">
                            <div className="modal__header">
                                <div className="modal__header__text">{title}</div>
                                <button onClick={(e)=>turnOff(false)}> <IoIosCloseCircleOutline style={{color:"red",fontSize:"35px"}}/> </button>
                            </div>
                            <div className="modal__content">
                                {/* 
                                LA ETIQUETA CENTER ES PARA CENTRAR EL ELEMENTO
                                <div className="modal__content__center">Miguel Serrano </div>

                                EL TAG ES PARA QUE VAYA ENCIMA DE LAS PREGUNTAS
                                <div className="modal__content__tag">Escribe el nombre del alumno</div>

                                ESTE ES EL INPUT
                                <input type="text" placeholder="Adolfo Garrison" />

                                ESTOS SON LOS ASTERISCOS
                                <div className="modal__content__ass">*Asegurate de escribir bien el nombre</div> */}
                                {children}
                            </div>

                            <div className="modal__footer">
                                <button className="modal__footer__false" onClick={(e)=>turnOff(false)}>Cancelar</button>
                                <button className="modal__footer__true" onClick={(e)=>acceptFunction}> {bttn} </button>
                                
                            </div>
                        </div>
                    </div>
        )
    }
}

export default MyModal;