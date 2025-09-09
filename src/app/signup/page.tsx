import Link from 'next/link';
import { Newspaper } from 'lucide-react';
import SignupForm from '@/components/auth/signup-form';

export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 flex flex-col items-center">
          <Newspaper className="h-12 w-12 text-primary" />
          <h1 className="mt-4 text-3xl font-bold font-headline text-center">
            Create an Account
          </h1>
          <p className="text-muted-foreground mt-2 text-center">
            Join Opinion News to share your thoughts
          </p>
        </div>
        <SignupForm />
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link href="/login" className="font-semibold text-primary hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
