import { useState } from "react";

function ProactividadPg3() {

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
        "Artículos en revistas indexadas incluidas en el jcr-isi y/o el indice de conacyt",
        "Libros",
        "Capítulos de libros",
        "Memorias de congresos, seminarios y reuniones científicas Congresos ámbito internacional",
        "Trabajo de científicos presentados"
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

export default ProactividadPg3;