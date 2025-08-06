'use client'

import { useState } from 'react'
import { MessageSquare, X } from 'lucide-react'
import Chatbot from './chatbot'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="mb-4">
          <Chatbot onClose={() => setIsOpen(false)} />
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 animate-pulse"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      )}
    </div>
  )
}
