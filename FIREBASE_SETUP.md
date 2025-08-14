# Firebase Setup Guide for ListLoops

## Quick Fix for "Firebase: Error (auth/configuration-not-found)"

The error you're seeing happens because the Firebase environment variables aren't configured yet. Here's how to fix it:

<!-- ## Step 1: Get Firebase Configuration

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **listloops-30b27**
3. Click the gear icon (⚙️) → **Project settings**
4. Scroll down to "Your apps" section
5. If you don't have a web app yet, click **"Add app"** → **Web** → Name it "ListLoops Web"
6. Copy the configuration values from the Firebase SDK snippet

## Step 2: Update Environment Variables

Open your `.env.local` file and replace the placeholder values with your actual Firebase config:

```bash
# Firebase Configuration - Replace with your actual values
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyC...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=listloops-30b27.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=listloops-30b27
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=listloops-30b27.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-ABC123

# Development Environment
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000
``` -->

<!-- ## Step 3: Enable Authentication

1. In Firebase Console, go to **Authentication** → **Sign-in method**
2. Enable **Email/Password** provider
3. (Optional) Enable **Google** provider for social login -->

<!-- ## Step 4: Set up Firestore Database

1. Go to **Firestore Database** → **Create database**
2. Choose **Start in test mode** for development
3. Select your preferred region -->

<!-- ## Step 5: Restart Development Server

After updating the environment variables:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
# or
pnpm dev -->
```

## Current Project Status

- ✅ Firebase project exists: `listloops-30b27`
- ✅ Project structure is ready
- ⚠️ Need to configure environment variables
- ⚠️ Need to enable Authentication methods
- ⚠️ Need to set up Firestore database

## Testing the Fix

After completing the setup:

1. Go to `http://localhost:3000/register`
2. Try creating an account
3. You should see the registration form work without Firebase errors

## Troubleshooting

If you still get errors:

- Make sure to restart your development server after updating `.env.local`
- Check that all environment variables are set correctly (no typos)
- Verify that Authentication is enabled in Firebase Console
- Check browser console for more detailed error messages
