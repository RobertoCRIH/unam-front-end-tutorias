import "../../assets/styles/navbar.scss"
import logo from "../../assets/img/ujed logo azul.png";
function Navbar() {
    return(
        <div className="myNav">
            <div className="myNav__title">Maestría Institucional en Ciencias <br /> Agropecuarias y Forestales</div>
            <img src={logo} alt="" />
        </div>
    )
}

export default Navbar;