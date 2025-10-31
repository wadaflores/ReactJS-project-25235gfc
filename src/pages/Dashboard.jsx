import { useAuth } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";

const Dashboard=()=>{
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();           // limpia token y localStorage
        navigate('/login2'); // redirige a login
    }

    return(
        <div className='Container mt-5'>
            <h2>Dashboard</h2>
            <p>Ruta protegida</p>
            <button className='btn btn-secondary' onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Dashboard;