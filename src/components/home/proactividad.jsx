import { useState } from "react";
import ProactividadPg1 from "./proactividad_pg1";
import ProactividadPg2 from "./proactividad_pg2";
import ProactividadPg3 from "./proactividad_pg3";

function Proactividad() {

    function testList(params) {
        return(
            <>
                <li>Monjarás-Vega N.A., Carlos Ivan Briones-Herrera, Daniel José Vega-Nieva, Eric Calleros-Flores, José Javier Corral-Rivas, Pablito Marcelo López-Serrano, Marín Pompa-García ,Dante Arturo Rodríguez-Trejo, Artemio Carrillo-Parra. 2020. Predicting forest fire kernel density at multiple scales with geographically weighted regression in Mexico. Science of The Total Environment. 718:137313. https://doi.org/10.1016/j.scitotenv.2020.137313</li>
                <li>Favian Flores Medina, F., Daniel José Vega-Nieva, José Javier Corral-Rivas, Juan Gabriel Álvarez-González, Ana Daria Ruiz-González, Carlos Antonio López-Sánchez, Artemio Carillo Parra. 2018. Desarrollo de ecuaciones alométricas de biomasa para la regeneración de cuatro especies en Durango, México. Revista Mexicana de Ciencias Forestales Vol. 9 (46). DOI: https://doi.org/10.29298/rmcf.v9i46.119</li>
                <li>Calleros-Flores, E., Corral-Rivas, J.J., Lopez-Sanchez, C.A., Wehenkel, C., Vargas-Larreta, B., Gómez-García, E. 2015 Ecuaciones de estimación de biomasa aérea para Dasylirion cedrosanum en el estado de Durango XII Congreso Mexicano sobre Recursos Forestales, At Ixtapan de La Sal, Estado de México, México. del 23 al 27 de noviembre 2015.</li>
            </>
        )
    }

    const pageStates = [
        "ISIMA Forestal y Ambiental",
        "Veterinaria Bovino",
        "Veterinaria Fauna Silvestre"
    ]

    const [currentPage,setCurrentPage] = useState(pageStates[0])

    function ControlPag() {
        
        switch (currentPage) {
            //Primera Pagina
            case pageStates[0]:
                    return(
                        <ProactividadPg1/>
                            
                    )
                break;

                case (pageStates[1]):
                    //Seguna Pagina
                    return(
                        <ProactividadPg2/>
                    )
                break;

                case (pageStates[2]):
                    return(
                       <ProactividadPg3/>
                    )
                break;
        
            default:
                break;
        }

    }

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

           {
            ControlPag()
           }

            

        </div>
    )
}

export default Proactividad;