
import { useState } from "react";
import MainLayout from "../components/layout/MainLayout";

const resources = [
  {
    id: 1,
    title: "Водич за узбуњиваче",
    category: "guides",
    description: "Комплетан водич о правима узбуњивача и корацима за безбедно пријављивање неправилности.",
    image: "https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 2,
    title: "Препознавање и пријављивање корупције",
    category: "guides",
    description: "Како препознати различите облике корупције у јавним институцијама и како их пријавити.",
    image: "https://images.unsplash.com/photo-1453945619913-79ec89a82c51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 3,
    title: "Водич кроз радна права",
    category: "guides",
    description: "Детаљан преглед права запослених према Закону о раду и механизама њихове заштите.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 4,
    title: "Закон о спречавању злостављања на раду",
    category: "legislation",
    description: "Анализа Закона о спречавању злостављања на раду са примерима и тумачењима.",
    image: "https://images.unsplash.com/photo-1423592707957-3b212afa6733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 5,
    title: "Закон о заштити узбуњивача",
    category: "legislation",
    description: "Објашњење одредби Закона о заштити узбуњивача и механизама заштите.",
    image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 6,
    title: "Успешно решен случај мобинга у јавном предузећу",
    category: "case-studies",
    description: "Анализа случаја системског мобинга у једном јавном предузећу и процес његовог разрешења.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 7,
    title: "Како документовати мобинг?",
    category: "guides",
    description: "Практични савети за препознавање и документовање случајева мобинга на радном месту.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 8,
    title: "Препознавање непотизма и партијског запошљавања",
    category: "guides",
    description: "Како препознати непотизам и партијско запошљавање у јавним институцијама.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
  },
  {
    id: 9,
    title: "Успешно разоткривена корупција у јавним набавкама",
    category: "case-studies",
    description: "Анализа случаја корупције у поступку јавне набавке и како је она разоткривена.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  }
];

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredResources = activeCategory === "all" 
    ? resources 
    : resources.filter(resource => resource.category === activeCategory);
  
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-navy py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-beige mb-6">Ресурси</h1>
            <p className="text-xl text-gold max-w-3xl mx-auto">
              Корисне информације, водичи и анализе за борбу против неправилности
            </p>
          </div>
        </div>
      </section>
      
      {/* Filter Categories */}
      <section className="bg-beige border-b border-gold/20">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-2">
            <button
              className={`px-4 py-2 mx-1 rounded-md whitespace-nowrap ${
                activeCategory === "all" ? "bg-navy text-beige" : "bg-white text-navy hover:bg-navy/10"
              }`}
              onClick={() => setActiveCategory("all")}
            >
              Сви ресурси
            </button>
            <button
              className={`px-4 py-2 mx-1 rounded-md whitespace-nowrap ${
                activeCategory === "guides" ? "bg-navy text-beige" : "bg-white text-navy hover:bg-navy/10"
              }`}
              onClick={() => setActiveCategory("guides")}
            >
              Водичи и упутства
            </button>
            <button
              className={`px-4 py-2 mx-1 rounded-md whitespace-nowrap ${
                activeCategory === "legislation" ? "bg-navy text-beige" : "bg-white text-navy hover:bg-navy/10"
              }`}
              onClick={() => setActiveCategory("legislation")}
            >
              Законска регулатива
            </button>
            <button
              className={`px-4 py-2 mx-1 rounded-md whitespace-nowrap ${
                activeCategory === "case-studies" ? "bg-navy text-beige" : "bg-white text-navy hover:bg-navy/10"
              }`}
              onClick={() => setActiveCategory("case-studies")}
            >
              Студије случаја
            </button>
          </div>
        </div>
      </section>
      
      {/* Resources Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource) => (
              <div key={resource.id} className="glass-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={resource.image} 
                    alt={resource.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-navy/10 text-navy mb-3">
                    {resource.category === "guides" && "Водич"}
                    {resource.category === "legislation" && "Законска регулатива"}
                    {resource.category === "case-studies" && "Студија случаја"}
                  </span>
                  <h3 className="text-xl font-bold text-navy mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <a href="#" className="text-gold hover:text-navy flex items-center font-medium">
                    Прочитај више
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {filteredResources.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium text-gray-700">Нема ресурса у овој категорији тренутно.</h3>
              <p className="mt-2 text-gray-500">Покушајте да изаберете другу категорију или погледајте све ресурсе.</p>
              <button 
                className="mt-4 btn-primary"
                onClick={() => setActiveCategory("all")}
              >
                Прикажи све ресурсе
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-12 bg-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
              Останите информисани
            </h2>
            <p className="text-gray-700 mb-8">
              Пријавите се на нашу мејлинг листу да бисте добијали најновије ресурсе, 
              вести и информације о борби против корупције и заштити права.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="Ваша имејл адреса" 
                className="flex-grow px-4 py-3 border border-gold/30 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
              />
              <button className="btn-primary whitespace-nowrap">
                Пријавите се
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Нећемо делити вашу имејл адресу са трећим лицима. Можете се одјавити у било ком тренутку.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Resources;
