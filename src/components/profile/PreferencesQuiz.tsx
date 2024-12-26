import React, { useState } from 'react';
import type { UserPreferences, TripType } from '../../types/user';

export default function PreferencesQuiz() {
  const [step, setStep] = useState(1);
  const [preferences, setPreferences] = useState<Partial<UserPreferences>>({});

  const handleBudgetSelect = (budget: UserPreferences['budget']) => {
    setPreferences(prev => ({ ...prev, budget }));
    setStep(2);
  };

  const handleTripTypeSelect = (type: TripType) => {
    setPreferences(prev => ({
      ...prev,
      tripTypes: [...(prev.tripTypes || []), type]
    }));
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      {step === 1 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">What's your travel budget?</h2>
          <div className="grid grid-cols-3 gap-4">
            {['budget', 'moderate', 'luxury'].map((budget) => (
              <button
                key={budget}
                onClick={() => handleBudgetSelect(budget as UserPreferences['budget'])}
                className="p-4 border rounded-lg hover:bg-gray-50"
              >
                {budget.charAt(0).toUpperCase() + budget.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">What type of trips do you enjoy?</h2>
          <div className="grid grid-cols-2 gap-4">
            {['adventure', 'leisure', 'cultural', 'family', 'solo'].map((type) => (
              <button
                key={type}
                onClick={() => handleTripTypeSelect(type as TripType)}
                className="p-4 border rounded-lg hover:bg-gray-50"
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}