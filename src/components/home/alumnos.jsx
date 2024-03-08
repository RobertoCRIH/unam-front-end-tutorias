import { useState } from "react";

function Alumnos() {
    const years = [
        2001,
        2002,
        2003,
        2004,
        2005,
        2006,
        2007
    ]

    const [yearState,setYearState] = useState(years[0]);

    return(
        <div className="body__content__item">
            <div className="body__content__filter">
                {years.map((e)=>{
                    if(e===yearState){
                        return(
                            <button className="selected" onClick={(i)=> setYearState(e)}>Generación {e}</button>
                        )
                    }else{
                        return(
                            <button onClick={(i)=> setYearState(e)}>Generación {e}</button>
                        )
                    }
                    
                })}
            </div>
            {/* Esta parte va a ser dinamica luego. Así que tal vez necesite transformarla en un componente */}
            <div className="body__content__title">
                Generación 2019
            </div>
            <div className="body__content__tableContainer">
                <table className="body__content__table">
                    <tr>
                        <th>Nombre del alumno</th>
                        <th>Matricula</th>
                    </tr>
                    <tr>
                        <td>Mario Capistran</td>
                        <td>[Matricula]</td>
                    </tr>
                    <tr>
                        <td>Mario Capistran</td>
                        <td>[Matricula]</td>
                    </tr>
                    <tr>
                        <td>Mario Capistran</td>
                        <td>[Matricula]</td>
                    </tr>
                    <tr>
                        <td>Mario Capistran</td>
                        <td>[Matricula]</td>
                    </tr>
                </table>
            </div>
            
        </div>
        
    )
}

export default Alumnos;