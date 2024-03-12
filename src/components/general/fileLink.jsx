import { FaFile } from "react-icons/fa";
import "../../assets/styles/fileLink.scss";

function FileLink({text,link}) {
    return(
        <a href={link} className="fileLink">
            <FaFile style={{color: "#003A66",fontSize:"25px",marginRight:"10px"}}/>
            <p>{text}</p>
        </a>
    )
}

export default FileLink;