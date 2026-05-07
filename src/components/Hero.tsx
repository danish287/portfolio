import { ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/resume';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Profile Photo */}
        <div className="mb-8">
          <div className="w-40 h-40 mx-auto rounded-full overflow-hidden ring-4 ring-accent-400/30 shadow-lg shadow-accent-400/20">
            <img
              src="/profile.jpg"
              alt="Dania Reza"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Hi, I'm{' '}
          <span className="gradient-text">{personalInfo.name}</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-4 font-light">
          {personalInfo.title}
        </p>

        <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Building scalable cloud-native applications, AI-powered platforms, and
          enterprise systems with AWS, LangChain, and modern DevOps practices.
        </p>

        <div className="flex items-center justify-center gap-4 mb-12">
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-accent-400 to-accent-500 text-white font-medium hover:shadow-lg hover:shadow-accent-400/25 transition-all duration-300"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg border border-white/10 text-gray-300 hover:border-white/25 hover:text-white transition-all duration-300"
          >
            View Projects
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-600" size={24} />
        </div>
      </div>
    </section>
  );
}
