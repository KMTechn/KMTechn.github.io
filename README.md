# KMTECH Website

This project is a modern, professional website for KMTECH, built with React and Vite. It serves as the main informational hub for the company, detailing services, company background, and contact information.

## Tech Stack

- **Frontend:** React 19, React Router
- **Build Tool:** Vite
- **Styling:** CSS with modern conventions (CSS Variables)
- **Testing:** Vitest, React Testing Library
- **Linting:** ESLint

## Project Structure

```
/
├── public/              # Static assets (logos, images)
├── src/
│   ├── assets/          # Component-specific assets
│   ├── components/      # Reusable UI components (Header, Footer)
│   ├── pages/           # Top-level page components (Home, About)
│   ├── styles/          # Global styles
��   ├── tests/           # Test files and setup
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global stylesheet
├── .gitignore
├── package.json
└── vite.config.js
```

## Available Scripts

### `npm install`

Installs all the necessary dependencies to run the project.

### `npm run dev`

Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in the browser. The page will reload if you make edits.

### `npm run build`

Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run lint`

Lints the project files to catch and fix code style issues.

### `npm run test`

Launches the test runner in interactive watch mode.

## Getting Started

1.  Clone the repository.
2.  Run `npm install`.
3.  Run `npm run dev`.