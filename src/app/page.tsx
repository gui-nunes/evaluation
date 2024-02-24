import { getSession } from '@/lib/get-session';
import React from 'react';

export default async function Home() {
  await getSession();

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="px-4 pt-4"></main>
    </div>
  );
}
