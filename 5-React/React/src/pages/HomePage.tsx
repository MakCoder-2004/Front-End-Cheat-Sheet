import { useState } from 'react';
import MemoizedChild from '../components/memorizedChiled';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="max-w-4xl mx-auto py-4">
        <h1 className="text-2xl font-bold mb-4">Memoization Demo</h1>
        <p className="mb-4">This page demonstrates memoized component behavior.</p>
      </div>

      <div className="max-w-4xl mx-auto py-4">
        <p className="text-2xl font-bold mb-4">Counter</p>
        <div className="flex flex-col items-center gap-4">
          <p className="font-bold">Count: {count}</p>
          <button
            onClick={() => setCount(prev => prev + 1)}
            className="border p-4 rounded-lg shadow-sm px-4 py-2 hover:bg-gray-200 transition duration-200"
          >
            Increment Count
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-8">
        <h2 className="text-xl font-semibold mb-4">Memoized Child</h2>
        <div className="border p-4 rounded-lg shadow-sm">
          <MemoizedChild name="Makrious" />
        </div>
      </div>
    </>
  );
}
