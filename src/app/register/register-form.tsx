'use client';
import { Button } from '@/components/default/button';
import { Input } from '@/components/default/input';
import { register } from '@/lib/domains/user/actions/register';
import { useFormState, useFormStatus } from 'react-dom';

const inialState = {
  message: '',
};

export function RegisterForm() {
  const [errorMessage, formAction] = useFormState(register, inialState);
  return (
    <form action={formAction}>
      <Input label="Nome" name="name" type="text" required />
      <Input label="Endereço de Email" name="email" type="email" required />
      <Input
        label="Senha"
        name="password"
        type="password"
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        title="A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula e um número."
        required
      />
      <Input
        label="Confirmar senha"
        name="confirm_password"
        type="password"
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        title="A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula e um número."
        required
      />

      <div className="flex items-center justify-between">
        <ButtonForm />
        <a href="/login" className="text-sm text-blue-500 hover:underline">
          Já possui conta? Entre aqui.
        </a>
      </div>
    </form>
  );
}

export function ButtonForm() {
  const { pending } = useFormStatus();
  return (
    <Button aria-disabled={pending} type="submit">
      Cadastrar
    </Button>
  );
}
