import { AiOutlineSearch } from "react-icons/ai";

function DashboardSearchbar() {
    return(
        <div className="dashboard__content__searchbar">

            <div>
                <AiOutlineSearch style={{fontSize:'20px',marginRight:'15px'}}/>
                <input type="text" name="" id="" placeholder="Para buscar un nombre o matricula, escribe aquí..." />
            </div>

        </div>
    )
}

export default DashboardSearchbar;