import { skills } from '../data/resume';
import {
  Code2,
  Layers,
  Brain,
  Cloud,
  Database,
  Wrench,
} from 'lucide-react';

const skillCategories = [
  { title: 'Languages', icon: Code2, items: skills.languages, color: 'from-violet-500 to-purple-500' },
  { title: 'Frameworks & Libraries', icon: Layers, items: skills.frameworks, color: 'from-blue-500 to-cyan-500' },
  { title: 'AI / ML', icon: Brain, items: skills.aiMl, color: 'from-accent-400 to-teal-400' },
  { title: 'Cloud & DevOps', icon: Cloud, items: skills.cloud, color: 'from-orange-500 to-yellow-500' },
  { title: 'Databases', icon: Database, items: skills.databases, color: 'from-green-500 to-emerald-500' },
  { title: 'Observability & Tools', icon: Wrench, items: skills.tools, color: 'from-rose-500 to-pink-500' },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-[2px] bg-gradient-to-r from-accent-400 to-teal-400" />
          <span className="text-sm font-medium text-accent-400 uppercase tracking-wider">
            Technical Skills
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Technologies I work with
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="glass-card rounded-xl p-6 hover:border-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-2 rounded-lg bg-gradient-to-r ${category.color} opacity-80`}
                >
                  <category.icon size={18} className="text-white" />
                </div>
                <h3 className="text-white font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/5 group-hover:border-white/10 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
