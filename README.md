# App Starter

A comprehensive starter template for Next.js applications with AlignUI, Firebase, and Tailwind CSS. Everything you need to build modern, scalable web applications.

## Features

- ⚡ **Next.js 15** with App Router and TypeScript
- 🎨 **AlignUI** - Complete design system and component library
- 🔥 **Firebase** - Authentication and Firestore database ready
- 🎨 **Tailwind CSS** - Utility-first styling with custom design tokens
- 🌙 **Dark Mode** - Built-in theme switching
- 📱 **Responsive** - Mobile-first design approach
- 🔒 **Authentication** - Complete auth flow with login/register
- 📁 **File Structure** - Organized and scalable project structure

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/austindreosch/app-starter.git
   cd app-starter
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up Firebase** (optional)
   - Create a new Firebase project
   - Copy your config to `lib/firebase.ts`
   - See `FIREBASE_SETUP.md` for detailed instructions

4. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## What's Included

### 🏗️ Core Stack
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first CSS framework
- **AlignUI** - Professional component library

### 🔧 Tools & Configuration
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing
- **Inter Font** - Modern typography

### 📦 Components
- Complete AlignUI component library in `components/ui/`
- Authentication components in `components/auth/`
- Theme switching component
- Responsive navigation

### 📄 Pages
- **Home** - Landing page with feature showcase
- **Authentication** - Login and register pages
- **Dashboard** - Protected user dashboard

### 🎨 Design System
- Semantic color tokens (light/dark mode)
- Typography scale
- Spacing system
- Shadow definitions
- Consistent styling patterns

## Documentation

- **[Styling Guide](./STYLING_GUIDE.md)** - Complete styling guidelines and patterns
- **[AlignUI Documentation](./align-ui-documentation.md)** - Component library reference
- **[Firebase Setup](./FIREBASE_SETUP.md)** - Database and authentication setup

## Project Structure

```
app-starter/
├── app/                    # Next.js App Router pages
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Dashboard page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── auth/             # Authentication components
│   └── ui/               # AlignUI component library
├── hooks/                # Custom React hooks
├── lib/                  # Utilities and configurations
│   ├── auth.ts           # Authentication helpers
│   ├── firebase.ts       # Firebase configuration
│   └── firestore.ts      # Database operations
├── types/                # TypeScript type definitions
├── utils/                # Utility functions
└── docs/                 # Documentation files
```

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms
This is a standard Next.js application and can be deployed to any platform that supports Node.js.

## Customization

### Adding New Components
1. Create components in `components/ui/` following AlignUI patterns
2. Use semantic design tokens from `tailwind.config.ts`
3. Follow the styling guidelines in `STYLING_GUIDE.md`

### Modifying the Design System
1. Update color tokens in `tailwind.config.ts`
2. Modify typography scale as needed
3. Keep semantic naming conventions

### Adding Features
1. Create new pages in the `app/` directory
2. Add necessary components and hooks
3. Update types in the `types/` directory

## Firebase Setup

To enable authentication and database features:

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com)
2. Enable Authentication and Firestore
3. Copy your configuration to `lib/firebase.ts`
4. Update Firestore security rules

See `FIREBASE_SETUP.md` for detailed instructions.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes following the style guide
4. Submit a pull request

## License

MIT License - feel free to use this template for any project.

---

Built with ❤️ using AlignUI, Next.js, and modern web technologies.