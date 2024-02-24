'use server';
import bcryptjs from 'bcryptjs';
import { userRepositoryInstance } from '../repository.postgres';
import { cookies } from 'next/headers';
import { decrypt, encrypt } from '@/lib/encrypt';
import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { RedirectType, redirect } from 'next/navigation';

export async function login(
  _prev: { message: string },
  formData: FormData
): Promise<{ message: string }> {
  try {
    const { email, password } = Object.fromEntries(formData);
    const user = await userRepositoryInstance.getToLogin(email.toString());
    if (!user) throw new Error('User not found, create an account');

    if (!bcryptjs.compareSync(password.toString(), user.password)) {
      throw new Error('Invalid credentials');
    }

    const expires = new Date(Date.now() + 10 * 1000);
    const session = await encrypt({ email: user.email, expires });

    cookies().set('session', session, {
      httpOnly: true,
      expires,
    });

    revalidatePath('/');
    return { message: 'Logged in' };
  } catch (error: any) {
    return { message: error.message || 'Server error' };
  } finally {
    redirect('/', RedirectType.replace);
  }
}

export async function logout() {
  cookies().set('session', '', { expires: new Date(0) });
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get('session')?.value;
  if (!session) return;

  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 10 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: 'session',
    value: await encrypt({ email: parsed.email, expires: parsed.expires }),
    httpOnly: true,
    expires: parsed.expires,
  });
}
