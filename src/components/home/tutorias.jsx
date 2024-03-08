import { useState } from "react";
import CardTutorias from "../general/cardTutorias";
import CardTutoriasHome from "../general/cardTutoriasHome";

function Tutorias() {

    const years = [
        2019,
        2020,
        2024,
        2023,
        2001,
        2006,
        2007
    ]
    const [yearState,setYearState] = useState(years[0]);
    return(
        <div className="body__content__item">
            <div className="body__content__title">
                Tutorías
            </div>
            {/* Este es el filtro que toma cambia la pagina */}
            <div className="body__content__filter">
                {years.map((e)=>{
                    if(e != yearState){
                        return(
                            <button onClick={(i)=>setYearState(e)}>Cómite Tesis {e}</button>
                        )
                    }else{
                        return(
                            <button className="selected" onClick={(i)=>setYearState(e)}>Cómite Tesis {e}</button>
                        )
                    }
                    
                })}
            </div>
            
            <div className="body__content__tutorias">
                <CardTutoriasHome/>
                <CardTutoriasHome/>
                <CardTutoriasHome/>
            </div>
        </div>
    )
}

export default Tutorias;