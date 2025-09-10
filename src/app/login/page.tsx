import Link from 'next/link';
import { Logo } from '@/components/icons/logo';
import LoginForm from '@/components/auth/login-form';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 flex flex-col items-center">
          <Logo className="h-12 w-12 text-primary" />
          <h1 className="mt-4 text-3xl font-bold font-headline text-center">
            Welcome Back
          </h1>
          <p className="text-muted-foreground mt-2 text-center">
            Sign in to continue to Opinion News
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
