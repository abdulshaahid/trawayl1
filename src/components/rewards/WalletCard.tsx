import React from 'react';
import { Wallet, Gift } from 'lucide-react';

interface WalletCardProps {
  balance: number;
  rewardPoints: number;
}

export default function WalletCard({ balance, rewardPoints }: WalletCardProps) {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl p-6 text-white">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="text-lg font-medium mb-1">Wallet Balance</h3>
          <p className="text-3xl font-bold">${balance.toFixed(2)}</p>
        </div>
        <Wallet className="w-6 h-6" />
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-white/20">
        <div className="flex items-center">
          <Gift className="w-5 h-5 mr-2" />
          <span className="text-sm">Reward Points</span>
        </div>
        <span className="font-bold">{rewardPoints}</span>
      </div>
    </div>
  );
}