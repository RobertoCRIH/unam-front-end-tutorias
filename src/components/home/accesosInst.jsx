import FileLink from "../general/fileLink";

import "../../assets/styles/steps.scss"

import file from "../../assets/files/acceso_inst.pdf";

function AccesosInst() {
    return(
        <>
            <div className="body__content__item">
            <div className="body__content__title">
                Accesos Institucionales
            </div>
            <div>
                <FileLink text={"Convocatoria Movilidad"} link={file}/>
            </div>

            <div className="body__content__title">
                Proceso de Postulación
            </div>

            <div className="stepContainer">
                <div className="steps">
                    <div className="steps__number">1</div>
                    <div className="steps__text">
                        Identificar la pestaña de movilidad en el portal de escolares
                    </div>
                </div>
                <div className="steps">
                    <div className="steps__number">2</div>
                    <div className="steps__text">
                        Descargar el proyecto de equivalencia de materias y subirlo al portal
                        <div className="steps__text__sub">
                            Debe ir firmado y sellado por Secretaría Académica de tu facultad.
                        </div>
                    </div>
                </div>

                <div className="steps">
                    <div className="steps__number">3</div>
                    <div className="steps__text">
                        Ingresar tus datos personales y da click en el botón "Imprimir" para 
                        generar un expediente.    
                        <div className="steps__text__sub">
                        Cumpliendo este paso apartas tu lugar para la universidad de tu elección.
                        </div>
                    </div>
                   
                </div>

                <div className="steps">
                    <div className="steps__number">4</div>
                    <div className="steps__text">
                        Integrar al expediente los demás requisitos y organizar los documentos para su 
                        digitalización.   
                        <div className="steps__text__sub">
                        Revisa las especificaciones para una carga exitosa.
                        </div>
                    </div>
                   
                </div>

                <div className="steps">
                    <div className="steps__number">5</div>
                    <div className="steps__text">
                        Subir el expediente completo al portal y esperar notificaciones.  
                        <div className="steps__text__sub">
                        Una vez subes tu expediente no habrá posibilidad de hacer ningún cambio.
                        </div>
                    </div>
                   
                </div>
            </div>
            </div>
        </>
    )
}

export default AccesosInst;