import React, { useState } from 'react';

const FinalGradeCalculator = () => {
  const [currentGrade, setCurrentGrade] = useState('');
  const [desiredGrade, setDesiredGrade] = useState('');
  const [finalWeight, setFinalWeight] = useState('');

  const calculateRequiredScore = () => {
    const current = parseFloat(currentGrade);
    const desired = parseFloat(desiredGrade);
    const weight = parseFloat(finalWeight);

    if (isNaN(current) || isNaN(desired) || isNaN(weight) || weight <= 0 || weight >= 100) {
      return null;
    }

    // Formula: Required = (Desired - Current * (1 - Weight/100)) / (Weight/100)
    const weightDecimal = weight / 100;
    const required = (desired - current * (1 - weightDecimal)) / weightDecimal;
    
    return required.toFixed(2);
  };

  const requiredScore = calculateRequiredScore();

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Input Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[#0a2351] mb-6">Enter Your Details</h2>
          
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">Current Class Grade (%)</label>
            <input 
              type="number" 
              value={currentGrade}
              onChange={(e) => setCurrentGrade(e.target.value)}
              placeholder="e.g. 85"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">Desired Class Grade (%)</label>
            <input 
              type="number" 
              value={desiredGrade}
              onChange={(e) => setDesiredGrade(e.target.value)}
              placeholder="e.g. 90"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">Final Exam Weight (%)</label>
            <input 
              type="number" 
              value={finalWeight}
              onChange={(e) => setFinalWeight(e.target.value)}
              placeholder="e.g. 20"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors outline-none"
            />
            <p className="text-xs text-gray-500 mt-1">What percentage of your total grade is the final exam?</p>
          </div>
        </div>

        {/* Result Section */}
        <div className="bg-blue-50 rounded-2xl p-8 flex flex-col justify-center items-center text-center border border-blue-100">
          <h2 className="text-xl font-bold text-[#0a2351] mb-4">You need to score at least:</h2>
          
          <div className="h-32 flex items-center justify-center w-full">
            {requiredScore !== null ? (
              <div className="space-y-2">
                <span className={`text-6xl font-black ${parseFloat(requiredScore) > 100 ? 'text-red-500' : 'text-blue-600'}`}>
                  {requiredScore}%
                </span>
                <p className="text-sm font-medium text-gray-600">
                  on your final exam
                </p>
                {parseFloat(requiredScore) > 100 && (
                  <div className="mt-4 p-3 bg-red-100 text-red-700 text-sm rounded-lg border border-red-200">
                    Oof. You might need extra credit to pull this off!
                  </div>
                )}
                {parseFloat(requiredScore) <= 0 && (
                  <div className="mt-4 p-3 bg-green-100 text-green-700 text-sm rounded-lg border border-green-200">
                    You've already achieved your desired grade!
                  </div>
                )}
              </div>
            ) : (
              <p className="text-gray-400 font-medium">Fill out all fields to calculate your required score.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalGradeCalculator;
