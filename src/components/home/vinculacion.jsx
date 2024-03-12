import { useState } from "react";
import VinculacionContent from "./vinculacionContent";

function Vinculacion() {
    //Esta es la lista de las referencias de la UNAM
    const proyectos1 = [
        "Mapeo de la diversidad genética de Picea chihuahuana Martínez. como especie seleccionada del proyecto international MAPFORGEN (SEP-CONACYT, CB 2010), como responsable (841,000 pesos).",
        "Field trials of Douglas fir (Pseudotsuga menziesii) in Bavaria with provenances from warmer und dryer regions for provenance recommendations under climate change, como responsable (Estado de Bavaria, Alemania) (90,000 pesos).",
        "Characterize cavitation resistance of tree species within a wide range of conifer taxa using the Cavitron technique in Bordeaux, Francia.",
        "Atlas de MAPFORGEN: http://mapforgen.tugalabs.com/",
        "Relación entre las estructuras genéticas de algunos especies de árbol y las características del suelo en la Sierra Madre Occidental, México.",
        "Validación y calibración del sistema biométrico utilizado en la elaboración de los programas de manejo forestal maderables UMAFOR 1010, Durango, México, como responsable (CONAFOR 2012) (1,200,000 pesos).",
        "Estudio para el establecimiento y manejo de unidades productora de germoplasma forestal en la UMAFOR 1010 La Flor, Durango (CONAFOR 2012) (630,000 pesos).",
        "Estudio para el establecimiento y manejo de unidades productora de germoplasma forestal en la UMAFOR 1010 La Flor, Durango (CONAFOR 2013) (1,880,000 pesos).",
        "Estudio para el establecimiento y manejo de unidades productora de germoplasma forestal en la UMAFOR 1005 Santiago, Durango (CONAFOR 2013) (1,700,000 pesos).",
        "Estudio especializado para el establecimiento y manejo de una unidad productora de germoplasma forestal en El Ejido San Diego de Tenzains, MPIO. de Santiago, Durango (CONAFOR 2013) (52,000 pesos).",
        "Blending ecology and evolution using emerging technologies to determine species distributions with a non-native pathogen in a changing climate, Source: NSF Macrosystems Biology, USA, 50,449,546.00 Pesos; como co-corresponsable, 2015-2020",
        "Research on cottonwoods and climate change, junto con Northern Arizona University, Biological Sciences Department, USA: ; Dr. Christian Anton Wehenkel como corresponsable, 2015-2020",
        "Degree of clone und gender proportion in natural Mexican Populus tremuloides populations, junto con el Instituto federal de la genética forestal de Alemania, 100,000 pesos, como responsable, 2014-2015",
        "Estudio para el establecimiento y manejo de unidades productoras de germoplasma forestal en la UMAFOR 1005, Durango; Dr. Christian Anton Wehenkel como corresponsable (CONAFOR 2014-2015) (500,000.00 pesos).",
        "Estudio para el establecimiento y manejo de unidades productoras de germoplasma forestal en la UMAFOR 1001, Durango; Dr. Christian Anton Wehenkel como corresponsable (CONAFOR 2014-2015) (500,000.00 pesos).",
        "Estudio para el establecimiento y manejo de unidades productoras de germoplasma forestal en la UMAFOR 1006, Durango; Dr. Christian Anton Wehenkel como corresponsable (CONAFOR 2014-2015) (500,000.00 pesos).",
        "Estudio para el establecimiento y manejo de unidades productoras de germoplasma forestal en la UMAFOR 0802, Chihuahua; Dr. Christian Anton Wehenkel como corresponsable (CONAFOR 2014-2015) (500,000.00 pesos).",
        "Estudio para el establecimiento y manejo de unidades productoras de germoplasma forestal en la UMAFOR 0803, Chihuahua; Dr. Christian Anton Wehenkel como corresponsable (CONAFOR 2014-2015) (500,000.00 pesos).",
        "Estudio para el establecimiento y manejo de unidades productoras de germoplasma forestal en la UMAFOR 0804, Chihuahua; Dr. Christian Anton Wehenkel como corresponsable (CONAFOR 2014-2015) (500,000.00 pesos).",
        "Estudio para el establecimiento y manejo de unidades productoras de germoplasma forestal en la UMAFOR 0807, Chihuahua; Dr. Christian Anton Wehenkel como corresponsable (CONAFOR 2014-2015) (500,000.00 pesos).",
        "Estudio para el establecimiento y manejo de unidades productoras de germoplasma forestal en la UMAFOR 0808, Chihuahua; Dr. Christian Anton Wehenkel como corresponsable (CONAFOR 2014-2015) (500,000.00 pesos).",
        "Estudio para el establecimiento y manejo de unidades productoras de germoplasma forestal en la UMAFOR 0809, Chihuahua; Dr. Christian Anton Wehenkel como corresponsable (CONAFOR 2014-2015) (500,000.00 pesos).",
        "Determinación del impacto de las actividades del aprovechamiento forestal y las poblaciones ornitológicas, migratorias y residentes, en la Unidad de Manejo Forestal Guanaceví” (UMAFOR 1001) del estado de Durango, México (CONAFOR 2015-2016) (500,000.00 pesos).",
        "Estudio para el establecimiento y manejo de unidades productoras de germoplasma forestal en la UMAFOR 1001, Durango; Dr. Christian Anton Wehenkel como corresponsable (CONAFOR 2016) (400,000.00 pesos)",
        "Instalación de un ensayo de aclareos en la UMAFOR 1008. Financia: Secretaría de Educación Pública (SEP – México). Investigador Principal: Carlos Antonio López Sánchez (Instituto de Silvicultura e Industria de la Madera, México).",
        "Sistema de predicción de peligro de incendios forestales para México”: Desarrollo y generación de instrumentos y sistemas para el fortalecimiento de la toma de decisiones y mejora de las tecnologías actuales en materia de manejo del fuego. Financia: Fondo sectorial CONACYT-CONAFOR (México). Investigador Principal por la UJED. José Javier Corral Rivas."
    ]

    const proyectosBovinos = [
        "Proyecto “Diseño de programas estratégicos de suplementación alimenticia para el ganado bovino en el estado de Durango” con clave DGO-2002-C01- 2522 apoyado por el Fondo Mixto CONACYT-GOBIERNO DEL ESTADO DE DURANGO.",
        "Proyecto “Desarrollo de estrategias de suplementación alimenticia de bovinos en libre pastoreo en la región central de Durango a través de indicadores endocrinos, metabólicos y nutricionales”, con la clave DGO-2007-C01-66559 apoyado por el Fondo Mixto CONACYT-GOBIERNO DEL ESTADO DE DURANGO.",
        "Proyecto “Evaluación de estrategias alimenticias para la manipulación de ácidos grasos en la grasa intramuscular de bovinos en engorda intensiva”, con la clave DGO-2010-C02-144093 apoyado por el Fondo Mixto CONACYTGOBIERNO DEL ESTADO DE DURANGO.",
        "Proyecto “Establecimiento de la mejor dieta con materias primas regionales para obtener la máxima calidad de carne de bovino en Durango” con la clave DGO-2010-C02-144081 apoyado por el Fondo Mixto CONACYT-GOBIERNO DEL ESTADO DE DURANGO.",
        "Proyecto “Evaluación de un sustrato gluconeogénico (LIPOFEED) en dietas de bovinos en corral de engorda en el estado de Durango” apoyado por la Empresa Premezclas Energéticas Pecuarias S.A. de C.V. (PREPEC).",
        "Proyecto “Evaluación del ensilado de maralfalfa en la alimentación de bovinos en confinamiento”, Programa para el Desarrollo Profesional Docente de tipo Superior (PRODEP). Número de oficio de liberación DSA/103.5/15/10855. Secretaria de Educación Pública."
    ];

    const proyectosVeterinaria = [
        "Monitoreo de la sobrevivencia invernal de aves de pastizal en el área prioritaria para la conservación de pastizales de Cuchillas de la Zarca, en el Desierto chihuahuense del norte de México. 2013-2014. Apoyado financieramente por Bird Conservancy of the Rockies, de Fort Collins, Co. E.U.A.",
        "Monitoreo de la sobrevivencia invernal de aves de pastizal en el área prioritaria para la conservación de pastizales de Cuchillas de la Zarca, en el Desierto chihuahuense del norte de México. 2014-2015. Apoyado financieramente por Bird Conservancy of the Rockies, de Fort Collins, Co. E.U.A.",
        "Monitoreo de la sobrevivencia invernal de aves de pastizal en el área prioritaria para la conservación de pastizales de Cuchillas de la Zarca, en el Desierto chihuahuense del norte de México. 2015-2016. Apoyado financieramente por Bird Conservancy of the Rockies, de Fort Collins, Co. E.U.A.",
        "Monitoreo de la sobrevivencia invernal de aves de pastizal en el área prioritaria para la conservación de pastizales de Cuchillas de la Zarca, en el Desierto chihuahuense del norte de México. 2016-2017. Apoyado financieramente por Bird Conservancy of the Rockies, de Fort Collins, Co. E.U.A.",
        "Monitoreo de la sobrevivencia invernal de aves de pastizal en el área prioritaria para la conservación de pastizales de Cuchillas de la Zarca, en el Desierto chihuahuense del norte de México. 2017-2018. Apoyado financieramente por Bird Conservancy of the Rockies, de Fort Collins, Co. E.U.A.",
        "Monitoreo de la sobrevivencia invernal de aves de pastizal en el área prioritaria para la conservación de pastizales de Cuchillas de la Zarca, en el Desierto chihuahuense del norte de México. 2018-2019. Apoyado financieramente por Bird Conservancy of the Rockies, de Fort Collins, Co. E.U.A.",
        "Convenio Macro entre la Universidad Juárez del estado de Durango, México y la Universidad federal do Pará, Brasil. 2019.",
        "Proyecto: Priorización de sitios de acuerdo a la distribución y requerimientos de hábitat de especies de aves de pastizal prioritarias para la conservación en las zonas de Cuchillas de la Zarca y Malpaís, del estado de Durango. Financiado por PRONATURA, Noreste, A.C. 2019.",
        "Proyecto: Ecología poblacional de Ammodramus bairdii y Ammodramus savannarum, en el norte de Durango, indicadores de la conservación de aves y pastizales de importancia continental. Apoyado por el Consejo de Ciencia y Tecnología del estado de Durango. 2018."
    ];
    

    function ControlPag() {
        switch (currentPage) {
            case pageStates[0]:
                return(
                    <VinculacionContent 
                    title={"Proyectos en relaciones con empresas"}
                    proyectos={proyectos1}
                    />
                )
                break;
            
            case pageStates[1]:
                return(
                    <VinculacionContent
                    title={"Proyectos de investigación FMVZ"}
                    proyectos={proyectosBovinos}
                    />
                )

            break;

            case pageStates[2]:
                return(
                    <VinculacionContent
                    title={"Proyectos de veterinaria y fauna silvestre"}
                    proyectos={proyectosVeterinaria}
                    />
                )
            break;
        
            default:
                break;
        }
    }
    
    const pageStates = [
        "Proyectos ISIMA",
        "Proyectos Veterinaria Bovino",
        "Proyectos Veterinaria Fauna Silvestre"
    ]

    const [currentPage,setCurrentPage] = useState(pageStates[0])

    return(
        <div className="body__content__item">
            <div className="body__content__subnav">
                {pageStates.map((e)=>{
                    if(e===currentPage){
                        return(
                            <button className="selected" onClick={(i)=>setCurrentPage(e)}>{e}</button>
                        )
                    }else{
                        return(
                            <button onClick={(i)=>setCurrentPage(e)}>{e}</button>
                        )
                    }    
                })}
            </div>

            {ControlPag()}
        </div>
    )
}

export default Vinculacion;