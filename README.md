# Game Portal

A modern game portal built with Next.js 14, React, and Tailwind CSS.

## Features

- Modern, responsive design
- Server-side rendering
- Dynamic game pages
- SEO optimized
- Type-safe with TypeScript
- Styling with Tailwind CSS
- Optimized images with Next.js Image component

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/src/app` - Next.js app router pages
- `/src/components` - React components
- `/src/lib` - Utility functions and data fetching
- `/config` - Game and FAQ configurations
- `/public` - Static assets

## Configuration

Game configurations are stored in JSON files under the `/config` directory:
- `/config/games/games.json` - Main game configurations
- `/config/games/trending.json` - Trending games list
- `/config/faqs/faqs.json` - General FAQs
- `/config/faqs/game_faqs.json` - Game-specific FAQs

## Built With

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
