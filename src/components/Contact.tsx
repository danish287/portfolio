import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { personalInfo, education } from '../data/resume';

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-[2px] bg-gradient-to-r from-accent-400 to-teal-400" />
          <span className="text-sm font-medium text-accent-400 uppercase tracking-wider">
            Contact
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Get in touch
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects,
              or just having a conversation about technology. Feel free to reach out!
            </p>

            <div className="space-y-4 mb-10">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 glass-card rounded-lg hover:border-white/10 transition-all group"
              >
                <div className="p-2 rounded-lg bg-accent-400/10 group-hover:bg-accent-400/20 transition-colors">
                  <Mail size={18} className="text-accent-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="text-sm text-gray-300">{personalInfo.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 glass-card rounded-lg">
                <div className="p-2 rounded-lg bg-accent-400/10">
                  <Phone size={18} className="text-accent-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Phone</p>
                  <p className="text-sm text-gray-300">{personalInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 glass-card rounded-lg">
                <div className="p-2 rounded-lg bg-accent-400/10">
                  <MapPin size={18} className="text-accent-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="text-sm text-gray-300">United States</p>
                </div>
              </div>
            </div>

            {/* Education */}
            <h3 className="text-lg font-semibold text-white mb-4">Education</h3>
            <div className="space-y-3">
              {education.map((edu, index) => (
                <div key={index} className="glass-card rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium text-white">
                      {edu.school}
                    </h4>
                    <span className="text-xs text-accent-400">{edu.year}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">{edu.degree}</p>
                  {edu.minor && (
                    <p className="text-xs text-gray-500 mt-0.5">{edu.minor}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-6">
              Send a message
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const email = personalInfo.email;
                const subject = formData.get('subject') as string;
                const message = formData.get('message') as string;
                window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
              }}
              className="space-y-4"
            >
              <div>
                <label className="text-xs text-gray-400 mb-1 block">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-white/5 text-gray-200 text-sm placeholder-gray-600 focus:outline-none focus:border-accent-400/50 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 mb-1 block">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-white/5 text-gray-200 text-sm placeholder-gray-600 focus:outline-none focus:border-accent-400/50 transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 mb-1 block">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-white/5 text-gray-200 text-sm placeholder-gray-600 focus:outline-none focus:border-accent-400/50 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-accent-400 to-accent-500 text-white font-medium hover:shadow-lg hover:shadow-accent-400/25 transition-all duration-300"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
