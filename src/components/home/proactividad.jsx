import { useState } from "react";

function Proactividad() {

    const pageStates = [
        "ISIMA Forestal y Ambiental",
        "Veterinaria Bovino",
        "Veterinaria Fauna Silvestre"
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

            <div className="body__content__subtitle">
                Artículos en revistas indexadas incluidas en el JCR-ISI Y/O el indice de CONACYT
            </div>
        </div>
    )
}

export default Proactividad;