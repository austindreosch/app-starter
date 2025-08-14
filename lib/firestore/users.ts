import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { User } from '@/store/types';

export interface UserProfile {
  id: string;
  email: string;
  role: 'individual' | 'team_member' | 'team_lead' | 'brokerage_agent' | 'brokerage_admin';
  
  // Profile Information
  profile: {
    firstName: string;
    lastName: string;
    displayName: string;
    photoUrl?: string;
    phone: string;
    licenseNumber?: string;
    licenseState?: string;
  };

  // Associations
  teamId?: string;
  brokerageId?: string;

  // Branding
  branding: {
    primaryColor: string;
    secondaryColor: string;
    logoUrl?: string;
    bannerUrl?: string;
  };

  // Settings
  settings: {
    timezone: string;
    emailNotifications: boolean;
    smsNotifications: boolean;
    autoResponseEnabled: boolean;
    autoResponseMessage?: string;
  };

  // Metadata
  createdAt: Date;
  updatedAt: Date;
  lastLoginAt?: Date;
  isActive: boolean;
}

/**
 * Create a new user profile in Firestore
 */
export async function createUserProfile(
  uid: string, 
  email: string, 
  additionalData: Partial<UserProfile> = {}
): Promise<UserProfile> {
  const userRef = doc(db, 'users', uid);
  
  const defaultProfile: UserProfile = {
    id: uid,
    email,
    role: 'individual',
    profile: {
      firstName: additionalData.profile?.firstName || '',
      lastName: additionalData.profile?.lastName || '',
      displayName: additionalData.profile?.displayName || email.split('@')[0],
      phone: additionalData.profile?.phone || '',
    },
    branding: {
      primaryColor: '#3B82F6',
      secondaryColor: '#1E40AF',
    },
    settings: {
      timezone: 'America/Los_Angeles',
      emailNotifications: true,
      smsNotifications: false,
      autoResponseEnabled: false,
    },
    createdAt: new Date(),
    updatedAt: new Date(),
    isActive: true,
    ...additionalData,
  };

  await setDoc(userRef, {
    ...defaultProfile,
    createdAt: defaultProfile.createdAt,
    updatedAt: defaultProfile.updatedAt,
  });

  return defaultProfile;
}

/**
 * Get user profile from Firestore
 */
export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  const userRef = doc(db, 'users', uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    return null;
  }

  const data = userSnap.data();
  return {
    ...data,
    createdAt: data.createdAt?.toDate() || new Date(),
    updatedAt: data.updatedAt?.toDate() || new Date(),
    lastLoginAt: data.lastLoginAt?.toDate(),
  } as UserProfile;
}

/**
 * Update user profile
 */
export async function updateUserProfile(
  uid: string, 
  updates: Partial<UserProfile>
): Promise<void> {
  const userRef = doc(db, 'users', uid);
  
  await updateDoc(userRef, {
    ...updates,
    updatedAt: new Date(),
  });
}

/**
 * Update last login time
 */
export async function updateLastLogin(uid: string): Promise<void> {
  const userRef = doc(db, 'users', uid);
  
  await updateDoc(userRef, {
    lastLoginAt: new Date(),
    updatedAt: new Date(),
  });
}

/**
 * Convert UserProfile to store User format
 */
export function profileToUser(profile: UserProfile): User {
  return {
    uid: profile.id,
    email: profile.email,
    displayName: profile.profile.displayName,
    role: profile.role === 'individual' ? 'admin' : profile.role,
    officeId: profile.teamId || profile.brokerageId || 'default',
  };
}