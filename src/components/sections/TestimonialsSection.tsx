
const testimonials = [
  {
    id: 1,
    content: "Захваљујући Центру 'Право на правду', успео сам да докажем неправилности у процесу јавне набавке у мојој општини. Њихов тим ми је пружио сву потребну правну подршку.",
    author: "Д.М.",
    position: "Грађанин из Крагујевца",
  },
  {
    id: 2,
    content: "Када сам се суочила са мобингом на радном месту, нисам знала коме да се обратим. Тим 'Право на правду' ми је помогао да заштитим своја права и задржим радно место без страха.",
    author: "А.Ј.",
    position: "Запослена у јавном предузећу",
  },
  {
    id: 3,
    content: "Годинама сам као новинар покушавао да разоткријем случајеве непотизма, али тек уз подршку овог удружења сам успео да дођем до конкретних доказа и резултата.",
    author: "М.П.",
    position: "Истраживачки новинар",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Шта кажу о нама</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Прочитајте искуства људи којима смо помогли у борби за правду
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="glass-card p-8">
              <svg className="h-8 w-8 text-gold mb-4" fill="currentColor" viewBox="0 0 32 32">
                <path d="M14 9.3c-.4-1-1.2-1.9-2.3-2.6-.9-.6-2-1-3.2-1.1-.1 0-.3 0-.4.2-.2.2-.1.4 0 .5.7.9 1.2 1.9 1.4 3 .3 1.3.1 2.8-.5 4.2-1.4 2.7-1.7 5.7-.9 8.7.6 2.3 1.9 4.3 3.7 5.5.6.4 1.2.6 1.9.6.5 0 1-.2 1.5-.5 1-.7 1.6-1.9 1.6-3.1-.1-2.5-1.8-4.8-1.9-7.3-.1-2.7 0-5.2.1-8.1z"/>
                <path d="M31 9.3c-.4-1-1.2-1.9-2.3-2.6-.9-.6-2-1-3.2-1.1-.1 0-.3 0-.4.2-.2.2-.1.4 0 .5.7.9 1.2 1.9 1.4 3 .3 1.3.1 2.8-.5 4.2-1.4 2.7-1.7 5.7-.9 8.7.6 2.3 1.9 4.3 3.7 5.5.6.4 1.2.6 1.9.6.5 0 1-.2 1.5-.5 1-.7 1.6-1.9 1.6-3.1-.1-2.5-1.8-4.8-1.9-7.3-.1-2.7-.1-5.2 0-8.1z"/>
              </svg>
              
              <p className="text-gray-700 mb-6 italic">{testimonial.content}</p>
              
              <div>
                <p className="text-navy font-semibold">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
