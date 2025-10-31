import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
import { useAuth} from '../context/AuthContext';

export default function Login2() {
    const {login} = useAuth();
    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const success = login(userName, password);

        if (success) {
            navigate("/dashboard");
        } else {
            setShowAlert(true);
            setError('Wrong user info!');
        }
    };

    return (
        <Container className="d-flex flex-column justify-content-center align-items-center" style={{ height: "80vh" }}>
            {showAlert && (
                <Alert variant="danger" className="fs-6" onClose={() => setShowAlert(false)} dismissible  >
                    <strong>Oh snap!</strong> Please enter both <b>user name</b> and <b>password</b>.
                </Alert>
            )}
            <Card className="p-4 shadow-sm" style={{ maxWidth: "425px", width: "100%", height:"350px" }}>
                <h2 className="text-center mb-4">Login<span className="fs-6"> with Auth via Token</span></h2>                
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Enter user name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </Form.Group>
                    <div className="text-center">
                        <Button variant="info" type="submit" className="w-100">
                            Login
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    );
}
