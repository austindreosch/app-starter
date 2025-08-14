import { Button } from '@/components/ui/button';
import { PlusIcon } from '@remixicon/react';

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center px-4">
        <h1 className="text-title-h1 text-text-strong-950 mb-6">
          Welcome to Milestone
        </h1>
        
        <p className="text-paragraph-lg text-text-sub-600 mb-8">
          Your starter template for Next.js apps with AlignUI, Firebase, and Tailwind CSS.
          Everything is set up and ready to build your next great application.
        </p>
        
        <div className="flex gap-4 justify-center">
          <Button.Root variant="primary" mode="filled" size="medium">
            <Button.Icon as={PlusIcon} />
            Get Started
          </Button.Root>
          
          <Button.Root variant="neutral" mode="stroke" size="medium">
            Learn More
          </Button.Root>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-bg-weak-50 border border-stroke-soft-200 rounded-20 p-6">
            <h3 className="text-title-h6 text-text-strong-950 mb-3">AlignUI</h3>
            <p className="text-paragraph-sm text-text-sub-600">
              Beautiful, accessible components with a complete design system.
            </p>
          </div>
          
          <div className="bg-bg-weak-50 border border-stroke-soft-200 rounded-20 p-6">
            <h3 className="text-title-h6 text-text-strong-950 mb-3">Firebase</h3>
            <p className="text-paragraph-sm text-text-sub-600">
              Authentication and database setup ready to go.
            </p>
          </div>
          
          <div className="bg-bg-weak-50 border border-stroke-soft-200 rounded-20 p-6">
            <h3 className="text-title-h6 text-text-strong-950 mb-3">Tailwind</h3>
            <p className="text-paragraph-sm text-text-sub-600">
              Utility-first CSS with custom design tokens.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}