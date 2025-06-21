
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
    'Loading 3D Environment...',
    'Connecting Neural Networks...',
    'Booting Up Systems...',
    'Welcome to INLIGHN TECH'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 2;
        
        // Update text based on progress
        if (newProgress >= 20 && newProgress < 40) {
          setCurrentText(loadingTexts[1]);
        } else if (newProgress >= 40 && newProgress < 60) {
          setCurrentText(loadingTexts[2]);
        } else if (newProgress >= 60 && newProgress < 80) {
          setCurrentText(loadingTexts[3]);
        } else if (newProgress >= 80) {
          setCurrentText(loadingTexts[4]);
        }

        if (newProgress >= 100) {
          setIsComplete(true);
          setTimeout(() => {
            onComplete();
          }, 1000);
        }
        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-cyber-darker overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 cyber-grid opacity-20" />
          
          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyber-blue rounded-full"
                initial={{ 
                  x: Math.random() * window.innerWidth, 
                  y: window.innerHeight + 100,
                  opacity: 0 
                }}
                animate={{ 
                  y: -100, 
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "linear"
                }}
                style={{
                  boxShadow: '0 0 10px #00f5ff'
                }}
              />
            ))}
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-8"
            >
              <img 
                src="/lovable-uploads/91d92e08-57b7-46bf-89c4-1eb3be1f3f4d.png" 
                alt="INLIGHN TECH" 
                className="w-24 h-24 mx-auto cyber-glow rounded-full"
              />
            </motion.div>

            {/* Loading Circle */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative w-32 h-32 mx-auto mb-8"
            >
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="rgba(0, 245, 255, 0.2)"
                  strokeWidth="2"
                  fill="none"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={283}
                  strokeDashoffset={283 - (283 * progress) / 100}
                  transition={{ duration: 0.1 }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00f5ff" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Spinning Inner Circle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-16 h-16 border-2 border-transparent border-t-cyber-blue rounded-full" />
              </motion.div>

              {/* Progress Percentage */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.span
                  key={progress}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-2xl font-bold neon-text"
                >
                  {Math.round(progress)}%
                </motion.span>
              </div>
            </motion.div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center"
            >
              <motion.h2
                key={currentText}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-xl font-semibold text-cyber-blue mb-4"
              >
                {currentText}
              </motion.h2>
              
              <motion.div
                animate={{ width: ['0%', '100%', '0%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="h-0.5 bg-gradient-to-r from-transparent via-cyber-blue to-transparent mx-auto"
                style={{ width: '200px' }}
              />
            </motion.div>

            {/* Tech Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none"
            >
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-cyber-purple rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    transformOrigin: `${150 * Math.cos((i * Math.PI) / 4)}px ${150 * Math.sin((i * Math.PI) / 4)}px`
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.2
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
