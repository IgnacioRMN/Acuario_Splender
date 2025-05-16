import CardInicio from "./CardInicio";

const CatalogoInicio = () => {
  const categories = [
    {
      title: "Peces Tropicales",
      description:
        "Descubre nuestra variedad de peces tropicales de colores vibrantes.",
      imageUrl:
        "https://images.pexels.com/photos/2053815/pexels-photo-2053815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      linkText: "Ver peces",
      linkTo: "/catalogo/peces",
    },
    {
      title: "Alimentos Premium",
      description:
        "Alimentos de alta calidad para mantener a tus peces saludables.",
      imageUrl:
        "https://acdn-us.mitiendanube.com/stores/001/426/797/products/alimento-peces1-4e7144fea096ee4a2016099651314887-640-0.jpg",
      linkText: "Ver alimentos",
      linkTo: "/catalogo/alimentos",
    },
    {
      title: "Equipos y Accesorios",
      description:
        "Todo lo necesario para mantener tu acuario en perfectas condiciones.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_EtYPhcLx4XhUBEfd36Zg3PTBt77RSJbWkA&s",
      linkText: "Ver equipos",
      linkTo: "/catalogo/equipos",
    },
  ];

  return (
    <section className="bg-red-600 relative overflow-hidden py-16 md:py-24">
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {/* <div className="absolute -right-40 -top-40 w-80 h-80 bg-[#e67f42] rounded-full mix-blend-multiply filter blur-xl"></div> */}
        {/* <div className="absolute -left-40 -bottom-40 w-96 h-96 bg-[#e67f42] rounded-full mix-blend-multiply filter blur-xl"></div> */}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Explora Nuestro <span className="text-[#e67f42]">Catálogo</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra amplia selección de productos para el cuidado de tu
            acuario.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CardInicio
              key={index}
              title={category.title}
              description={category.description}
              imageUrl={category.imageUrl}
              linkText={category.linkText}
              linkTo={category.linkTo}
            />
          ))}
        </div>

        {/* CTA button */}
        <div className="text-center mt-12">
          <button className="bg-[#e67f42] hover:bg-[#d67033] transform hover:scale-105 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer">
            Ver Catálogo Completo
          </button>
        </div>
      </div>
    </section>
  );
};

export default CatalogoInicio;
