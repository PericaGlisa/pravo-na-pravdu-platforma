
const stats = [
  { id: 1, value: '156+', label: 'Успешних случајева' },
  { id: 2, value: '95%', label: 'Задовољних клијената' },
  { id: 3, value: '12', label: 'Година искуства' },
  { id: 4, value: '320+', label: 'Правних консултација' },
];

const StatsSection = () => {
  return (
    <section className="bg-navy py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-gold text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-beige text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
