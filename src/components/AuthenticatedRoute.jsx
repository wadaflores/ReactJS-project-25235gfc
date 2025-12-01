import { Navigate } from 'react-router-dom'; 
import { useAuth } from '../context/AuthContext';

export default function AuthenticatedRoute({children}){
    const {token, userAuth} = useAuth();
    //const isAuthenticated = localStorage.getItem('auth') === 'true'; 
    return userAuth || token ? children : <Navigate to="/login" />;

}

// export default function AuthenticatedRoute(
//     { isAuthenticated, children }) { 
//     if (!isAuthenticated) { 
//         return <Navigate to="/login" replace />; 
//     } 
//     return children;

// }