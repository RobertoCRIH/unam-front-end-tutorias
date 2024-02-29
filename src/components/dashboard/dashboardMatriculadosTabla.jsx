import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";


import "../../assets/styles/modal.scss"

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

                <div className="modal">
                    <div className="modal__container">
                        <div className="modal__header">
                            <div className="modal__header__text">¿Deseas eliminar a este alumno?</div>
                            <button> <IoIosCloseCircleOutline style={{color:"red",fontSize:"35px"}}/> </button>
                        </div>
                        <div className="modal__content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, itaque quasi necessitatibus a suscipit sunt ea aperiam unde minus consectetur, non mollitia nemo ipsa quidem maiores maxime quisquam, tenetur atque?
                        </div>

                        <div className="modal__footer">
                            <button className="modal__footer__false">False</button>
                            <button className="modal__footer__true">True</button>
                            
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default MatriculadosTabla;