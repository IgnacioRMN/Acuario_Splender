import Logo from "../../assets/AcuarioSplender.png";

const Menu = () => {
  return (
    <div className="navbar bg-white shadow-sm px-4">
      {/* Logo - siempre visible a la izquierda */}
      <div className="flex-1">
        <a className="flex items-center">
          <img
            src={Logo}
            alt="Acuario Splender"
            className="h-12 w-auto max-w-[180px] object-contain"
          />
        </a>
      </div>

      {/* Menú desktop - oculto en móviles */}
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <a className="text-gray-700 hover:text-[#e67f42] hover:bg-transparent font-medium">
              Inicio
            </a>
          </li>
          <li>
            <a className="text-gray-700 hover:text-[#e67f42] hover:bg-transparent font-medium">
              Productos
            </a>
          </li>
          <li>
            <a className="text-gray-700 hover:text-[#e67f42] hover:bg-transparent font-medium">
              Contacto
            </a>
          </li>
        </ul>
      </div>

      {/* Botón hamburguesa - solo visible en móviles a la derecha */}
      <div className="lg:hidden">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow border border-gray-100"
          >
            <li>
              <a className="text-gray-700 hover:text-[#e67f42]">Inicio</a>
            </li>
            <li>
              <a className="text-gray-700 hover:text-[#e67f42]">Productos</a>
            </li>
            <li>
              <a className="text-gray-700 hover:text-[#e67f42]">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
