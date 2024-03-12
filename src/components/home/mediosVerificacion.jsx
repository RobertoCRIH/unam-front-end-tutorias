function MediosVerificacion() {
    return(
        <>
            <div className="body__content__item">

                <div className="body__content__title">
                    Medios de verificación PNPC
                </div>

                <div className="body__content__text">
                    Accede al repositorio de documentación PNPC-CONACYT de nuestro posgrado.
                </div>

                <div style={{display:"flex",justifyContent:"center",height:"300px",alignItems:"center"}}>
                    <div className="sublogin">
                        
                        <div className="title">
                            Inicia Sesión
                        </div>
                        <div style={{padding:"10px 0",display:"flex",justifyContent:"center"}}>
                            <input type="text" placeholder="Escribe tu contraseña" />
                        </div>
                        <br />
                        <div style={{padding:"10px 0",display:"flex",justifyContent:"center"}}>
                            <button>Entrar</button>
                        </div>
                        
                    </div>
                </div>
                

            </div>
            
        </>
    )
}

export default MediosVerificacion;