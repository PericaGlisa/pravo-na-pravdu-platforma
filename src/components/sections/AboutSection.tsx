
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-64 h-64 bg-gold/20 rounded-lg -z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Тим Право на правду"
                className="rounded-lg shadow-lg object-cover w-full h-[400px]"
              />
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-navy/10 rounded-lg -z-10"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">О нама</h2>
            
            <p className="text-lg mb-4">
              <span className="font-semibold text-navy">ПРАВО НА ПРАВДУ</span> је независно удружење које помаже грађанима
              у борби против неправилности у јавним институцијама и државним предузећима.
            </p>
            
            <p className="text-gray-700 mb-6">
              Наш тим чине искусни правници, адвокати и стручњаци из различитих области који су посвећени 
              успостављању владавине права и заштити права грађана. Верујемо да свако има право на правду
              и да корупција, мобинг и непотизам морају бити искорењени из нашег друштва.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <svg className="h-6 w-6 text-gold mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p><strong className="text-navy">Мисија:</strong> Стварање правичног друштва у којем институције служе грађанима, а не појединцима.</p>
              </div>
              <div className="flex items-start">
                <svg className="h-6 w-6 text-gold mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p><strong className="text-navy">Визија:</strong> Друштво у којем је корупција искорењена, а правда доступна сваком грађанину.</p>
              </div>
              <div className="flex items-start">
                <svg className="h-6 w-6 text-gold mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p><strong className="text-navy">Вредности:</strong> Интегритет, транспарентност, поверљивост и професионализам.</p>
              </div>
            </div>
            
            <Link to="/o-nama" className="btn-primary">
              Сазнајте више о нама
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
