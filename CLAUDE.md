# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 starter template called "Milestone" that provides a comprehensive foundation for building modern web applications with authentication, UI components, and Firebase integration.

### Tech Stack
- **Next.js 15** with App Router and TypeScript
- **AlignUI** - Complete design system and component library
- **Firebase** - Authentication and Firestore database
- **Tailwind CSS** - Utility-first styling with semantic design tokens
- **React 18** with concurrent features
- **Zustand** - State management
- **SWR** - Data fetching

## Development Commands

### Core Commands
```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Format code
npm run format:write

# Type checking
npm run typecheck

# Bundle analysis
npm run analyze
```

### Testing Commands
No test framework is currently configured. If adding tests, follow Next.js testing conventions and update this section.

## Architecture & Structure

### App Router Structure
```
app/
├── layout.tsx          # Root layout with font configuration
├── page.tsx            # Home page
├── globals.css         # Global styles and CSS variables
├── auth/
│   ├── login/page.tsx  # Login page
│   └── register/page.tsx # Registration page
└── dashboard/
    └── page.tsx        # Protected dashboard page
```

### Component Architecture
The project uses **AlignUI compound components** pattern:

```
components/
├── ui/                 # AlignUI component library
│   ├── button.tsx      # Compound button components
│   ├── input.tsx       # Form input components
│   ├── modal.tsx       # Modal components
│   └── ...             # Other UI primitives
├── auth/               # Authentication components
│   ├── AuthGuard.tsx   # Route protection
│   ├── LoginForm.tsx   # Login form
│   └── RegisterForm.tsx # Registration form
└── theme-switch.tsx    # Dark/light mode toggle
```

### State Management
- **Authentication**: Custom `useAuth` hook with Firebase Auth
- **Global State**: Zustand store in `store/` directory
- **Server State**: SWR for data fetching
- **Theme**: `next-themes` for dark/light mode

### Firebase Integration
- **Authentication**: Email/password auth with comprehensive error handling
- **Firestore**: User profiles and application data
- **Configuration**: Environment-based with fallback values
- **Error Handling**: Detailed Firebase error mapping in `lib/auth.ts`

## Design System (AlignUI)

### Typography System
Use semantic typography classes from `tailwind.config.ts`:
```tsx
// Titles
<h1 className="text-title-h1">   // 3.5rem, 500 weight
<h2 className="text-title-h2">   // 3rem, 500 weight

// Labels
<label className="text-label-md"> // 1rem, 500 weight
<span className="text-label-sm">  // 0.875rem, 500 weight

// Paragraphs
<p className="text-paragraph-md">  // 1rem, 400 weight
<p className="text-paragraph-sm">  // 0.875rem, 400 weight
```

### Color System
All colors use CSS custom properties for automatic light/dark mode:
```tsx
// Background colors
<div className="bg-bg-white-0">      // Primary background
<div className="bg-bg-weak-50">      // Subtle background
<div className="bg-bg-soft-200">     // Soft contrast

// Text colors
<p className="text-text-strong-950"> // Primary text
<p className="text-text-sub-600">    // Secondary text
<p className="text-text-soft-400">   // Muted text

// State colors
<div className="bg-primary-base">    // Primary actions
<div className="bg-error-base">      // Error states
<div className="bg-success-base">    // Success states
```

### Component Patterns
Use AlignUI compound components:
```tsx
// Button usage
<Button.Root variant="primary" mode="filled" size="medium">
  <Button.Icon as={PlusIcon} />
  Add Item
</Button.Root>

// Input usage
<Input.Root size="medium">
  <Input.Wrapper>
    <Input.Icon as={SearchIcon} />
    <Input placeholder="Search..." />
  </Input.Wrapper>
</Input.Root>
```

## Firebase Setup

### Environment Variables Required
```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
```

### Configuration Notes
- Firebase config has fallback values for development
- Comprehensive error handling for missing environment variables
- Authentication includes detailed error mapping
- See `FIREBASE_SETUP.md` for complete setup instructions

## Key Implementation Patterns

### Authentication Flow
1. **Hook**: `useAuth()` provides user state and auth methods
2. **Guards**: `AuthGuard` component protects routes
3. **Forms**: Separate login/register components with validation
4. **Error Handling**: Detailed Firebase error messages

### Component Development
1. **Use AlignUI First**: Check existing components before creating new ones
2. **Semantic Tokens**: Use design system tokens, not arbitrary values
3. **Compound Pattern**: Follow AlignUI compound component structure
4. **TypeScript**: Full type safety with proper interfaces

### Styling Guidelines
- **Never** use arbitrary Tailwind values for semantic properties
- **Always** use semantic design tokens from `tailwind.config.ts`
- **Prefer** AlignUI components over custom styling
- **Follow** compound component patterns for complex UI

## Important Files

### Configuration
- `tailwind.config.ts` - Design system tokens and Tailwind configuration
- `next.config.mjs` - Next.js configuration with image domains
- `tsconfig.json` - TypeScript configuration with path aliases

### Core Libraries
- `lib/firebase.ts` - Firebase initialization and configuration
- `lib/auth.ts` - Authentication helpers with error handling
- `lib/firestore.ts` - Database operations
- `utils/cn.ts` - Class name utility for Tailwind

### Hooks
- `hooks/useAuth.ts` - Authentication state management
- `hooks/use-notification.ts` - Notification system
- `hooks/useStoreHydration.ts` - Zustand store hydration

## Development Guidelines

### Code Quality
- Always run `npm run typecheck` before committing
- Use `npm run lint` to check code style
- Format code with `npm run format:write`
- Follow existing patterns and conventions

### Adding New Features
1. Check if AlignUI components can handle the UI needs
2. Use semantic design tokens from the design system
3. Follow the compound component pattern
4. Add proper TypeScript types
5. Include error handling for Firebase operations

### Firebase Operations
- Always handle Firebase errors properly
- Use the existing error mapping in `lib/auth.ts`
- Test with both configured and unconfigured Firebase
- Follow the authentication patterns established

### Styling Rules
- Use semantic classes: `text-title-h1` not `text-6xl`
- Use design tokens: `bg-bg-white-0` not `bg-white`
- Follow AlignUI patterns for new components
- Maintain dark/light mode compatibility