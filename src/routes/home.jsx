import Navbar from "../components/general/navbar";
import "../assets/styles/body.scss"
import "../assets/styles/homeFooter.scss"

import { useState } from "react";

import { IoIosMenu } from "react-icons/io";

import Intro from "../components/home/intro";
import Perfil from "../components/home/perfilIngreso";
import Objetivos from "../components/home/objetivos";
import Plan from "../components/home/plan";
import Nucleo from "../components/home/nucleo";
import LineasDeGeneracion from "../components/home/lineasDeGenracion";
import Tutorias from "../components/home/tutorias";
import Alumnos from "../components/home/alumnos";
import Proactividad from "../components/home/proactividad";
import Vinculacion from "../components/home/vinculacion";
import ProcesoAdministrativo from "../components/home/procesoAdministrativo";
import MediosVerificacion from "../components/home/mediosVerificacion";
import Conacyt from "../components/home/conacyt";
import AccesosInst from "../components/home/accesosInst";
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

    ]

    const [visible,setVisible] = useState(homeButtons[0]);

    const [indexMobilVisible,setIndexMobilVisible] = useState(false);

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

                case (homeButtons[9]):
                    //ESTO ES VINCULACION
                return(
                        <Vinculacion/>
                    )
                break;

                case (homeButtons[10]):
                    //ESTO ES PROCESOS ADMINISTRATIVOS
                    return(
                        <ProcesoAdministrativo/>
                    )
                break;
                
                case (homeButtons[11]):
                    //Medios de verificacion pnpc
                    return(
                        <MediosVerificacion/>
                    )
                break;

                case (homeButtons[12]):
                    //CONACYT
                    return(
                        <Conacyt/>
                    )
                break;

                case (homeButtons[13]):
                    //ACCESOS INSTITUCIONALES
                    return(
                        <AccesosInst/>
                    )
                break;
        
            default:
                break;
        }
    }

    return(
        <>
        
            <Navbar/>

            {/* Este es el index que va a aparecer en telefonols */}
            <div className="body__MobilBttn">
                <button onClick={(e)=>setIndexMobilVisible(!indexMobilVisible)}> <IoIosMenu/> Menú</button>
            </div>
            <div className="body__indexMobil">
                    {   
                        
                        homeButtons.map((i)=>{
                            if (indexMobilVisible) {
                                return(
                                    <div className="body__index__item">
                                        <button onClick={(e)=>{ 
                                            setVisible(i)
                                            setIndexMobilVisible(false);
                                            }}>
                                            {i}
                                        </button>
                                    </div>
                                ) 
                            }
                            
                        })
                    }
            </div>

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

            <div className="homeFooter">
                <div className="homeFooter__text">
                    Maestría Institucional en Ciencias Agropecuarias y Forestales
                </div>

                <div className="homeFooter__text">
                Facultad de Medicina Veterinaria y Zootecnia de la Universidad Juárez del Estado de Durango. <br /> 
                Carretera Durango-Mezquital Km. 11.5. Durango, Dgo. México. <br />
                Tels. (618) 818 9932 y 810 0703,micaf@ujed.mx micaf_ujed@ujed.mx
                </div>
            </div>
        </>
    )
}

export default Home;