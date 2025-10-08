import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

export default function RandomDog(){
    const [dog, setDog] = useState(null);

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) => {
            setDog(data);
        })
        .catch((error) => console.error('Error:', error));
    },[]);

    if(!dog) return <span><Spinner animation="border" size="sm" variant="success" />Loading doggie...</span>

    return(
        <div style={{ height: 400 }} className="d-flex">
            <img 
                src={dog.message}
                className="d-block w-100 h-100 align-items-md-center"
                alt="Dog slides"
                style={{
                    objectFit: "cover",
                    borderRadius: "5px"
                }}
            />
        </div>
    )
}
