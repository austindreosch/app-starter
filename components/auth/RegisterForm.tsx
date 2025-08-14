'use client';

import React, { useState } from 'react';
import { useAuth } from '@/store';
import * as Button from '@/components/ui/button';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';

interface RegisterData {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  phone: string;
  role: 'individual' | 'team_member';
}

export default function RegisterForm() {
  const [formData, setFormData] = useState<RegisterData>({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    role: 'individual',
  });

  const [validationErrors, setValidationErrors] = useState<Partial<RegisterData>>({});
  
  const { register, isLoading, error, clearError } = useAuth();

  const validateForm = (): boolean => {
    const errors: Partial<RegisterData> = {};

    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    
    if (!validateForm()) {
      return;
    }

    // Register with profile data
    await register(formData.email, formData.password, {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      role: formData.role,
    });
  };

  const handleChange = (field: keyof RegisterData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear validation error when user starts typing
    if (validationErrors[field]) {
      setValidationErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Create Account</h2>
        <p className="text-gray-600 mt-2">Join ListLoops to get started</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label.Root htmlFor="firstName">First Name</Label.Root>
            <Input.Root 
              id="firstName"
              type="text"
              value={formData.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
              placeholder="John"
              disabled={isLoading}
              required
            />
            {validationErrors.firstName && (
              <p className="text-sm text-red-600 mt-1">{validationErrors.firstName}</p>
            )}
          </div>

          <div>
            <Label.Root htmlFor="lastName">Last Name</Label.Root>
            <Input.Root 
              id="lastName"
              type="text"
              value={formData.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
              placeholder="Doe"
              disabled={isLoading}
              required
            />
            {validationErrors.lastName && (
              <p className="text-sm text-red-600 mt-1">{validationErrors.lastName}</p>
            )}
          </div>
        </div>

        <div>
          <Label.Root htmlFor="email">Email</Label.Root>
          <Input.Root 
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="john@example.com"
            disabled={isLoading}
            required
          />
          {validationErrors.email && (
            <p className="text-sm text-red-600 mt-1">{validationErrors.email}</p>
          )}
        </div>

        <div>
          <Label.Root htmlFor="phone">Phone Number</Label.Root>
          <Input.Root 
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="(555) 123-4567"
            disabled={isLoading}
            required
          />
          {validationErrors.phone && (
            <p className="text-sm text-red-600 mt-1">{validationErrors.phone}</p>
          )}
        </div>

        <div>
          <Label.Root htmlFor="password">Password</Label.Root>
          <Input.Root 
            id="password"
            type="password"
            value={formData.password}
            onChange={(e) => handleChange('password', e.target.value)}
            placeholder="Create a password"
            disabled={isLoading}
            required
          />
          {validationErrors.password && (
            <p className="text-sm text-red-600 mt-1">{validationErrors.password}</p>
          )}
        </div>

        <div>
          <Label.Root htmlFor="confirmPassword">Confirm Password</Label.Root>
          <Input.Root 
            id="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => handleChange('confirmPassword', e.target.value)}
            placeholder="Confirm your password"
            disabled={isLoading}
            required
          />
          {validationErrors.confirmPassword && (
            <p className="text-sm text-red-600 mt-1">{validationErrors.confirmPassword}</p>
          )}
        </div>

        <div>
          <Label.Root htmlFor="role">Account Type</Label.Root>
          <select
            id="role"
            value={formData.role}
            onChange={(e) => handleChange('role', e.target.value as 'individual' | 'team_member')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          >
            <option value="individual">Individual Agent</option>
            <option value="team_member">Team Member</option>
          </select>
        </div>

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        <Button.Root 
          type="submit" 
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? 'Creating Account...' : 'Create Account'}
        </Button.Root>
      </form>
    </div>
  );
}