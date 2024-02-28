import DashboardSearchbar from "./dashboardSearchbar";


import MatriculadosTabla from "./dashboardMatriculadosTabla";

function DashboardMatriculados() {
    // Estos son datos falsos para simular el back end +
    const testdata = [
        {
            id:0,
            name:"Mateo Salazar Camerón",
            key:"210025311"
        },
        {
            id:1,
            name:"Tadeo MAteo Goya Coca",
            key:"120002456"
        },
        {
            id:2,
            name:"Garfield Wayne",
            key:"128213248"
        }
    ] 
    
    return(
        <div className="dashboard__content dashboard__matriculados">
            <DashboardSearchbar/>

            <MatriculadosTabla Año={"2025"} Estudiantes={testdata}/>
            
        </div>
    )
}

export default DashboardMatriculados;