import { Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../data/resume';

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-[2px] bg-gradient-to-r from-accent-400 to-teal-400" />
          <span className="text-sm font-medium text-accent-400 uppercase tracking-wider">
            Contact
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Get in touch
        </h2>
        <p className="text-gray-400 mb-10 leading-relaxed max-w-xl">
          I'm always open to discussing new opportunities, interesting projects,
          or just having a conversation about technology. Feel free to reach out!
        </p>

        <div className="grid sm:grid-cols-3 gap-4">
          <a
            href={`mailto:${personalInfo.email}`}
            className="glass-card rounded-xl p-6 hover:border-white/10 transition-all group text-center"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-accent-400/10 group-hover:bg-accent-400/20 transition-colors flex items-center justify-center">
              <Mail size={20} className="text-accent-400" />
            </div>
            <p className="text-xs text-gray-500 mb-1">Email</p>
            <p className="text-sm text-gray-300 break-all">{personalInfo.email}</p>
          </a>

          <div className="glass-card rounded-xl p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-accent-400/10 flex items-center justify-center">
              <Phone size={20} className="text-accent-400" />
            </div>
            <p className="text-xs text-gray-500 mb-1">Phone</p>
            <p className="text-sm text-gray-300">{personalInfo.phone}</p>
          </div>

          <div className="glass-card rounded-xl p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-accent-400/10 flex items-center justify-center">
              <MapPin size={20} className="text-accent-400" />
            </div>
            <p className="text-xs text-gray-500 mb-1">Location</p>
            <p className="text-sm text-gray-300">United States</p>
          </div>
        </div>
      </div>
    </section>
  );
}
