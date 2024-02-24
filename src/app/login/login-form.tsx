'use client';
import { login } from '@/lib/domains/user/actions/login';
import { useFormState, useFormStatus } from 'react-dom';

const initialState = {
  message: '',
};

export function LoginForm() {
  const [state, formAction] = useFormState(login, initialState);

  return (
    <form action={formAction}>
      <input type="email" name="email" className="border border-gray-300 rounded-md p-2 mb-2" />
      <input
        type="password"
        name="password"
        className="border border-gray-300 rounded-md p-2 mb-2"
      />
      <LoginButton />
      <p>{state.message}</p>
    </form>
  );
}

export function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button className="bg-blue-500 text-white rounded-md p-2" type="submit" aria-disabled={pending}>
      Login
    </button>
  );
}