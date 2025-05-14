
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border-b border-gold/5' 
          : 'bg-white/80 backdrop-blur-sm border-b border-gold/10 hover:bg-white/90 hover:backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 sm:py-4">
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="/logo.png"
              alt="ПРАВО НА ПРАВДУ лого"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-navy font-serif font-bold text-xl hidden md:block tracking-tight">
              ПРАВО НА ПРАВДУ
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className={`nav-link ${isActive('/') ? 'text-gold after:w-full' : ''}`}>
              Почетна
            </Link>
            <Link to="/o-nama" className={`nav-link ${isActive('/o-nama') ? 'text-gold after:w-full' : ''}`}>
              О нама
            </Link>
            <Link to="/usluge" className={`nav-link ${isActive('/usluge') ? 'text-gold after:w-full' : ''}`}>
              Услуге
            </Link>
            <Link to="/resursi" className={`nav-link ${isActive('/resursi') ? 'text-gold after:w-full' : ''}`}>
              Ресурси
            </Link>
            <Link to="/kontakt" className={`nav-link ${isActive('/kontakt') ? 'text-gold after:w-full' : ''}`}>
              Контакт
            </Link>
            <Link 
              to="/usluge?tab=report" 
              className="btn-primary text-sm py-2 px-4"
            >
              Пријавите случај
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-navy hover:text-gold transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pt-2 pb-4 animate-fade-in">
            <div className="bg-beige/70 backdrop-blur-md rounded-lg shadow-sm border border-gold/10 overflow-hidden space-y-1">
              <Link 
                to="/" 
                className={`nav-link-mobile ${isActive('/') ? 'bg-navy-light text-beige' : ''}`} 
                onClick={() => setMobileMenuOpen(false)}
              >
                Почетна
              </Link>
              <Link 
                to="/o-nama" 
                className={`nav-link-mobile ${isActive('/o-nama') ? 'bg-navy-light text-beige' : ''}`} 
                onClick={() => setMobileMenuOpen(false)}
              >
                О нама
              </Link>
              <Link 
                to="/usluge" 
                className={`nav-link-mobile ${isActive('/usluge') ? 'bg-navy-light text-beige' : ''}`} 
                onClick={() => setMobileMenuOpen(false)}
              >
                Услуге
              </Link>
              <Link 
                to="/resursi" 
                className={`nav-link-mobile ${isActive('/resursi') ? 'bg-navy-light text-beige' : ''}`} 
                onClick={() => setMobileMenuOpen(false)}
              >
                Ресурси
              </Link>
              <Link 
                to="/kontakt" 
                className={`nav-link-mobile ${isActive('/kontakt') ? 'bg-navy-light text-beige' : ''}`} 
                onClick={() => setMobileMenuOpen(false)}
              >
                Контакт
              </Link>
              <Link 
                to="/usluge?tab=report" 
                className="block px-4 py-3 text-beige font-medium text-center bg-navy hover:bg-navy-light transition-colors shadow-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Пријавите случај
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
