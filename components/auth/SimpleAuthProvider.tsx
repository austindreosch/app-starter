'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { getUserProfile, createUserProfile, profileToUser } from '@/lib/firestore/users';
import type { User } from '@/store/types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
});

export const useSimpleAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useSimpleAuth must be used within SimpleAuthProvider');
  }
  return context;
};

export function SimpleAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
      try {
        if (firebaseUser) {
          // Get user profile from Firestore
          let profile = await getUserProfile(firebaseUser.uid);
          
          if (!profile) {
            // Create profile if it doesn't exist
            profile = await createUserProfile(firebaseUser.uid, firebaseUser.email || '');
          }
          
          const user = profileToUser(profile);
          setUser(user);
          setError(null);
        } else {
          setUser(null);
          setError(null);
        }
      } catch (err) {
        console.error('Auth error:', err);
        setError('Authentication error');
        
        // Fallback for Firebase user without profile
        if (firebaseUser) {
          const fallbackUser: User = {
            uid: firebaseUser.uid,
            email: firebaseUser.email || '',
            displayName: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || '',
            role: 'admin',
            officeId: 'default'
          };
          setUser(fallbackUser);
        } else {
          setUser(null);
        }
      } finally {
        setIsLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    error,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}