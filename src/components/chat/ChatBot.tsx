import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import ChatWindow from './ChatWindow';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-[#00BFA5] text-white p-4 rounded-full shadow-lg hover:bg-[#00AB95] transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    );
  }

  return <ChatWindow onClose={() => setIsOpen(false)} />;
}