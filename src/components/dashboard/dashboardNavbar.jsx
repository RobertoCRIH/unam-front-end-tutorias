import logo from "../../assets/img/ujed logo.png";
import DashboardMenuItem from "./dashboardNavMenuItem";

//Imagenes del Menú del dashboard
import studentIcon from "../../assets/img/student (1).png";
import teacherIcon from "../../assets/img/teacher.png";
import adminIcon from "../../assets/img/user.png";
import podioIcon from '../../assets/img/podio.png';
import userImg from "../../assets/img/user_img.jpg";

function DashboardNav() {
    return(
        <div className="dashboard__nav">
            <div className="dashboard__nav__logo">
                <img src={logo} alt="Logo de la UJED" className="" />
            </div>

            <div className="dashboard__nav__menu">

                <DashboardMenuItem path={"/"} icon={studentIcon} name={"Alumnos Matriculados"} />
                <DashboardMenuItem path={"/"} icon={teacherIcon} name={"Tutoría"} />
                <DashboardMenuItem path={"/"} icon={podioIcon} name={"Núcle Académico"} />
                <DashboardMenuItem path={"/"} icon={adminIcon} name={"Administrador"} />

                
                

            </div>

            <div className="dashboard__nav__footer">
                <p>Iniciaste sesión como</p>
                <div className="dashboard__nav__footer__content">
                    <img src={userImg} alt="" />
                    <p>María Martinez Ferrero</p>
                </div>
            </div>
            
        </div>
    )
}

export default DashboardNav;