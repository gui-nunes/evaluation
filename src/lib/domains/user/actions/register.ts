'use server';
import { RedirectType, redirect } from 'next/navigation';
import { userRepositoryInstance } from '../repository.postgres';
import bcryptjs from 'bcryptjs';
import { login } from './login';
export async function register(prevState: any, formData: FormData): Promise<{ message: string }> {
  try {
    const { email, name, password } = Object.fromEntries(formData);

    const alreadyExists = await userRepositoryInstance.getByEmail(email.toString());
    if (alreadyExists) {
      throw new Error('Email já registrado, logue-se ou use outro');
    }
    try {
      await userRepositoryInstance.add({
        email: email.toString(),
        name: name.toString(),
        password: bcryptjs.hashSync(password.toString(), 10),
      });
    } catch (error) {
      throw new Error('Erro ao registrar o usuário, tente novamente.');
    }
    try {
      await login({ message: '' }, formData);
    } catch (error) {
      throw new Error('Erro ao definir sessão, tente mais tarde.');
    }
  } catch (error: any) {
    return { message: error.message };
  }
  redirect('/', RedirectType.replace);
}
