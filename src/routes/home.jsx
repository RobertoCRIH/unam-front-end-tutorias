import Navbar from "../components/general/navbar";
import "../assets/styles/body.scss"
import { useState } from "react";
import Intro from "../components/home/intro";
import Perfil from "../components/home/perfilIngreso";
import Objetivos from "../components/home/objetivos";
import Plan from "../components/home/plan";
import Nucleo from "../components/home/nucleo";
import LineasDeGeneracion from "../components/home/lineasDeGenracion";
import Tutorias from "../components/home/tutorias";
import Alumnos from "../components/home/alumnos";
import Proactividad from "../components/home/proactividad";
function Home() {

    const homeButtons = [
        "Introducción",
        "Perfil Ingreso/Egreso",
        "Objetivos",
        "Síntesis de plan de estudio",
        "Alumnos matriculados por cohorte general",
        "Núcleo academico",
        "Líneas de generación y aplicación de conocimiento",
        "Tutorías",
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
            case (homeButtons[0]):
                //INTRODUCCION
                return(
                    <Intro/>
                )

                break;

                case (homeButtons[1]):
                    //Perfil de Ingreso y Egreso
                    return(
                        <Perfil/>
                    )
                break;

                case (homeButtons[2]):
                    //Objetivos
                    return(
                        <Objetivos/>
                    )
                break;

                case (homeButtons[3]):
                    //Sintesis del plan de estudio
                    return(
                        <Plan/>
                    )
                break;

                case (homeButtons[4]):
                    //Alumnos matriculados por cohorte
                    return(
                        <Alumnos/>
                    )
                break;

                case (homeButtons[5]):
                    //Nucleo academico
                    return(
                        <Nucleo/>
                    )
                break;

                case (homeButtons[6]):
                    //Lineas de generacion y aplicacion del conocimiento
                    return(
                        <LineasDeGeneracion/>
                    )
                break;

                case (homeButtons[7]):
                    //Tutorias
                    return(
                        <Tutorias/>
                    )
                break;

                case (homeButtons[8]):
                    //ESTO ES PRODUCTIVIDAD!!! (Lo escribí mal pero el componente en sí, funciona bien)
                    return(
                        <Proactividad/>
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