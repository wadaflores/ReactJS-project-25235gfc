import { useContext } from "react";
import { Button } from 'react-bootstrap';
import { UserContext } from '../context/UserContext';

export const LoadUserButton=()=>{
    const { fetchUser } = useContext(UserContext);

        return(
                <div className="d-flex justify-content-center my-4">
                    <Button variant='primary' onClick={fetchUser} >
                        Load New User
                    </Button>
                </div>
        );
};

//export default LoadUserButton;