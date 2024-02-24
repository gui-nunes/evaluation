import { SignJWT, jwtVerify } from 'jose';

export function encrypt(data: { email: string; expires: Date }) {
  return new SignJWT(data)
    .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
    .setIssuedAt()
    .setExpirationTime('10 sec from now')
    .sign(new TextEncoder().encode(process.env.SECRET_KEY));
}

export async function decrypt(token: string) {
  const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.SECRET_KEY), {
    algorithms: ['HS256'],
    typ: 'JWT',
  });
  return payload as { email: string; expires: Date };
}
