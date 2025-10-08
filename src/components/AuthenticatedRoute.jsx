import { Navigate } from 'react-router-dom'; 

export default function AuthenticatedRoute({children}){
    const isAuthenticated = localStorage.getItem('auth') === 'true'; 
    return isAuthenticated ? children : <Navigate to="/login" />;

}

// export default function AuthenticatedRoute(
//     { isAuthenticated, children }) { 
//     if (!isAuthenticated) { 
//         return <Navigate to="/login" replace />; 
//     } 
//     return children;

// }