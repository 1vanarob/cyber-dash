import 'server-only'
import { cookies } from 'next/headers'
 
export async function createSession(user: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const name = user;
 
  cookies().set('name', name, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  })
}

export function deleteSession() {
  cookies().delete('session')
}