import { LoginForm } from '@/components/auth/LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-weak-50">
      <div className="max-w-md w-full mx-4">
        <div className="bg-bg-white-0 border border-stroke-soft-200 rounded-20 p-8">
          <div className="text-center mb-8">
            <h1 className="text-title-h4 text-text-strong-950 mb-2">
              Welcome Back
            </h1>
            <p className="text-paragraph-md text-text-sub-600">
              Sign in to your account
            </p>
          </div>
          
          <LoginForm />
        </div>
      </div>
    </div>
  );
}