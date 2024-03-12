import DashboardSearchbar from "./dashboardSearchbar";
import DashboardTutoriasMenu from "./dashboardTutoriasMenu";

function DashboardTutorias() {
    return(
        <div className="dashboard__content dashboard__tutorias">
            <DashboardSearchbar/>
            <DashboardTutoriasMenu/>
        </div>
    )
}

export default DashboardTutorias;