import DashboardSearchbar from "./dashboardSearchbar";

import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";



function DashboardMatriculados() {
    return(
        <div className="dashboard__content dashboard__matriculados">
            
            <DashboardSearchbar/>

            <div className="dashboard__matriculados__tabla">
                <div className="dashboard__matriculados__tabla__title">
                    <h2>Generación 2023</h2>
                    <button>Añadir Alumno</button>
                </div>

                <div className="dashboard__matriculados__tabla__content">

                    <table>
                        <tr>
                            <th>Nombre de Alumno</th>
                            <th>Matricula</th>


                            
                        </tr>
                        <tr>
                            <td>
                                <p>Mario Cabrera Hernandez</p>
                            </td>
                            <td>1255400046134</td>


                            
                        </tr>
                    </table>

                </div>
            </div>
            
        </div>
    )
}

export default DashboardMatriculados;