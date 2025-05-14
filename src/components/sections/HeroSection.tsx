
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy via-navy-dark to-navy py-24 md:py-32 lg:py-40">
      {/* Background image with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1589216532372-1c2a367900d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=90')",
          transform: `translateY(${offset * 0.3}px)`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/80 to-navy/70 backdrop-blur-[1px]"></div>
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-gold/15 to-transparent"></div>
      <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-navy/30 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 flex justify-center">
            <motion.img 
              src="/src/assets/logo.png" 
              alt="ПРАВО НА ПРАВДУ лого" 
              className="h-40 md:h-52 w-auto drop-shadow-md" 
              style={{ transformOrigin: "center center" }}
              animate={{ rotateY: -360 }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
          
          <div className="text-center relative z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-beige mb-6 drop-shadow-lg">
              <span className="cyrillic-heading relative inline-block">
                <span className="absolute -inset-1 -skew-y-3 bg-gold/10 blur-xl rounded-lg"></span>
                <span className="relative">ПРАВО НА ПРАВДУ</span>
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gold mb-8 tracking-wide drop-shadow-md">
              Центар за грађански надзор
            </h2>
            
            <p className="text-lg md:text-xl text-beige mb-12 max-w-3xl mx-auto leading-relaxed font-light drop-shadow">
              Помажемо грађанима да се <span className="text-gold font-normal">супротставе корупцији</span>, мобингу и непотизму у јавним предузећима и државним институцијама.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/usluge" className="btn-secondary group transform transition hover:scale-105 shadow-lg">
              Пријавите неправилност
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link to="/o-nama" className="btn-primary group transform transition hover:scale-105 shadow-lg">
              Сазнајте више о нама
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent"></div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-md h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      
      {/* Additional decorative elements */}
      <div className="absolute bottom-0 left-0 w-1/3 h-24 bg-gradient-to-tr from-gold/5 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-24 bg-gradient-to-tl from-gold/5 to-transparent"></div>
      
      {/* Subtle scales of justice symbol */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 opacity-10">
        <svg width="120" height="60" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
          <path d="M12 3c1.183 0 2.227.79 2.612 1.924l.07.225 9.318 3.28v2.722l-1.046.388c-1.076 3.025-3.786 5.228-7.047 5.443l-.289.014v4.5h4.382v2.504h-16v-2.504h4.382v-4.5c-3.6-.212-6.505-2.85-7.336-6.336v-.001l-1.046-.388v-2.722l9.318-3.28c.456-1.358 1.722-2.269 3.152-2.269zm0 2c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm-6.99 5.383l-2.482.919c.724 2.034 2.646 3.499 4.91 3.636l.16.006.402.01v-4.571zm13.98 0v.001l-2.99.001v4.57c2.64-.122 4.84-2.082 5.472-4.571z"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
