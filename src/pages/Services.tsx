
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import CaseReportForm from "../components/ui/CaseReportForm";

const Services = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("services");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && ["services", "report", "process"].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);
  
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-navy py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-beige mb-6">Наше услуге</h1>
            <p className="text-xl text-gold max-w-3xl mx-auto">
              Помажемо грађанима да се изборе за правду и супротставе неправилностима
            </p>
          </div>
        </div>
      </section>
      
      {/* Tabs Navigation */}
      <section className="bg-beige border-b border-gold/20">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            <button
              className={`px-4 py-4 font-medium text-lg whitespace-nowrap ${
                activeTab === "services" ? "text-gold border-b-2 border-gold" : "text-navy hover:text-gold"
              }`}
              onClick={() => setActiveTab("services")}
            >
              Наше услуге
            </button>
            <button
              className={`px-4 py-4 font-medium text-lg whitespace-nowrap ${
                activeTab === "report" ? "text-gold border-b-2 border-gold" : "text-navy hover:text-gold"
              }`}
              onClick={() => setActiveTab("report")}
            >
              Пријавите случај
            </button>
            <button
              className={`px-4 py-4 font-medium text-lg whitespace-nowrap ${
                activeTab === "process" ? "text-gold border-b-2 border-gold" : "text-navy hover:text-gold"
              }`}
              onClick={() => setActiveTab("process")}
            >
              Процес рада
            </button>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Services Tab */}
          {activeTab === "services" && (
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                <div className="glass-card p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-16 text-gold">
                      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-navy mb-4">Пријава и истраживање корупције</h3>
                      <p className="text-gray-700 mb-4">
                        Пружамо сигуран и поверљив канал за пријављивање корупције у јавним институцијама. 
                        Наш тим правника и истраживача анализира сваку пријаву и предузима одговарајуће кораке:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>Анализа случаја и прикупљање додатних информација</li>
                        <li>Правна анализа и утврђивање могућих повреда закона</li>
                        <li>Пружање правних савета и подршке жртвама и сведоцима корупције</li>
                        <li>Упућивање случаја надлежним институцијама када постоје елементи кривичног дела</li>
                        <li>Медијско праћење случаја уколико је то у интересу јавности и уз сагласност пријавиоца</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-16 text-gold">
                      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-navy mb-4">Заштита од мобинга</h3>
                      <p className="text-gray-700 mb-4">
                        Мобинг је озбиљан проблем који погађа многе запослене у јавним институцијама. Наш тим пружа:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>Препознавање и документовање случајева мобинга</li>
                        <li>Правно саветовање о правима запослених према Закону о спречавању злостављања на раду</li>
                        <li>Помоћ у покретању интерних поступака заштите од злостављања</li>
                        <li>Правну подршку у судским споровима</li>
                        <li>Психолошку подршку жртвама мобинга кроз мрежу сарадника-психолога</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-16 text-gold">
                      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-navy mb-4">Борба против непотизма</h3>
                      <p className="text-gray-700 mb-4">
                        Непотизам и партијско запошљавање нарушавају принцип једнаких шанси и доводе до неефикасности јавног сектора. Наше услуге укључују:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>Анализа процеса запошљавања и напредовања у јавном сектору</li>
                        <li>Истраживање случајева непотизма и партијског запошљавања</li>
                        <li>Подношење пријава надлежним органима</li>
                        <li>Заступање кандидата који су оштећени нерегуларним конкурсима</li>
                        <li>Јавно заговарање за транспарентне процесе запошљавања</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-16 text-gold">
                      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-navy mb-4">Правна помоћ и консултације</h3>
                      <p className="text-gray-700 mb-4">
                        Пружамо стручну правну помоћ грађанима који се суочавају са различитим видовима неправилности у јавним институцијама:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>Бесплатне иницијалне консултације за процену случаја</li>
                        <li>Састављање поднесака, тужби и жалби</li>
                        <li>Заступање у управним поступцима</li>
                        <li>Припрема за сведочење и давање изјава надлежним органима</li>
                        <li>Повезивање са адвокатима специјализованим за одређене области права</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-16 text-gold">
                      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-navy mb-4">Едукација и информисање</h3>
                      <p className="text-gray-700 mb-4">
                        Верујемо да је превенција кључна у борби против неправилности. Зато редовно организујемо:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>Едукативне радионице о препознавању и пријављивању корупције</li>
                        <li>Информативне сесије о правима запослених</li>
                        <li>Обуке за узбуњиваче и активисте</li>
                        <li>Израду и дистрибуцију едукативних материјала</li>
                        <li>Онлајн курсеве и вебинаре о антикорупцијским темама</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <button 
                  className="btn-primary" 
                  onClick={() => setActiveTab("report")}
                >
                  Пријавите случај
                </button>
              </div>
            </div>
          )}
          
          {/* Report Case Tab */}
          {activeTab === "report" && (
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">Пријавите случај</h2>
              <p className="text-gray-700 mb-8">
                Уколико сте сведок или жртва корупције, мобинга или непотизма у јавном сектору, попуните формулар 
                испод. Сви подаци које поделите са нама биће третирани као строго поверљиви. Наш тим ће вас 
                контактирати у најкраћем могућем року.
              </p>
              
              <div className="glass-card p-8">
                <CaseReportForm />
              </div>
            </div>
          )}
          
          {/* Process Tab */}
          {activeTab === "process" && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8">Како функционише наш процес рада?</h2>
              
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-gold text-navy font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-3">Иницијални контакт</h3>
                    <p className="text-gray-700">
                      Први корак је да нас контактирате путем формулара на сајту, имејла или телефона. У овој фази, 
                      можете нам пружити основне информације о вашем случају. Уколико желите да останете анонимни, 
                      то је такође могуће.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-gold text-navy font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-3">Анализа случаја</h3>
                    <p className="text-gray-700">
                      Наш тим анализира информације које сте нам доставили и процењује да ли случај спада у домен 
                      нашег рада. Уколико је потребно, тражићемо додатне информације или доказе који могу помоћи 
                      у разумевању ситуације.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-gold text-navy font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-3">Консултације и план акције</h3>
                    <p className="text-gray-700">
                      Након детаљне анализе случаја, организујемо консултације (лично или онлајн) током којих вас 
                      информишемо о правним опцијама и могућим корацима. Заједно развијамо план акције који одговара 
                      вашој ситуацији и циљевима.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-gold text-navy font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-3">Имплементација</h3>
                    <p className="text-gray-700">
                      У зависности од природе случаја и договореног плана, предузимамо одговарајуће кораке: пружање 
                      правне подршке, састављање документације, подношење пријава надлежним органима, или други видови 
                      помоћи. Током целог процеса, одржавамо редовну комуникацију са вама.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-gold text-navy font-bold text-xl">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-3">Праћење и подршка</h3>
                    <p className="text-gray-700">
                      Наш рад не завршава се подношењем пријаве или покретањем поступка. Настављамо да пратимо случај 
                      и пружамо континуирану подршку током целог процеса, укључујући и подршку током евентуалних 
                      судских поступака.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-gold text-navy font-bold text-xl">
                    6
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-3">Евалуација и затварање случаја</h3>
                    <p className="text-gray-700">
                      По окончању поступка, заједно анализирамо резултате и учимо из искуства. Иако је званични процес 
                      завршен, наша врата остају отворена за додатну подршку и савете уколико су потребни у будућности.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <div className="glass-card p-8">
                  <h3 className="text-xl font-bold text-navy mb-4">Гаранција поверљивости</h3>
                  <p className="text-gray-700">
                    Сви подаци које нам доставите третирају се као строго поверљиви. Наш тим поштује највише 
                    стандарде заштите информација и приватности. Ниједан корак не предузимамо без вашег изричитог 
                    одобрења, а ваш идентитет откривамо само уколико је то апсолутно неопходно за правне поступке 
                    и уз вашу сагласност.
                  </p>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <button 
                  className="btn-primary" 
                  onClick={() => setActiveTab("report")}
                >
                  Пријавите случај
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default Services;
