# Birthday Site

A joyful, premium, celebratory React application created as part of the Surprise Websites project.

## Features
- Bright, classy birthday aesthetic with soft gradients and playful animations
- Hero section with live countdown timer
- Interactive 22 "Little Surprises" gift grid
- Polaroid-style memory gallery
- Typewriter birthday message
- Grand surprise reveal with confetti and placeholder video/QR code

## Getting Started

First, install the required dependencies:
```bash
npm install
```

Then start the development server:
```bash
npm run dev
```

## Adding Your Content
To customize the birthday surprise, edit data in the following locations:
- `src/data/giftsData.js`
- `src/data/reasonsData.js`
- `src/data/memoriesData.js`
- `src/components/letter/BirthdayLetter.jsx`
- Replace placeholder text in `src/components/home/BirthdayHero.jsx`
- Add your photos in `public/images/`
- Replace the music in `public/music/birthday-theme.mp3`

## Tech Stack
- React
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- Canvas Confetti
- Lucide React (Icons)
