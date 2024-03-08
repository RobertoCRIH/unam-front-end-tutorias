import "../../assets/styles/cardTutorias.scss";

function CardTutoriasHome() {
    return(
        <div className="cardT" style={{border:"1px solid #003A66"}}>
            <div className="cardT__header" style={{backgroundColor:"#003A66"}}>
                Carlitos Herrera Montes
            </div>
            <div className="cardT__body">
                <div className="cardT__body__row">
                    <p className="title"> DIRECTOR/TUTOR:</p>
                    <p>Mateo Luis Gonzalez Carreola</p>
                </div>

                <div className="cardT__body__row">
                    <p className="title"> ASESORES:</p>
                    <p>
                        Dr. Mario Gallegos Perez <br />
                        Dr. Hugo Martinez Pereda <br />
                        Dra. María Fernandez García <br /> 
                    </p>
                </div>

                <div className="cardT__body__row">
                    <p className="title">TESIS:</p>
                    <p>
                    Exploración de Nuevas Estrategias Terapéuticas en el Tratamiento de Enfermedades Crónicas: Un Enfoque Interdisciplinario en Medicina
                    </p>
                </div>
                
            </div>

            
        </div>
    )
}

export default CardTutoriasHome;