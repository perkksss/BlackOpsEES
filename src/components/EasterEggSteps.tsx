import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { EasterEggStep } from '../types';

interface EasterEggStepsProps {
  steps: EasterEggStep[];
}

const EasterEggSteps: React.FC<EasterEggStepsProps> = ({ steps }) => {
  const [expandedSteps, setExpandedSteps] = useState<Record<number, boolean>>({});

  const toggleStep = (index: number) => {
    setExpandedSteps(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold mb-4">Main Easter Egg Steps</h3>
      
      {steps.map((step, index) => (
        <div key={index} className="bg-zinc-700 rounded-md overflow-hidden">
          <button
            className="w-full flex items-center justify-between p-4 text-left font-medium"
            onClick={() => toggleStep(index)}
          >
            <span className="flex items-center">
              <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
                {index + 1}
              </span>
              {step.title}
            </span>
            {expandedSteps[index] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          
          {expandedSteps[index] && (
            <div className="p-4 pt-0 border-t border-zinc-600">
              <p className="text-zinc-300 mb-3">{step.description}</p>
              
              {step.substeps && step.substeps.length > 0 && (
                <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                  {step.substeps.map((substep, subIndex) => (
                    <li key={subIndex}>{substep}</li>
                  ))}
                </ul>
              )}
              
              {step.imageUrl && (
                <div className="mt-4">
                  <img 
                    src={step.imageUrl} 
                    alt={`Step ${index + 1}`} 
                    className="rounded-md max-w-full h-auto"
                  />
                </div>
              )}
              
              {step.tips && (
                <div className="mt-4 bg-zinc-800 p-3 rounded-md">
                  <p className="font-medium text-yellow-400 mb-1">Tips:</p>
                  <p className="text-zinc-300">{step.tips}</p>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default EasterEggSteps;