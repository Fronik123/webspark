# Webspark

A single-page landing built with React and Vite. It displays a social media profile dashboard with static post data, engagement metrics, and simple filtering controls.

## Features

- Profile header with stats (posts, followers, following)
- Date range filter with calendar picker
- Grid and list view toggle
- Post cards with current and historical likes/comments
- Load more pagination
- Responsive layout

## Tech Stack

- React 19
- Vite
- Flatpickr (date picker)
- CSS Modules

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
├── components/     # UI components (header, posts, toolbar, etc.)
├── data/           # Static profile and posts data
├── utils/          # Helper functions (date filtering)
└── assets/         # Images and icons
```
