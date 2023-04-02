import './App.css';

// Router
import { BrowserRouter, Routes } from 'react-router-dom';


// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Hooks
import { useAuth } from "./hooks/useAuth"
import Router from './Routes';



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
          <Router auth={auth} />
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
