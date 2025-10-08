import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";


export default function RandomUser(){
    const [user, setUser] = useState(null);

    useEffect(()=>{
        fetch("https://randomuser.me/api/")
        .then((res) => res.json())
        .then((data) => {
            setUser(data.results[0]);
        })
        .catch((error) => console.error('Error:', error));
    },[]);

    if(!user) return <span><Spinner animation="border" size="sm" variant="success" />Loading...</span>

    return(
        <div className="mx-5 my-2" style={{width: "230px"}}>
            <img src={user.picture.large} alt={"usuario " + user.name.last} style={{ borderRadius: "50%" }}/>
            <h4 className="mb-0">{user.name.title} {user.name.first} <b>{user.name.last}</b></h4>
            <p>{user.email}</p>
            <p><u>{user.location.country}</u></p>
        </div>
    )

}

// fetch x default hace get (otros: post, put, delete, etc)
// request line (url), headers, body <-- las 3 partes del request 
//thunder client (como postman pero de VS)