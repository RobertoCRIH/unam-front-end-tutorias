import testFile from "../../assets/files/plan estudios.pdf";

function Plan() {
    return(
        <div className="body__content__item">
            <div className="body__content__title">
                Síntesis del Plan de Estudio
            </div>

            <div className="body__content__text">
                La Maestría Institucional en Ciencias Agropecuarias y Forestales de la Universidad Juárez del 
                Estado de Durango tiene como misión formar profesionales capaces de desarrollar investigación 
                original e innovadora, diseñar tecnologías aplicables en los sectores público y privado, y 
                contribuir al desarrollo sustentable de la región y del país.
            </div>

            <div className="body__content__text">
                En términos de visión, el programa busca fortalecer la oferta de posgrado de calidad, 
                reconocida por el Programa Nacional de Posgrados de Calidad del CONACyT. Con una planta 
                académica experimentada y una infraestructura adecuada, aspira a elevar la calidad de la 
                investigación en las áreas agropecuarias y forestales, llevando tecnología avanzada al sector 
                productivo de la región y el país.
            </div>

            <div className="body__content__text">
                Las políticas del programa, en línea con el Plan de Desarrollo Institucional, se centran en 
                diez Ejes Estratégicos, abordando aspectos cruciales como educación inclusiva, investigación 
                integral, vinculación social, gobernabilidad, evaluación para la acreditación, gestión 
                institucional de calidad, transparencia, difusión cultural, derechos humanos y género, e 
                internacionalización de la educación.
            </div>

            <div className="body__content__text">
                Las metas incluyen mantener la maestría en el Padrón Nacional de Posgrados de Calidad del 
                CONACyT, aumentar la financiación externa para proyectos de investigación, consolidar las 
                Líneas de Generación y Aplicación del Conocimiento (LGAC), incrementar la tasa de titulación 
                de estudiantes y tener miembros del Sistema Nacional de Investigadores.
            </div>

            <div className="body__content__text">
                Para alcanzar estos objetivos, se proponen estrategias como ofrecer el programa de maestría 
                en modalidad flexible escolarizada presencial, respaldada por un sistema de tutoría desde el 
                inicio, y diseñar una trayectoria curricular personalizada con el comité tutoral. La 
                interdisciplinariedad se promueve en el primer semestre, seguido por la construcción 
                individual de currículas a partir del segundo semestre. Además, se busca vincular los 
                proyectos de investigación de los estudiantes con las líneas oficiales de la maestría y los 
                cuerpos académicos participantes.
            </div>

            <div className="body__content__text">
                {/* Este documento hay que cambiarlo luego para que lo jale del back end */}
                Si deseas saber mas del tema, te invitamos a <a href={testFile}>descargar nuestro plan de estudios.</a>
            </div>
        </div>
    )
}

export default Plan;