import { personalInfo, education } from '../data/resume';
import { GraduationCap, BookOpen } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-[2px] bg-gradient-to-r from-accent-400 to-teal-400" />
          <span className="text-sm font-medium text-accent-400 uppercase tracking-wider">
            About Me
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Passionate about building{' '}
              <span className="gradient-text">intelligent systems</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              {personalInfo.summary}
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Strong background in Java, TypeScript, Python, Spring Boot, Angular,
              and modern DevOps practices. Passionate about building secure,
              efficient, and highly observable systems that improve user experience
              and operational reliability.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="glass-card rounded-xl p-5 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">5+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="glass-card rounded-xl p-5 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">100K+</div>
                <div className="text-sm text-gray-400">Users Served</div>
              </div>
              <div className="glass-card rounded-xl p-5 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">22</div>
                <div className="text-sm text-gray-400">LLMs Benchmarked</div>
              </div>
              <div className="glass-card rounded-xl p-5 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">92%</div>
                <div className="text-sm text-gray-400">Classification Accuracy</div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap size={24} className="text-accent-400" />
              <h3 className="text-xl font-semibold text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="glass-card rounded-xl p-6 hover:border-white/10 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-accent-400/20 to-teal-400/20 mt-1">
                      <BookOpen size={18} className="text-accent-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {edu.school}
                      </h4>
                      <p className="text-sm text-gray-300 mb-1">{edu.degree}</p>
                      {edu.minor && (
                        <p className="text-sm text-gray-500">{edu.minor}</p>
                      )}
                      <span className="inline-block mt-2 text-xs px-3 py-1 rounded-full bg-accent-400/10 text-accent-400 border border-accent-400/20">
                        {edu.year}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional about highlights */}
            <div className="mt-6 glass-card rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-3">What drives me</h4>
              <ul className="space-y-2">
                <li className="text-sm text-gray-400 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400/60 mt-1.5 flex-shrink-0" />
                  Duke University alum with a unique blend of Computer Science and Visual & Media Studies
                </li>
                <li className="text-sm text-gray-400 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400/60 mt-1.5 flex-shrink-0" />
                  Building AI systems that make real impact on 100K+ students
                </li>
                <li className="text-sm text-gray-400 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400/60 mt-1.5 flex-shrink-0" />
                  Bridging the gap between cutting-edge AI and enterprise reliability
                </li>
                <li className="text-sm text-gray-400 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400/60 mt-1.5 flex-shrink-0" />
                  Continuous learner - from full-stack bootcamps to cloud architecture
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
