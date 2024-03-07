import Navbar from "../components/general/navbar";
import "../assets/styles/body.scss"
import { useState } from "react";
import Intro from "../components/home/intro";
function Home() {

    const homeButtons = [
        "Introducción",
        "Perfil / Egresados",
        "Objetivos",
        "Síntesis de plan de estudio",
        "Alumnos matriculados por cohorte general",
        "Núcleo academico",
        "Líneas de generación y aplicación de conocimiento",
        "Tutoría",
        "Productividad academica",
        "Vinculación",
        "Procesos administrativos",
        "Medios de verificación PNPC",
        "CONACYT",
        "Accesos institucionales",
        "Ir al instituto de silvicultura e insdustria de la madera",
        "Ir a la Facultad de Medicina, Veterinaria y Zooctenia"
    ]

    const [visible,setVisible] = useState(homeButtons[0]);

    function homeState() {
        switch (visible) {
            case homeButtons[0]:
                //INTRODUCCION
                return(
                    <Intro/>
                )

                break;

                case homeButtons[1]:
                    return(
                        <h1>Otro</h1>
                    )
                break;
        
            default:
                break;
        }
    }

    return(
        <>
        
            <Navbar/>

            <div className="body">

                <div className="body__index">

                    {
                        homeButtons.map((i)=>{
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

                <div className="body__content">
                    {homeState()}
                </div>
            </div>
        </>
    )
}

export default Home;