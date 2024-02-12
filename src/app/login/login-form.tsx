'use client';
import { authenticate } from '@/lib/actions/authenticate';
import { useFormState, useFormStatus } from 'react-dom';

export function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, FormData);

  return (
    <form action={dispatch}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <div>{errorMessage && <p>{errorMessage}</p>}</div>
      <LoginButton />
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button aria-disabled={pending} type="submit">
      Login
    </button>
  );
}
