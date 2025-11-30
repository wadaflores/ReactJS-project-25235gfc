import { useAuth } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";
import { UserCard } from '../components/UserCard';
import { Button } from 'react-bootstrap';

const Dashboard=()=>{
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();           // limpia token y localStorage
        navigate('/login2'); // redirige a login
    }

    return(
        <div className='Container mt-5'>
            <h2>Admin Dashboard</h2>
            <p>Ruta protegida</p>
            <Button className='btn btn-info me-2' onClick={() => navigate("/CRUDproducts")}>Products CRUD</Button>
            <Button className='btn btn-secondary' onClick={handleLogout}>Logout</Button>
            <UserCard/>
        </div>
    )
}

export default Dashboard;