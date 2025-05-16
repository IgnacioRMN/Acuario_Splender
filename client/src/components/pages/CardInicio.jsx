import { Link } from "react-router-dom";

const CardInicio = ({ title, description, imageUrl, linkText, linkTo }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
      {/* Image container */}
      <div className="relative overflow-hidden h-48">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        {/* Overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6 relative">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        <Link
          to={linkTo}
          className="inline-flex items-center text-[#e67f42] font-semibold hover:text-[#d67033] transition-colors duration-300"
        >
          {linkText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>

        {/* Decorative element */}
        <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-[#e67f42] rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
      </div>
    </div>
  );
};

export default CardInicio;
