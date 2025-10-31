import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    const fetchUser=()=>{
        fetch("https://randomuser.me/api/")
        .then(res => res.json())
        .then(data => setUser(data.results[0]))
        .catch(error => console.error('Error: ', error));
    };

    useEffect(()=>{
        fetchUser();
    },[]);

    return (
        <UserContext.Provider value={{ user, fetchUser }}>
            {children}
        </UserContext.Provider>
    );
}

// export function useUser() {
//     return useContext(UserContext);
// }