import React from 'react'
import { Counter } from '@components/common/Counter'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Welcome to My App
        </h1>
        <Counter />
      </main>
    </div>
  )
}

export default App 