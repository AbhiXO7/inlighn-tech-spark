
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('Initializing...');
  const [isComplete, setIsComplete] = useState(false);

  const loadingTexts = [
    'Initializing...',
    'Loading Components...',
    'Setting up Environment...',
    'Welcome to INLIGHN TECH'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 5; // Faster loading
        
        // Update text based on progress
        if (newProgress >= 25 && newProgress < 50) {
          setCurrentText(loadingTexts[1]);
        } else if (newProgress >= 50 && newProgress < 75) {
          setCurrentText(loadingTexts[2]);
        } else if (newProgress >= 75) {
          setCurrentText(loadingTexts[3]);
        }

        if (newProgress >= 100) {
          setIsComplete(true);
          setTimeout(() => {
            onComplete();
          }, 500); // Reduced timeout
        }
        return newProgress;
      });
    }, 30); // Faster interval

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950 overflow-hidden"
        >
          {/* Simplified background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black opacity-80" />
          
          {/* Main Content */}
          <div className="relative z-10 text-center">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <img 
                src="/lovable-uploads/91d92e08-57b7-46bf-89c4-1eb3be1f3f4d.png" 
                alt="INLIGHN TECH" 
                className="w-20 h-20 mx-auto rounded-full shadow-lg"
              />
            </motion.div>

            {/* Loading Circle */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-24 h-24 mx-auto mb-8"
            >
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="rgba(255, 255, 255, 0.2)"
                  strokeWidth="2"
                  fill="none"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#ffffff"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={283}
                  strokeDashoffset={283 - (283 * progress) / 100}
                  transition={{ duration: 0.1 }}
                />
              </svg>
              
              {/* Progress Percentage */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.span
                  key={progress}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-xl font-bold text-white"
                >
                  {Math.round(progress)}%
                </motion.span>
              </div>
            </motion.div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <motion.h2
                key={currentText}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-lg font-semibold text-white mb-4"
              >
                {currentText}
              </motion.h2>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
