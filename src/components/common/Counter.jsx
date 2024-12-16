import React, { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center gap-4 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">Counter: {count}</h2>
      <div className="flex gap-2">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Decrease
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          Increase
        </button>
      </div>
    </div>
  )
} 