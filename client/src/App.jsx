// Estilos Generales
import "./App.css";

// Componentes
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Menu />

      {/* (5) Contenedor principal con márgenes y ancho máximo */}
      <main className="flex-grow bg-red-300 container mx-auto my-2 px-2 py-4"></main>

      <Footer />
    </div>
  );
}

export default App;
