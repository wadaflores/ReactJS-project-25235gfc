import { LoadUserButton } from '../components/LoadUserButton';
import { UserCard } from '../components/UserCard';
import { useNavigate } from "react-router-dom";

export default function Admin(){
    const navigate = useNavigate();

    return (
        <>
            <h2 className="my-4">Admin Page</h2>
            <UserCard/>
            <button className='btn btn-primary' onClick={() => navigate("/CRUDproducts")}>CRUD</button>
            {/* <LoadUserButton/> */}
        </>
    )
}