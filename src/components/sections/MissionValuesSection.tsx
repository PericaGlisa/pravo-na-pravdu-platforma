import React from 'react';
import { Link } from 'react-router-dom';

const values = [
  { 
    id: 1, 
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: 'Правда', 
    description: 'Верујемо да правда мора бити доступна свима, без обзира на друштвени или економски статус.'
  },
  { 
    id: 2, 
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Интегритет', 
    description: 'Поступамо етички и у складу са највишим професионалним стандардима у свим нашим активностима.'
  },
  { 
    id: 3, 
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Храброст', 
    description: 'Не устручавамо се да се суочимо са моћним интересима ради општег добра и заштите права грађана.'
  },
  { 
    id: 4, 
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Солидарност', 
    description: 'Стојимо уз све грађане који се боре за своја права и пружамо им подршку у тешким тренуцима.'
  },
];

const MissionValuesSection = () => {
  return (
    <section className="bg-navy py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-beige mb-4">Наша мисија и вредности</h2>
          <p className="text-gold text-lg max-w-3xl mx-auto">
            Посвећени смо стварању праведног друштва у којем институције служе грађанима, а не појединцима или партијским интересима
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div 
              key={value.id} 
              className="bg-navy-dark p-6 rounded-lg shadow-lg border border-gold/20 hover:border-gold/40 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-gold mb-4">{value.icon}</div>
              <h3 className="text-beige text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-beige/80">{value.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/o-nama" className="inline-block px-6 py-3 bg-gold text-navy font-medium rounded-md hover:bg-gold/90 transition-colors duration-300 shadow-md">
            Сазнајте више о нашем раду
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MissionValuesSection;