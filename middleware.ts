import { updateSession } from '@/lib/domains/user/actions/login';
import { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}
