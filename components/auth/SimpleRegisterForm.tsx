'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerUser } from '@/lib/auth';
import {
  RiEyeLine,
  RiEyeOffLine,
  RiInformationFill,
  RiLock2Line,
  RiMailLine,
  RiUserAddLine,
  RiPhoneLine,
} from '@remixicon/react';
import { cn } from '@/utils/cn';
import * as FancyButton from '@/components/ui/fancy-button';
import * as Hint from '@/components/ui/hint';
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

function PasswordInput(
  props: React.ComponentPropsWithoutRef<typeof Input.Input>,
) {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Input.Root>
      <Input.Wrapper>
        <Input.Icon as={RiLock2Line} />
        <Input.Input
          type={showPassword ? 'text' : 'password'}
          placeholder='••••••••••'
          {...props}
        />
        <button type='button' onClick={() => setShowPassword((s) => !s)}>
          {showPassword ? (
            <RiEyeOffLine className='size-5 text-text-soft-400 group-has-[disabled]:text-text-disabled-300' />
          ) : (
            <RiEyeLine className='size-5 text-text-soft-400 group-has-[disabled]:text-text-disabled-300' />
          )}
        </button>
      </Input.Wrapper>
    </Input.Root>
  );
}

export default function SimpleRegisterForm() {
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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

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
    setError(null);
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    const result = await registerUser(formData.email, formData.password, {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      role: formData.role,
    });
    
    if (result.success) {
      router.push('/dashboard');
    } else {
      setError(result.error);
    }
    
    setIsLoading(false);
  };

  const handleChange = (field: keyof RegisterData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear validation error when user starts typing
    if (validationErrors[field]) {
      setValidationErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <>
      <div className='flex flex-col items-center space-y-2'>
        {/* icon */}
        <div
          className={cn(
            'relative flex size-[68px] shrink-0 items-center justify-center rounded-full backdrop-blur-xl lg:size-20',
            // bg
            'before:absolute before:inset-0 before:rounded-full',
            'before:bg-gradient-to-b before:from-primary-base before:to-transparent before:opacity-10',
          )}
        >
          <div
            className='relative z-10 flex size-12 items-center justify-center rounded-full bg-bg-white-0 ring-1 ring-inset ring-stroke-soft-200 lg:size-14'
            style={{
              boxShadow:
                '0 0 0 1px rgba(183, 83, 16, 0.04), 0 1px 1px 0.5px rgba(183, 83, 16, 0.04), 0 3px 3px -1.5px rgba(183, 83, 16, 0.02), 0 6px 6px -3px rgba(183, 83, 16, 0.04), 0 12px 12px -6px rgba(183, 83, 16, 0.04), 0px 24px 24px -12px rgba(183, 83, 16, 0.04), 0px 48px 48px -24px rgba(183, 83, 16, 0.04), inset 0px -1px 1px -0.5px rgba(183, 83, 16, 0.06)',
            }}
          >
            <RiUserAddLine className='size-6 text-warning-base lg:size-7' />
          </div>
        </div>

        <div className='space-y-1 text-center'>
          <div className='font-inter-var text-title-h6 lg:text-title-h5'>
            Create your ListLoops account
          </div>
          <div className='text-paragraph-sm text-text-sub-600 lg:text-paragraph-md'>
            Enter your details to get started.
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className='space-y-3'>
        <div className='grid grid-cols-2 gap-3'>
          <div className='space-y-1'>
            <Label.Root htmlFor='firstName'>
              First Name <Label.Asterisk />
            </Label.Root>
            <Input.Root>
              <Input.Wrapper>
                <Input.Input
                  id='firstName'
                  type='text'
                  placeholder='John'
                  value={formData.firstName}
                  onChange={(e) => handleChange('firstName', e.target.value)}
                  disabled={isLoading}
                  required
                />
              </Input.Wrapper>
            </Input.Root>
            {validationErrors.firstName && (
              <Hint.Root className='text-danger-base'>
                <Hint.Icon as={RiInformationFill} />
                {validationErrors.firstName}
              </Hint.Root>
            )}
          </div>

          <div className='space-y-1'>
            <Label.Root htmlFor='lastName'>
              Last Name <Label.Asterisk />
            </Label.Root>
            <Input.Root>
              <Input.Wrapper>
                <Input.Input
                  id='lastName'
                  type='text'
                  placeholder='Doe'
                  value={formData.lastName}
                  onChange={(e) => handleChange('lastName', e.target.value)}
                  disabled={isLoading}
                  required
                />
              </Input.Wrapper>
            </Input.Root>
            {validationErrors.lastName && (
              <Hint.Root className='text-danger-base'>
                <Hint.Icon as={RiInformationFill} />
                {validationErrors.lastName}
              </Hint.Root>
            )}
          </div>
        </div>

        <div className='space-y-1'>
          <Label.Root htmlFor='email'>
            Email Address <Label.Asterisk />
          </Label.Root>
          <Input.Root>
            <Input.Wrapper>
              <Input.Icon as={RiMailLine} />
              <Input.Input
                id='email'
                type='email'
                placeholder='john@example.com'
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                disabled={isLoading}
                required
              />
            </Input.Wrapper>
          </Input.Root>
          {validationErrors.email && (
            <Hint.Root className='text-danger-base'>
              <Hint.Icon as={RiInformationFill} />
              {validationErrors.email}
            </Hint.Root>
          )}
        </div>

        <div className='space-y-1'>
          <Label.Root htmlFor='phone'>
            Phone Number <Label.Asterisk />
          </Label.Root>
          <Input.Root>
            <Input.Wrapper>
              <Input.Icon as={RiPhoneLine} />
              <Input.Input
                id='phone'
                type='tel'
                placeholder='(555) 123-4567'
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                disabled={isLoading}
                required
              />
            </Input.Wrapper>
          </Input.Root>
          {validationErrors.phone && (
            <Hint.Root className='text-danger-base'>
              <Hint.Icon as={RiInformationFill} />
              {validationErrors.phone}
            </Hint.Root>
          )}
        </div>

        <div className='space-y-1'>
          <Label.Root htmlFor='password'>
            Password <Label.Asterisk />
          </Label.Root>
          <PasswordInput
            id='password'
            value={formData.password}
            onChange={(e) => handleChange('password', e.target.value)}
            disabled={isLoading}
            required
          />
          <Hint.Root>
            <Hint.Icon as={RiInformationFill} />
            Must be at least 6 characters long.
          </Hint.Root>
          {validationErrors.password && (
            <Hint.Root className='text-danger-base'>
              <Hint.Icon as={RiInformationFill} />
              {validationErrors.password}
            </Hint.Root>
          )}
        </div>

        <div className='space-y-1'>
          <Label.Root htmlFor='confirmPassword'>
            Confirm Password <Label.Asterisk />
          </Label.Root>
          <PasswordInput
            id='confirmPassword'
            value={formData.confirmPassword}
            onChange={(e) => handleChange('confirmPassword', e.target.value)}
            disabled={isLoading}
            required
          />
          {validationErrors.confirmPassword && (
            <Hint.Root className='text-danger-base'>
              <Hint.Icon as={RiInformationFill} />
              {validationErrors.confirmPassword}
            </Hint.Root>
          )}
        </div>

        <div className='space-y-1'>
          <Label.Root htmlFor='role'>
            Account Type <Label.Asterisk />
          </Label.Root>
          <select
            id='role'
            value={formData.role}
            onChange={(e) => handleChange('role', e.target.value as 'individual' | 'team_member')}
            className='w-full px-3 py-2 border border-stroke-soft-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-base text-paragraph-md'
            disabled={isLoading}
          >
            <option value='individual'>Individual Agent</option>
            <option value='team_member'>Team Member</option>
          </select>
        </div>

        {error && (
          <Hint.Root className='text-danger-base'>
            <Hint.Icon as={RiInformationFill} />
            {error}
          </Hint.Root>
        )}

        <FancyButton.Root 
          type='submit' 
          variant='primary' 
          size='medium'
          disabled={isLoading}
          className='w-full'
        >
          {isLoading ? 'Creating Account...' : 'Create Account'}
        </FancyButton.Root>
      </form>
    </>
  );
}