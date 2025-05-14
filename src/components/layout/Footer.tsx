
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-navy via-navy/95 to-navy-dark text-beige py-12 sm:py-16 relative overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_30%_20%,rgba(255,223,142,0.05)_0%,transparent_50%)] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_70%_80%,rgba(255,223,142,0.05)_0%,transparent_50%)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-10">
          <div className="sm:col-span-2 md:col-span-5 space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Link to="/" className="transition-transform duration-300 hover:scale-105">
                <img 
                  src="/src/assets/logo.png" 
                  alt="ПРАВО НА ПРАВДУ лого" 
                  className="h-16 sm:h-18 md:h-20 w-auto brightness-110 filter drop-shadow-[0_0_15px_rgba(255,223,142,0.3)] transition-all duration-300 hover:brightness-125" 
                />
              </Link>
              <Link to="/" className="group">
                <div>
                  <h3 className="font-serif font-bold text-2xl text-beige group-hover:text-gold transition-colors">ПРАВО НА ПРАВДУ</h3>
                  <p className="text-sm text-beige/70 group-hover:text-gold/70 transition-colors">Центар за грађански надзор</p>
                </div>
              </Link>
            </div>
            <p className="text-beige/80 leading-relaxed">
              Помажемо грађанима да се супротставе корупцији, мобингу и непотизму 
              у јавним предузећима и државним институцијама.
            </p>
          </div>
          
          <div className="md:col-span-3 flex flex-col items-start">
            <h4 className="text-gold font-medium text-lg mb-4 pb-2 border-b border-gold/20 relative before:absolute before:bottom-0 before:left-0 before:w-1/4 before:h-[2px] before:bg-gold/40">
              Брзи линкови
            </h4>
            <ul className="space-y-2 w-full pl-0">
              <li>
                <Link to="/" className="text-beige/80 hover:text-gold transition-colors duration-200 flex items-center group">
                  <span className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  Почетна
                </Link>
              </li>
              <li>
                <Link to="/o-nama" className="text-beige/80 hover:text-gold transition-colors duration-200 flex items-center group">
                  <span className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  О нама
                </Link>
              </li>
              <li>
                <Link to="/usluge" className="text-beige/80 hover:text-gold transition-colors duration-200 flex items-center group">
                  <span className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  Услуге
                </Link>
              </li>
              <li>
                <Link to="/resursi" className="text-beige/80 hover:text-gold transition-colors duration-200 flex items-center group">
                  <span className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  Ресурси
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-beige/80 hover:text-gold transition-colors duration-200 flex items-center group">
                  <span className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  Контакт
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="text-gold font-medium text-lg mb-4 pb-2 border-b border-gold/20 inline-block relative before:absolute before:bottom-0 before:left-0 before:w-1/2 before:h-[2px] before:bg-gold/40">
              Контакт
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start group">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-0.5 text-gold/80 group-hover:text-gold transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-beige/80 group-hover:text-beige transition-colors">Адреса канцеларије, Београд, Србија</span>
              </li>
              <li className="flex items-center group">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gold/80 group-hover:text-gold transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-beige/80 group-hover:text-beige transition-colors">info@pravonapravdu.rs</span>
              </li>
              <li className="flex items-center group">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gold/80 group-hover:text-gold transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-beige/80 group-hover:text-beige transition-colors">+381 11 123 4567</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-navy-light/50 hover:bg-navy-light text-gold hover:text-gold-light rounded-full transition-all duration-200 shadow-[0_0_10px_rgba(255,223,142,0.15)] hover:shadow-[0_0_15px_rgba(255,223,142,0.3)]">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="p-2 bg-navy-light/50 hover:bg-navy-light text-gold hover:text-gold-light rounded-full transition-all duration-200 shadow-[0_0_10px_rgba(255,223,142,0.15)] hover:shadow-[0_0_15px_rgba(255,223,142,0.3)]">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="p-2 bg-navy-light/50 hover:bg-navy-light text-gold hover:text-gold-light rounded-full transition-all duration-200 shadow-[0_0_10px_rgba(255,223,142,0.15)] hover:shadow-[0_0_15px_rgba(255,223,142,0.3)]">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.045-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 border-t border-gold/10 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 w-full">
            <div className="flex space-x-6 text-sm text-beige/60 order-1 md:order-2">
              <Link to="/politika-privatnosti" className="hover:text-gold hover:underline transition-colors">Политика приватности</Link>
              <Link to="/uslovi-koriscenja" className="hover:text-gold hover:underline transition-colors">Услови коришћења</Link>
            </div>
            <p className="text-sm text-beige/60 text-center md:text-left order-2 md:order-1">
              &copy; {currentYear} ПРАВО НА ПРАВДУ - Центар за грађански надзор. Сва права задржана.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
