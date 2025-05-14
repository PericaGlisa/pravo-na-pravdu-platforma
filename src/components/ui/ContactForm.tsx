
import { useState } from "react";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Ваша порука је успешно послата!");
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        agreeToTerms: false
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-navy font-medium mb-1">Име и презиме *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
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
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
        <div>
          <label htmlFor="subject" className="block text-navy font-medium mb-1">Тема *</label>
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gold/30 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
          >
            <option value="">Изаберите тему</option>
            <option value="corruption">Корупција</option>
            <option value="mobbing">Мобинг</option>
            <option value="nepotism">Непотизам</option>
            <option value="other">Остало</option>
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-navy font-medium mb-1">Порука *</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gold/30 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
        ></textarea>
      </div>
      
      <div className="flex items-center">
        <input
          type="checkbox"
          id="agreeToTerms"
          name="agreeToTerms"
          required
          checked={formData.agreeToTerms}
          onChange={handleCheckboxChange}
          className="h-4 w-4 text-gold focus:ring-gold rounded"
        />
        <label htmlFor="agreeToTerms" className="ml-2 text-sm text-gray-700">
          Прочитао/ла сам и слажем се са <a href="/uslovi-koriscenja" className="text-gold hover:underline">условима коришћења</a> и <a href="/politika-privatnosti" className="text-gold hover:underline">политиком приватности</a> *
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
              Слање...
            </span>
          ) : (
            'Пошаљи поруку'
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
