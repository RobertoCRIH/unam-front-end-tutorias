import { Outlet } from "react-router-dom";
import DashboardNav from "../components/dashboard/dashboardNavbar";
import "../assets/styles/dashboard.scss";

function Dashboard() {
    
    return(
        <>
            <div className="dashboard">
                <DashboardNav/>       
                <Outlet/>     
       
            </div>
            
        </>
    )
}

export default Dashboard;