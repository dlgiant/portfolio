'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function HomePage() {
  const [collapseNav, setCollapseNav] = useState(false);
  const router = useRouter();

  const toPortifolio = () => {
    router.push('/portfolio');
  };

  return (
    <div className="h-screen w-full">
      <div className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">My Component Portfolio</h1>
        <button
          className="bg-amber-600 text-amber-950 p-2"
          onClick={toPortifolio}
        >
          Portfolio
        </button>
      </div>
    </div>
  )
}
