import { experience } from '../data/resume';
import { Briefcase } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-[2px] bg-gradient-to-r from-accent-400 to-teal-400" />
          <span className="text-sm font-medium text-accent-400 uppercase tracking-wider">
            Experience
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Where I've worked
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-400/50 via-teal-400/50 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="relative flex gap-6 md:gap-10">
                {/* Timeline dot */}
                <div className="hidden md:flex flex-shrink-0 w-16 items-start justify-center pt-6">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-accent-400 to-teal-400 ring-4 ring-dark-900" />
                </div>

                {/* Content */}
                <div className="flex-1 glass-card rounded-xl p-6 hover:border-white/10 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {job.role}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Briefcase size={14} />
                        <span className="text-sm">{job.company}</span>
                      </div>
                    </div>
                    <span className="text-sm text-accent-400 font-medium mt-1 md:mt-0">
                      {job.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {job.highlights.slice(0, 3).map((highlight, i) => (
                      <li
                        key={i}
                        className="text-sm text-gray-400 flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400/60 mt-1.5 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-xs rounded-md bg-accent-400/10 text-accent-400 border border-accent-400/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
