import Link from 'next/link';
import { Newspaper } from 'lucide-react';
import LoginForm from '@/components/auth/login-form';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 flex flex-col items-center">
          <Newspaper className="h-12 w-12 text-primary" />
          <h1 className="mt-4 text-3xl font-bold font-headline text-center">
            Welcome Back
          </h1>
          <p className="text-muted-foreground mt-2 text-center">
            Sign in to continue to Opinion News Hub
          </p>
        </div>
        <LoginForm />
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="font-semibold text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
