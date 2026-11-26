"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">
        Welcome to My First Next.js App!
      </h1>

      <p className="text-lg">
        I am learning Next.js on Day 145.
      </p>

      <p>My name is Manoj.</p>

      <h2 className="text-2xl font-bold">
        Counter: {count}
      </h2>

      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg"
      >
        Increase Counter
      </button>

      {/* Next.js Image Component */}
      <Image
  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  alt="Beautiful nature landscape"
  width={600}
  height={400}
  className="rounded-xl shadow-lg"
/>
    </main>
  );
}