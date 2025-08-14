import { Button } from '@/components/ui/button';
import { SettingsIcon, UserIcon, LogoutIcon } from '@remixicon/react';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-bg-weak-50">
      <header className="bg-bg-white-0 border-b border-stroke-soft-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-title-h5 text-text-strong-950">Dashboard</h1>
            
            <div className="flex items-center gap-3">
              <Button.Root variant="neutral" mode="ghost" size="small">
                <Button.Icon as={SettingsIcon} />
              </Button.Root>
              
              <Button.Root variant="neutral" mode="ghost" size="small">
                <Button.Icon as={UserIcon} />
              </Button.Root>
              
              <Button.Root variant="neutral" mode="ghost" size="small">
                <Button.Icon as={LogoutIcon} />
              </Button.Root>
            </div>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-bg-white-0 border border-stroke-soft-200 rounded-20 p-6">
            <h2 className="text-title-h6 text-text-strong-950 mb-4">
              Welcome to your dashboard
            </h2>
            <p className="text-paragraph-md text-text-sub-600 mb-4">
              This is where you can manage your application data.
            </p>
            <Button.Root variant="primary" mode="filled" size="medium">
              Get Started
            </Button.Root>
          </div>
          
          <div className="bg-bg-white-0 border border-stroke-soft-200 rounded-20 p-6">
            <h3 className="text-title-h6 text-text-strong-950 mb-3">Statistics</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-paragraph-sm text-text-sub-600">Total Users</span>
                <span className="text-label-sm text-text-strong-950">0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-paragraph-sm text-text-sub-600">Active Sessions</span>
                <span className="text-label-sm text-text-strong-950">0</span>
              </div>
            </div>
          </div>
          
          <div className="bg-bg-white-0 border border-stroke-soft-200 rounded-20 p-6">
            <h3 className="text-title-h6 text-text-strong-950 mb-3">Quick Actions</h3>
            <div className="space-y-3">
              <Button.Root variant="neutral" mode="stroke" size="small" className="w-full">
                Create New Item
              </Button.Root>
              <Button.Root variant="neutral" mode="stroke" size="small" className="w-full">
                View Reports
              </Button.Root>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}