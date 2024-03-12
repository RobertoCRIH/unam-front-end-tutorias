import { useState } from "react";

function ProactividadPg1() {

    function ChangePage() {
        switch (currentPage) {
            case pageStates[0]:
                return(
                    <>
                        <ol className="body__content__list">
                            <li>En estas listas van a ir los datos</li>
                        </ol>
                    </>
                )
                break;
        
            default:
                break;
        }
    }

    const pageStates = [
        "Artículos en revistas indexadas incluidas en el JCR-ISI Y/O el indice de CONACYT",
        "Artículos en revistas arbitradas no incluidas en el JCR-ISI y tampoco en el índice del CONACYT",
        "Memorias de congresos, seminarios y reuniones científicas Congresos ámbito internacional",
        "Congresos ámbito nacional",
        "Artículos internacionales con alumnos de MICAF",
        "Ponencias y carteles con alumnos de MICAF"
    ]

    const [currentPage,setCurrentPage] = useState(pageStates[0]);

    return(
        <>
        
            <div className="body__content__filter">
                {pageStates.map((e)=>{
                    
                    if(e===currentPage){
                        return(
                            <button className="selected greenVariant" onClick={(i)=>setCurrentPage(e)}>{e}</button>
                        )
                        
                    }else{
                        return(
                            <button className="greenVariant" onClick={(i)=>setCurrentPage(e)}>{e}</button>
                        )
                        
                    }
                })}
            </div>
            
            <div className="body__content__title">
                {currentPage}
            </div>
            {ChangePage()}
        
        </>
    )
}

export default ProactividadPg1;