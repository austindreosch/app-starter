import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut 
} from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { createUserProfile } from '@/lib/firestore/users';

export async function loginUser(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, user: userCredential.user };
  } catch (error: any) {
    let errorMessage = 'Login failed';
    
    switch (error.code) {
      case 'auth/configuration-not-found':
        errorMessage = 'Firebase configuration not found. Please check FIREBASE_SETUP.md for setup instructions.';
        break;
      case 'auth/user-not-found':
        errorMessage = 'No account found with this email';
        break;
      case 'auth/wrong-password':
        errorMessage = 'Incorrect password';
        break;
      case 'auth/invalid-email':
        errorMessage = 'Invalid email address';
        break;
      case 'auth/too-many-requests':
        errorMessage = 'Too many failed attempts. Please try again later';
        break;
      case 'auth/invalid-api-key':
        errorMessage = 'Invalid Firebase API key. Please check your environment configuration.';
        break;
      case 'auth/project-not-found':
        errorMessage = 'Firebase project not found. Please verify your project configuration.';
        break;
      default:
        // Check if it's a configuration-related error
        if (error.message?.includes('configuration') || error.message?.includes('API key')) {
          errorMessage = 'Firebase configuration error. Please check FIREBASE_SETUP.md for setup instructions.';
        } else {
          errorMessage = error.message || 'Login failed';
        }
    }
    
    console.error('Login error:', error);
    return { success: false, error: errorMessage };
  }
}

export async function registerUser(
  email: string, 
  password: string,
  profileData?: {
    firstName: string;
    lastName: string;
    phone: string;
    role: 'individual' | 'team_member';
  }
) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const firebaseUser = userCredential.user;
    
    // Create user profile in Firestore
    const additionalData = profileData ? {
      role: profileData.role,
      profile: {
        firstName: profileData.firstName,
        lastName: profileData.lastName,
        displayName: `${profileData.firstName} ${profileData.lastName}`,
        phone: profileData.phone,
      }
    } : {};
    
    await createUserProfile(firebaseUser.uid, email, additionalData);
    
    return { success: true, user: firebaseUser };
  } catch (error: any) {
    let errorMessage = 'Registration failed';
    
    switch (error.code) {
      case 'auth/configuration-not-found':
        errorMessage = 'Firebase configuration not found. Please check FIREBASE_SETUP.md for setup instructions.';
        break;
      case 'auth/email-already-in-use':
        errorMessage = 'An account with this email already exists';
        break;
      case 'auth/invalid-email':
        errorMessage = 'Invalid email address';
        break;
      case 'auth/weak-password':
        errorMessage = 'Password should be at least 6 characters';
        break;
      case 'auth/invalid-api-key':
        errorMessage = 'Invalid Firebase API key. Please check your environment configuration.';
        break;
      case 'auth/project-not-found':
        errorMessage = 'Firebase project not found. Please verify your project configuration.';
        break;
      default:
        // Check if it's a configuration-related error
        if (error.message?.includes('configuration') || error.message?.includes('API key')) {
          errorMessage = 'Firebase configuration error. Please check FIREBASE_SETUP.md for setup instructions.';
        } else {
          errorMessage = error.message || 'Registration failed';
        }
    }
    
    console.error('Registration error:', error);
    return { success: false, error: errorMessage };
  }
}

export async function logoutUser() {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message || 'Logout failed' };
  }
}