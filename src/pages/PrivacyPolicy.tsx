import MainLayout from '@/components/layout/MainLayout';

const PrivacyPolicy = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-navy mb-8">Политика приватности</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-600 mb-8">
            Ваша приватност нам је од изузетне важности. Ова политика приватности објашњава како прикупљамо,
            користимо и штитимо ваше личне податке.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-12 mb-4">1. Прикупљање података</h2>
          <p>
            Прикупљамо само оне податке који су неопходни за пружање наших услуга и помоћи грађанима:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Основне личне информације (име, презиме)</li>
            <li>Контакт информације (е-маил адреса, број телефона)</li>
            <li>Информације везане за ваш случај</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mt-12 mb-4">2. Коришћење података</h2>
          <p>
            Прикупљене податке користимо искључиво у сврху:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Пружања правне помоћи и подршке</li>
            <li>Комуникације са вама у вези вашег случаја</li>
            <li>Унапређења наших услуга</li>
            <li>Статистичке анализе (у анонимизованом облику)</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mt-12 mb-4">3. Заштита података</h2>
          <p>
            Предузимамо све неопходне техничке и организационе мере како бисмо заштитили ваше личне податке од
            неовлашћеног приступа, измене, откривања или уништења.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-12 mb-4">4. Дељење података</h2>
          <p>
            Ваше личне податке не делимо са трећим лицима без ваше изричите сагласности, осим у случајевима
            када то захтева закон.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-12 mb-4">5. Ваша права</h2>
          <p>
            Имате право да:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Затражите приступ вашим личним подацима</li>
            <li>Исправите нетачне податке</li>
            <li>Затражите брисање ваших података</li>
            <li>Повучете сагласност за обраду података</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mt-12 mb-4">6. Контакт</h2>
          <p>
            За сва питања у вези са заштитом ваших личних података, можете нас контактирати на:
            <br />
            Е-маил: privacy@pravonapravdu.rs
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

export default PrivacyPolicy;