
import MainLayout from "../components/layout/MainLayout";
import ContactForm from "../components/ui/ContactForm";

const Contact = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-navy py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-beige mb-6">Контакт</h1>
            <p className="text-xl text-gold max-w-3xl mx-auto">
              Повежите се са нама и започните процес заштите ваших права
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">Контактирајте нас</h2>
              <p className="text-gray-700 mb-8">
                Имате питање или желите да пријавите случај? Попуните формулар и наш тим ће вас контактирати 
                у најкраћем могућем року. Сви подаци које поделите са нама биће третирани као строго поверљиви.
              </p>
              
              <div className="glass-card p-8 mb-8">
                <ContactForm />
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">Информације о нама</h2>
              <div className="space-y-8">
                <div className="glass-card p-6">
                  <h3 className="text-xl font-semibold text-navy mb-3">Локација канцеларије</h3>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 mr-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-gray-700">
                        Улица и број <br />
                        11000 Београд, Србија
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        Закажите састанак пре посете
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-6">
                  <h3 className="text-xl font-semibold text-navy mb-3">Радно време</h3>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 mr-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-gray-700">
                        Понедељак - Петак: 9:00 - 17:00 <br />
                        Субота - Недеља: Затворено
                      </p>
                      <p className="text-sm text-navy font-medium mt-2">
                        Контакт путем имејла и телефона доступан нон-стоп
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-6">
                  <h3 className="text-xl font-semibold text-navy mb-3">Контакт информације</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <svg className="h-6 w-6 mr-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-700">info@pravonapravdu.rs</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-6 w-6 mr-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-gray-700">+381 11 123 4567</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-6 w-6 mr-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                      <span className="text-gray-700">Поверљива линија: +381 11 987 6543</span>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-6">
                  <h3 className="text-xl font-semibold text-navy mb-3">Пратите нас</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-navy text-beige p-2 rounded-full hover:bg-gold hover:text-navy transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-navy text-beige p-2 rounded-full hover:bg-gold hover:text-navy transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="bg-navy text-beige p-2 rounded-full hover:bg-gold hover:text-navy transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="glass-card p-4 h-96">
            {/* Placeholder for map */}
            <div className="bg-navy/10 h-full w-full flex items-center justify-center">
              <p className="text-navy font-medium">Google Maps ће бити интегрисан овде</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
