'use server';
import { userRepositoryInstance } from '../repository.postgres';
import bcryptjs from 'bcryptjs';
export async function register(prevState: any, formData: FormData): Promise<{ message: string }> {
  try {
    const { email, name, password } = Object.fromEntries(formData);

    const alreadyExists = await userRepositoryInstance.getByEmail(email.toString());
    if (alreadyExists) {
      throw new Error('Email already registered');
    }
    await userRepositoryInstance.add({
      email: email.toString(),
      name: name.toString(),
      password: bcryptjs.hashSync(password.toString(), 10),
    });
    console.log('Usuário criado com sucesso!');
    return { message: 'Usuário criado com sucesso!' };
  } catch (error) {
    console.log(error);

    return { message: `Erro ao criar usuário: ${error}` };
  }
}
