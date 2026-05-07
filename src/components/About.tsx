import { personalInfo } from '../data/resume';

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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Passionate about building{' '}
              <span className="gradient-text">intelligent systems</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              {personalInfo.summary}
            </p>
            <p className="text-gray-400 leading-relaxed">
              Strong background in Java, TypeScript, Python, Spring Boot, Angular,
              and modern DevOps practices. Passionate about building secure,
              efficient, and highly observable systems that improve user experience
              and operational reliability.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">5+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">100K+</div>
              <div className="text-sm text-gray-400">Users Served</div>
            </div>
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">22</div>
              <div className="text-sm text-gray-400">LLMs Benchmarked</div>
            </div>
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">92%</div>
              <div className="text-sm text-gray-400">Classification Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
