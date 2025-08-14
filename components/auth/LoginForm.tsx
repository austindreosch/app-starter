'use client';

import React, { useState } from 'react';
import { useAuth } from '@/store';
import * as Button from '@/components/ui/button';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { login, isLoading, error, clearError } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    
    if (!email || !password) {
      return;
    }

    await login(email, password);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Sign In</h2>
        <p className="text-gray-600 mt-2">Welcome back to ListLoops</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label.Root htmlFor="email">Email</Label.Root>
          <Input.Root 
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            disabled={isLoading}
            required
          />
        </div>

        <div>
          <Label.Root htmlFor="password">Password</Label.Root>
          <Input.Root 
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            disabled={isLoading}
            required
          />
        </div>

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        <Button.Root 
          type="submit" 
          className="w-full"
          disabled={isLoading || !email || !password}
        >
          {isLoading ? 'Signing In...' : 'Sign In'}
        </Button.Root>
      </form>

    </div>
  );
}