import { UserRepositoryPostgres } from '@/lib/domains/user/repository.postgres';

const userRepo = new UserRepositoryPostgres();
export async function createUserAction(formData: FormData) {
  'use server';
  const { name, email, password } = {
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  };
  if (!name || !email || !password) return;

  await userRepo.add({
    email: email.toString(),
    name: name.toString(),
    password: password.toString(),
  });
  console.log('user created successfully');
}
