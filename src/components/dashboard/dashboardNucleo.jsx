import DashboardSearchbar from "./dashboardSearchbar"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


function DashboardNucleo() {
    return(
        <div className="dashboard__content dashboard__nucleo">

            <DashboardSearchbar/>

            <div className="dashboard__nucleo__button">
                <button>Añadir un elemento</button>
            </div>

            <div className="dashboard__nucleo__table">

                <table>
                    <tr>
                        <th>Nombre</th>
                        <th>Grado academico</th>
                        <th>Institución que otorgó el grado</th>
                        <th>Mas información</th>
                        <th>Editar</th>
                    </tr>
                    <tr>
                        <td>Dr. Artemio Carrillo Parra</td>
                        <td>PhD</td>
                        <td>Universidad de Goettingen, Alemania</td>
                        <td>
                            <a href="http://" target="_blank" rel="noopener noreferrer">Ver Perfil</a>
                        </td>
                        <td>
                            <button style={{fontSize:"20px",color:"blue"}}> <FaEdit/> </button>
                            <button style={{fontSize:"20px",color:"red"}}> <MdDelete/> </button>
                        </td>
                    </tr>
                    
                    
                    
                </table>

            </div>

        </div>
    )
}

export default DashboardNucleo