import './App.css';

// Router
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';


// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Hooks
import { useAuth } from "./hooks/useAuth"

// Pages
import Home from "./pages/Home/";
import Funcionalidades from "./pages/Funcionalidades/";
import Planos from "./pages/Planos/";
import Contato from "./pages/Contato/";
import Blog from "./pages/Blog/";
import Registrar from './pages/Auth/Registrar';
import Login from './pages/Auth/Login';



function App() {

  const { auth, loading } = useAuth();

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={auth ? <Home /> : <Navigate to="/login"/>}
            />
            <Route
              path="/funcionalidades"
              element={!auth ? < Funcionalidades/> : <Navigate to="/"/> }
            />
            <Route
              path="/planos"
              element={!auth ? < Planos/> : <Navigate to="/"/> }
            />
            <Route
              path="/contato"
              element={!auth ? < Contato/> : <Navigate to="/"/> }
            />
            <Route
              path="/blog"
              element={!auth ? < Blog/> : <Navigate to="/"/> }
            />
            <Route
              path="/cadastro"
              element={!auth ? < Registrar/> : <Navigate to="/"/> }
            />
            <Route
              path="/login"
              element={!auth ? < Login/> : <Navigate to="/"/> }
            />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
