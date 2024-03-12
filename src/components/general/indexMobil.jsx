function IndexMobil({list}) {
    return(
        <>
        
        <div className="body__indexMobil">
                    {
                        list.map((i)=>{
                            return(
                                <div className="body__index__item">
                                    <button onClick={(e)=> setVisible(i)}>
                                        {i}
                                    </button>
                                </div>
                            )
                        })
                    }
            </div>
        
        </>
    )
}

export default IndexMobil;