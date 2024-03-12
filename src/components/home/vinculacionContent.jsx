function VinculacionContent({title,proyectos}) {

    
    

    return(
        <>
        
            <div className="body__content__subtitle">
                {title}
            </div>

            <ol className="body__content__list">
                {proyectos.map((e)=>{
                    return(
                        <li>{e}</li>
                    )
                })}
            </ol>


        </>
    )
}

export default VinculacionContent;