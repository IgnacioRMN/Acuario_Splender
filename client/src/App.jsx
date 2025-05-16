// Estilos Generales
import "./App.css";

// Componentes
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Inicio from "./components/pages/Inicio";

// Librerias o dependencias externas
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white">
        <Menu />
        <main className="flex-grow  container mx-auto my-1 px-2 py-2">
          <Routes>
            <Route path="/" element={<Inicio />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
