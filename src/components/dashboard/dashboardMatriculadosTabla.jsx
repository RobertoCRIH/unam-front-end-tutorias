
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";







function MatriculadosTabla({Año,Estudiantes}) {
    

    return(
        <div className="dashboard__matriculados__tabla">
                <div className="dashboard__matriculados__tabla__title">
                    <h2>Generación {Año}</h2>
                    <button>Añadir Alumno</button>
                </div>

                <div className="dashboard__matriculados__tabla__content">

                    <table>
                        <tr>
                            <th>Nombre de Alumno</th>
                            <th>Matricula</th> 
                            <th></th>
                        </tr>
                        
                        {/* Esto mapea el arreglo que se va a recibir del back
                        Lo mas probable es que vaya a tener que cambiarlo cuando Pablo me de el back y la base de datos */}
                        {Estudiantes.map((i)=>{
                            return(
                                <tr>
                                    <td>
                                        <p>{i.name}</p>
                                    </td>
                                    <td>{i.key}</td>
                                    <td style={{width:"50px"}}>
                                        {/* Boton de Editar  */}
                                        <button> <MdEdit style={{fontSize:"25px", color:"green"}}/> </button>
                                        <button> <MdDelete style={{fontSize:"25px", color:"red"}}/> </button>

                                    </td>
                                    
                                </tr> 
                            )
                        })}
                        
                       
                        
                    </table>


                </div>
            </div>
    )
}

export default MatriculadosTabla;