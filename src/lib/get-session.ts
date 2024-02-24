import { redirect } from 'next/navigation';
import { decrypt } from './encrypt';
import { cookies } from 'next/headers';

export async function getSession() {
  const session = cookies().get('session')?.value;
  if (!session) redirect('/login');
  return await decrypt(session);
}
