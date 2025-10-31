import { useContext } from "react";
import { Card, Spinner } from 'react-bootstrap';
import { UserContext } from '../context/UserContext';

export const UserCard=()=>{
    const { user } = useContext(UserContext);

    if(!user) return <span><Spinner animation="border" role="status" size="sm" variant="success" />Loading...</span>

    return(
        <div className="d-flex justify-content-center mt-4">
            <Card>
                <Card.Img variant="top" src={user.picture.large} />
                <Card.Body>
                    <Card.Title>
                        {user.name.first} {user.name.last}
                    </Card.Title>
                    <Card.Text>
                        <strong>Email: </strong>{user.email}
                        <br/>
                        <strong>City: </strong>{user.location.city}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )


}