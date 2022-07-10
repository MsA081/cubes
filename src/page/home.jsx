import React from "react";
import { Link , useNavigate} from 'react-router-dom';
import Cookies from "js-cookie";

const Home = () => {
    const navigate = useNavigate();
    return(
        <div style={{position: "absolute",height: "100%",width: "100%"}}>
        <li><Link to="/login">login</Link></li>
        {Cookies.get("user") && <button onClick={()=>{navigate("/question")}}>question</button>}
        </div>
    )
}

export default Home;