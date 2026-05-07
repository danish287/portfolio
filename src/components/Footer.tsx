import { personalInfo } from '../data/resume';

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {personalInfo.name}. Built with React,
          TypeScript & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
