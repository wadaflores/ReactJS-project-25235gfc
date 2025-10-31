//import reactLogo from './assets/react.svg';
//import viteLogo from '/vite.svg';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';

import "bootswatch/dist/minty/bootstrap.min.css";
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Footer from './components/Footer';
import Header from './components/Header';

import Home from "./pages/Home";
import Clients from "./pages/Clients";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Login from './pages/Login';
import Login2 from './pages/Login2';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';

import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";
import AuthenticatedRoute from './components/AuthenticatedRoute';
import { AuthProvider } from './context/AuthContext';

function App() {
    // const [count, setCount] = useState(0)
    return (
      <AuthProvider>
      <CartProvider>
      <UserProvider>
        <div className='app-container'>
          <Router>
            <Header/>
            <Container fluid className="main-content">
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/products/:id" element={<ProductDetail/>}/>
                <Route path="/clients" element={<Clients/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/login2" element={<Login2/>}/>
                <Route path="/admin" element={<AuthenticatedRoute><Admin/></AuthenticatedRoute>}/>
                <Route path="/dashboard" element={<AuthenticatedRoute><Dashboard/></AuthenticatedRoute>}/>
              </Routes>
  {/*   
              <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            <h1>Vite + React</h1>
            <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
              <p>
                Edit <code>src/App.jsx</code> and save to test HMR
              </p>
            </div>
            <p className="read-the-docs">
              Click on the Vite and React logos to learn more
            </p>
  */} 
            </Container>
            <Footer/>
          </Router>
        </div>
      </UserProvider>
      </CartProvider>
      </AuthProvider>
    )
}

export default App
