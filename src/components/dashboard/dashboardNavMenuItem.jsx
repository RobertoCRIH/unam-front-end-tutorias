import { Link } from "react-router-dom";

function DashboardMenuItem({path,name,icon}) {
    return(
        <Link to={{pathname:path}}
                className="dashboard__nav__menu__item"
                >
                    <img src={icon} alt="" />
                    <p>{name}</p>
                </Link>
    )
}

export default DashboardMenuItem;