import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";

const Logout = () => {
    const navigate = useNavigate();
    navigate("/");
    Cookies.remove("user");
}

export default Logout;