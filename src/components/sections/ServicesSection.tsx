
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Пријава корупције",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
      </svg>
    ),
    description: "Дискретан начин пријављивања корупције у јавним институцијама. Обезбеђујемо заштиту идентитета и правну подршку.",
  },
  {
    id: 2,
    title: "Заштита од мобинга",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    description: "Подршка и савети за запослене који су жртве злостављања на радном месту. Помоћ у остваривању права на достојанствен рад.",
  },
  {
    id: 3,
    title: "Борба против непотизма",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    description: "Раскринкавање незаконитог запошљавања и напредовања по основу породичних или партијских веза у јавном сектору.",
  },
  {
    id: 4,
    title: "Правна помоћ",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    description: "Консултације и савети из области радног права, заштите узбуњивача и борбе против дискриминације.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-beige-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Наше услуге</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Помажемо грађанима да се изборе за правду кроз систем пријављивања неправилности и правну подршку.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="glass-card p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="text-gold mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link to="/usluge" className="text-gold hover:text-navy font-medium inline-flex items-center">
                Сазнај више
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/usluge" className="btn-primary">
            Погледајте све услуге
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
