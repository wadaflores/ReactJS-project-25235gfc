import {createContext, useContext, useState, useEffect} from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    // Inicializamos el token leyendo localStorage
    const [token, setToken] = useState(()=>{
        return localStorage.getItem('token') || null;
    });
    const [userAuth, setUserAuth] = useState(()=>{
        return localStorage.getItem('userAuth') || null;
    });

    const login = (userName, password) => {
        if(userName === 'gflores' && password === '1234' || userName === 'a@a.com' && password === '1234'){
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoidXNlciIsImlhdCI6MTY5ODAwMDAwMH0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
            setToken(token);
            localStorage.setItem('token', token); //guardamos token
            const userAuth = 'true'
            setUserAuth(userAuth)
            localStorage.setItem('userAuth', userAuth);
            return true;
        }
        return false;
    };

    const logout=()=>{
        setToken(null);
        setUserAuth(null);
        localStorage.removeItem('token'); //borramos token
        localStorage.removeItem('userAuth');
    }

    return (
        <AuthContext.Provider value={{ token, userAuth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);