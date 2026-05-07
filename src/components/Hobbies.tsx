import { Dog, Dumbbell, Music, Heart } from 'lucide-react';

const hobbies = [
  {
    title: 'Abby',
    description: 'My French Bulldog and best companion. She keeps me grounded and always makes me smile.',
    icon: Dog,
    color: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Weightlifting',
    description: 'Hitting the gym and pushing limits. Strength training keeps me disciplined and focused.',
    icon: Dumbbell,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Belly Dancing',
    description: 'A creative outlet that combines rhythm, expression, and culture. Love the artistry of it.',
    icon: Music,
    color: 'from-accent-400 to-teal-400',
  },
  {
    title: 'Staying Active',
    description: 'Whether it\'s a morning run, hiking, or just getting outdoors - movement is part of my daily life.',
    icon: Heart,
    color: 'from-green-500 to-emerald-500',
  },
];

export function Hobbies() {
  return (
    <section id="hobbies" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-[2px] bg-gradient-to-r from-accent-400 to-teal-400" />
          <span className="text-sm font-medium text-accent-400 uppercase tracking-wider">
            Life Outside Code
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          When I'm not coding
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby) => (
            <div
              key={hobby.title}
              className="glass-card rounded-xl p-6 hover:border-white/10 hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div
                className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-r ${hobby.color} flex items-center justify-center opacity-80`}
              >
                <hobby.icon size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {hobby.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {hobby.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
