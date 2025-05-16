import Logo from "../../assets/AcuarioSplender.png";
import CatalogoInicio from "./CatalogoInicio";

const Inicio = () => {
  return (
    <section className=" relative overflow-hidden bg-green-600">
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#e67f42] rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute -left-20 -bottom-20 w-72 h-72 bg-[#e67f42] rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Descubre el <span className="text-[#e67f42]">mundo acuático</span>{" "}
              en Splender!
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              Todo lo que necesitas para tu acuario en un solo lugar. Peces,
              alimentos de calidad y los mejores insumos para mantener un
              ecosistema saludable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#e67f42] hover:bg-[#d67033] transform hover:scale-105 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer">
                Explorar Catálogo
              </button>
              <button className="border-2 border-[#e67f42] text-[#e67f42] hover:bg-[#e67f42] hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow hover:shadow-md cursor-pointer">
                Contacto
              </button>
            </div>
          </div>

          {/* Image with professional effects */}
          <div className="lg:w-1/2 relative mt-10 lg:mt-0">
            <div className="relative group">
              {/* Main image with parallax effect */}
              <div className="overflow-hidden rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="https://images.pexels.com/photos/2248916/pexels-photo-2248916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Acuario con peces tropicales"
                  className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#e67f42] rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-[#e67f42] rounded-full opacity-15 group-hover:opacity-25 transition-opacity duration-300 -z-10"></div>

              {/* Decorative fish element (optional) */}
              <div className="absolute -bottom-8 right-10 hidden md:block">
                <img
                  src={Logo}
                  className="w-20  text-[#e67f42] opacity-80 transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Catálogo */}
      <CatalogoInicio />
    </section>
  );
};

export default Inicio;
