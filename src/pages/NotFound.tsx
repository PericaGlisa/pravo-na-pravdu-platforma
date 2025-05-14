
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-beige">
      <div className="text-center px-4 py-16">
        <img 
          src="/logo.png" 
          alt="ПРАВО НА ПРАВДУ лого" 
          className="h-32 mx-auto mb-6" 
        />
        <h1 className="text-4xl font-bold text-navy mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-navy mb-8">Страница није пронађена</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
          Жао нам је, али страница коју сте тражили не постоји или је промењена.
          Покушајте да пронађете информације на главној страници.
        </p>
        <Link to="/" className="btn-primary">
          Вратите се на почетну страницу
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
