'use client';

import React, { useState } from 'react';
import { useSimpleAuth } from './SimpleAuthProvider';
import { logoutUser } from '@/lib/auth';
import * as Avatar from '@/components/ui/avatar';
import * as Dropdown from '@/components/ui/dropdown';

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  
  const { user } = useSimpleAuth();

  if (!user) {
    return null;
  }

  const handleLogout = async () => {
    setIsLoggingOut(true);
    await logoutUser();
    setIsOpen(false);
    setIsLoggingOut(false);
  };

  const initials = user.displayName
    ? user.displayName.split(' ')
        .map(name => name[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : user.email?.charAt(0).toUpperCase() || 'U';

  return (
    <Dropdown.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dropdown.Trigger asChild>
        <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <Avatar.Root size="32" color="blue" className="bg-blue-600 text-white text-sm font-medium">
            {initials}
          </Avatar.Root>
          <div className="hidden md:block text-left">
            <p className="text-sm font-medium text-gray-900">{user.displayName || user.email}</p>
            <p className="text-xs text-gray-500">{user.email}</p>
          </div>
        </button>
      </Dropdown.Trigger>

      <Dropdown.Content align="end" className="w-56">
        <div className="px-3 py-2 border-b border-gray-100">
          <p className="text-sm font-medium text-gray-900">{user.displayName || user.email}</p>
          <p className="text-xs text-gray-500">{user.email}</p>
          <p className="text-xs text-blue-600 mt-1 capitalize">{user.role}</p>
        </div>

        <Dropdown.Item className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">
          Profile Settings
        </Dropdown.Item>

        <Dropdown.Item className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">
          Office: {user.officeId || 'Not assigned'}
        </Dropdown.Item>

        <Dropdown.Separator />

        <Dropdown.Item asChild>
          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50 cursor-pointer disabled:opacity-50"
          >
            {isLoggingOut ? 'Signing out...' : 'Sign Out'}
          </button>
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown.Root>
  );
}