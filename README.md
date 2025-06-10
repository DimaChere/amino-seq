# Amino Sequence Alignment Tool

A modern web application for aligning and analyzing amino acid sequences, built with React, TypeScript, and Material-UI.

## Features

- Modern, responsive user interface built with Material-UI
- Type-safe development with TypeScript
- Form handling with React Hook Form and Zod validation
- Fast development and build times with Vite

## Tech Stack

- **Frontend Framework:** React 19
- **Language:** TypeScript
- **UI Library:** Material-UI (MUI)
- **Form Handling:** React Hook Form with Zod validation
- **Build Tool:** Vite
- **Package Manager:** Yarn

## Project Structure

```
src/
├── app/        # Application-wide configurations and providers
├── entities/   # Core business entities
├── features/   # Feature-specific components and logic
├── pages/      # Page components
├── shared/     # Shared utilities, hooks, and components
└── widgets/    # Reusable UI components
```

### Prerequisites

- Node.js (Latest LTS version recommended)
- Yarn package manager

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd amino-seq
```

2. Install dependencies:
```bash
yarn install
```

3. Start the development server:
```bash
yarn dev
```

The application will be available at `http://localhost:5173` by default.

### Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn lint` - Run ESLint
- `yarn preview` - Preview production build locally

## Development

This project uses:
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Material-UI for consistent design
- React Hook Form for form handling
- Zod for schema validation
