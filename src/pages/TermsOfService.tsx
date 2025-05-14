import MainLayout from '@/components/layout/MainLayout';

const TermsOfService = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-navy mb-8">Услови коришћења</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-600 mb-8">
            Молимо вас да пажљиво прочитате ове услове коришћења пре употребе наше платформе и услуга.
            Коришћењем наших услуга, сагласни сте са овим условима.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-12 mb-4">1. Опште одредбе</h2>
          <p>
            Платформа "Право на правду" је намењена пружању подршке грађанима у остваривању њихових права
            и супротстављању неправилностима у јавним институцијама и државним предузећима.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-12 mb-4">2. Услуге</h2>
          <p>
            Наше услуге укључују:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Правну подршку и саветовање</li>
            <li>Помоћ у припреми документације</li>
            <li>Заступање интереса грађана</li>
            <li>Едукативне материјале и ресурсе</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mt-12 mb-4">3. Права и обавезе корисника</h2>
          <p>
            Као корисник наших услуга, имате обавезу да:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Пружите тачне и истините информације</li>
            <li>Не злоупотребљавате наше услуге</li>
            <li>Поштујете права других корисника</li>
            <li>Чувате поверљивост добијених информација</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mt-12 mb-4">4. Ограничење одговорности</h2>
          <p>
            Иако се трудимо да пружимо најквалитетније услуге, не можемо гарантовати успех у сваком
            појединачном случају. Наша организација не сноси одговорност за:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Исход правних поступака</li>
            <li>Одлуке надлежних органа</li>
            <li>Индиректну или последичну штету</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mt-12 mb-4">5. Интелектуална својина</h2>
          <p>
            Сви материјали на нашој платформи су заштићени ауторским правима. Није дозвољено копирање,
            дистрибуција или модификација садржаја без наше изричите сагласности.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-12 mb-4">6. Раскид сарадње</h2>
          <p>
            Задржавамо право да прекинемо пружање услуга корисницима који крше ове услове коришћења или
            злоупотребљавају наше услуге.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-12 mb-4">7. Измене услова коришћења</h2>
          <p>
            Задржавамо право да изменимо ове услове коришћења у било ком тренутку. О свим значајним
            изменама бићете благовремено обавештени.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-12 mb-4">8. Контакт</h2>
          <p>
            За сва питања у вези са условима коришћења, можете нас контактирати на:
            <br />
            Е-маил: info@pravonapravdu.rs
            <br />
            Телефон: +381 11 123 4567
          </p>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Последње ажурирање: 1. март 2025.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TermsOfService;