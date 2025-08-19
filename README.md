# Ultimate Front Office Template

A comprehensive React application with TypeScript, Tailwind CSS, shadcn/ui, Ant Design, and React Query for modern web development.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Features

- **React 19** with TypeScript for modern development
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** for beautiful, accessible components
- **Ant Design** for comprehensive UI components
- **React Router** for client-side routing
- **React Query** for data fetching, caching, and synchronization
- **Vite** for fast development and building

## React Query Setup

This template includes a complete React Query setup with:

- **QueryClient Provider** configured in `main.tsx`
- **Custom hooks** in `src/hooks/useApi.ts` for data fetching
- **Development tools** for debugging queries
- **Example implementation** in the Users page (`/users`)

### Usage Example

```typescript
import { useUsers, useCreateUser } from "@/hooks/useApi";

function MyComponent() {
  const { data: users, isLoading, error } = useUsers();
  const createUserMutation = useCreateUser();

  // Use the data...
}
```

## Project Structure

```
src/
  components/
    ui/                 # shadcn/ui components
    common/             # Shared components
  hooks/
    useApi.ts           # React Query hooks
    use-mobile.ts       # Mobile detection hook
  routes/
    home/               # Home page
    about/              # About page with component showcase
    users/              # React Query demo page
  styles/
    index.css           # Global styles with Tailwind
  lib/
    utils.ts            # Utility functions
  main.tsx              # App entry point with providers
```

## Available Routes

- `/` - Home page with navigation
- `/about` - Component showcase page
- `/users` - React Query demonstration with API calls

## Development

The development server includes:

- Hot module replacement
- TypeScript checking
- React Query DevTools (press browser DevTools)
- Component showcases for testing
