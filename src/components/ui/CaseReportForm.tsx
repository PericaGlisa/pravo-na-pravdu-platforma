
import { useState } from "react";
import { toast } from "sonner";

const CaseReportForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    institution: '',
    caseType: '',
    description: '',
    evidence: null as File | null,
    anonymous: false,
    agreeToTerms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, evidence: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Ваша пријава случаја је успешно послата!");
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        institution: '',
        caseType: '',
        description: '',
        evidence: null,
        anonymous: false,
        agreeToTerms: false
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="p-4 bg-gold/10 border border-gold/30 rounded-md mb-6">
        <p className="text-navy text-sm">
          <strong>Важно:</strong> Сви подаци које пошаљете биће третирани као строго поверљиви. 
          Можете изабрати опцију анонимне пријаве уколико желите додатну заштиту идентитета.
        </p>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-navy font-semibold">Лични подаци</h3>
        
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="anonymous"
            name="anonymous"
            checked={formData.anonymous}
            onChange={handleCheckboxChange}
            className="h-4 w-4 text-gold focus:ring-gold rounded"
          />
          <label htmlFor="anonymous" className="ml-2 text-sm text-navy">
            Желим да останем анониман/на
          </label>
        </div>
        
        {!formData.anonymous && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="fullName" className="block text-navy font-medium mb-1">Име и презиме</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gold/30 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-navy font-medium mb-1">Имејл адреса *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gold/30 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-navy font-medium mb-1">Телефон</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gold/30 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
              />
            </div>
          </div>
        )}
      </div>
      
      <div className="space-y-4">
        <h3 className="text-navy font-semibold">Информације о случају</h3>
        
        <div>
          <label htmlFor="institution" className="block text-navy font-medium mb-1">Институција/предузеће *</label>
          <input
            type="text"
            id="institution"
            name="institution"
            required
            value={formData.institution}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gold/30 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
            placeholder="Назив институције или јавног предузећа"
          />
        </div>
        
        <div>
          <label htmlFor="caseType" className="block text-navy font-medium mb-1">Врста случаја *</label>
          <select
            id="caseType"
            name="caseType"
            required
            value={formData.caseType}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gold/30 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
          >
            <option value="">Изаберите врсту случаја</option>
            <option value="corruption">Корупција</option>
            <option value="mobbing">Мобинг</option>
            <option value="nepotism">Непотизам</option>
            <option value="discrimination">Дискриминација</option>
            <option value="abuse">Злоупотреба положаја</option>
            <option value="other">Остало</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="description" className="block text-navy font-medium mb-1">Опис случаја *</label>
          <textarea
            id="description"
            name="description"
            rows={5}
            required
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gold/30 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
            placeholder="Молимо вас да детаљно опишете случај, укључујући датуме, актере и све друге релевантне информације."
          ></textarea>
        </div>
        
        <div>
          <label htmlFor="evidence" className="block text-navy font-medium mb-1">Додатни документи (опционо)</label>
          <input
            type="file"
            id="evidence"
            name="evidence"
            onChange={handleFileChange}
            className="w-full px-4 py-2 border border-gold/30 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
          />
          <p className="text-xs text-gray-500 mt-1">
            Можете приложити документе који поткрепљују ваш случај (PDF, DOCX, JPG, PNG; максимално 5MB)
          </p>
        </div>
      </div>
      
      <div className="flex items-start pt-4">
        <input
          type="checkbox"
          id="agreeToTerms"
          name="agreeToTerms"
          required
          checked={formData.agreeToTerms}
          onChange={handleCheckboxChange}
          className="h-4 w-4 mt-1 text-gold focus:ring-gold rounded"
        />
        <label htmlFor="agreeToTerms" className="ml-2 text-sm text-gray-700">
          Разумем и потврђујем да Центар „ПРАВО НА ПРАВДУ" не може гарантовати исход случаја, али ће поступати професионално и у складу са законским могућностима. Прочитао/ла сам и слажем се са <a href="/uslovi-koriscenja" className="text-gold hover:underline">условима коришћења</a> и <a href="/politika-privatnosti" className="text-gold hover:underline">политиком приватности</a>. *
        </label>
      </div>
      
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full md:w-auto"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Слање пријаве...
            </span>
          ) : (
            'Пошаљи пријаву'
          )}
        </button>
      </div>
    </form>
  );
};

export default CaseReportForm;
