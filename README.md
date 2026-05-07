# Dania Reza - Portfolio

Personal portfolio website built with React, TypeScript, Tailwind CSS, and Vite.

## Tech Stack

- **React** + **TypeScript** - UI framework
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Lucide Icons** - Icon library
- **Vercel** - Deployment

## Features

- Dark-themed modern UI with glassmorphism effects
- GitHub activity integration (fetches from GitHub API)
- Responsive design (mobile-first)
- Contact form (opens mailto)
- Animated gradient accents and smooth scrolling
- Categorized skills display
- Experience timeline
- Project showcase cards

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This project is configured for Vercel deployment:

1. Push to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Vercel auto-detects the Vite framework and deploys

Or deploy via CLI:

```bash
npx vercel
```

## Configuration

- Update your GitHub username in `src/components/GitHubActivity.tsx` (line 7)
- Update personal info in `src/data/resume.ts`
- Add a `public/resume.pdf` file for the resume download link

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── GitHubActivity.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   └── resume.ts
├── hooks/
│   └── useGitHubActivity.ts
├── App.tsx
├── main.tsx
└── index.css
```
