import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";


import "../../assets/styles/modal.scss"
import MyModal from "../general/modal";
import { useState } from "react";

function MatriculadosTabla({Año,Estudiantes}) {
    //Estos son los estados que abren los modales
    const [modalEdit,setModalEdit]= useState(false)
    const [modalErase,setModalErase] = useState(false)

    //Esto le pasa el id al modal para luego editar este campo
    //BORRAR LUEGO TAL VEZ ???
    const [editId,setEditId] = useState();

     function editFunction () {
        console.log("Edit Function working")
    }

    return(
        <div className="dashboard__matriculados__tabla">
            <MyModal visible={modalEdit} turnOff={setModalEdit} title={"Editar a este alumno"} bttn={"Editar Alumno"}>
                    <div className="modal__content__center">Id del Estudiante: {editId}</div>

                    <div className="modal__content__tag">Escribe el nombre del alumno</div>
                    <input type="text" placeholder="Ej. Juan Hernandez" />
                    <div className="modal__content__ass">*Asegurate de escribir bien el nombre</div>

                    <div className="modal__content__tag">Escribe la nueva matricula</div>
                    <input type="text" placeholder="Ej. 1012321" />
            </MyModal>

            <MyModal visible={modalErase} turnOff={setModalErase} title={"Eliminar alumno"} bttn={"Eliminar Alumno"} acceptFunction={editFunction()}>
                    <div className="modal__content__center">Luisito Testeo</div>
            </MyModal>

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

                                        <button onClick={(e)=>{
                                                setModalEdit(true);
                                                setEditId(i.id);
                                            }}> <MdEdit style={{fontSize:"25px", color:"green"}}/> </button>
                                        
                                        {/* Boton de borrar  */}
                                        <button onClick={(e)=>{
                                            setModalErase(true);
                                        }}> <MdDelete style={{fontSize:"25px", color:"red"}}/> </button>

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