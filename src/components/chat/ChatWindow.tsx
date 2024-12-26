import React from 'react';
import { X } from 'lucide-react';

interface ChatWindowProps {
  onClose: () => void;
}

export default function ChatWindow({ onClose }: ChatWindowProps) {
  return (
    <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-lg shadow-xl flex flex-col">
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="font-semibold">Travel Assistant</h3>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="flex items-start space-x-2">
          <div className="bg-[#00BFA5] text-white rounded-lg p-3 max-w-[80%]">
            Hello! How can I help you plan your next adventure?
          </div>
        </div>
      </div>

      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00BFA5] focus:border-transparent"
          />
          <button className="bg-[#00BFA5] text-white px-4 py-2 rounded-lg hover:bg-[#00AB95] transition-colors">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}