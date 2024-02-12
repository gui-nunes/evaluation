import { SignJWT } from 'jose';
import bcryptjs from 'bcryptjs';
import { userRepositoryInstance } from '../repository.postgres';
import { cookies } from 'next/headers';
import { RedirectType, redirect } from 'next/navigation';

export async function login(formData: FormData) {
  const { email, password } = Object.fromEntries(formData);
  const user = await userRepositoryInstance.password(email.toString());
  if (!bcryptjs.compareSync(password.toString(), user.password)) {
    throw new Error('Invalid credentials');
  }

  const expires = new Date(Date.now() + 10 * 1000);
  const session = await encrypt({ email: user.email, expires });

  cookies().set('session', session, {
    httpOnly: true,
    expires,
  });

}

export async function encrypt(data: { email: string; expires: Date }) {
  return await new SignJWT(data)
    .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
    .setIssuedAt()
    .setExpirationTime('10 sec from now')
    .sign(new TextEncoder().encode(process.env.SECRET_KEY));
}
