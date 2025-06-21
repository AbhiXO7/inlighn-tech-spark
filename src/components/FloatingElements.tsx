
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const elements = containerRef.current.querySelectorAll('.floating-element');
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      elements.forEach((el, index) => {
        const element = el as HTMLElement;
        const speed = (index + 1) * 0.02;
        const x = (mouseX - window.innerWidth / 2) * speed;
        const y = (mouseY - window.innerHeight / 2) * speed;
        
        element.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-10">
      {/* Floating Geometric Shapes */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="floating-element absolute opacity-20"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight,
            rotate: Math.random() * 360
          }}
          animate={{ 
            rotate: 360,
            y: [0, -20, 0]
          }}
          transition={{
            rotate: { duration: 10 + i * 2, repeat: Infinity, ease: "linear" },
            y: { duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }
          }}
          style={{
            width: `${20 + i * 3}px`,
            height: `${20 + i * 3}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          <div 
            className={`w-full h-full border-2 ${
              i % 3 === 0 ? 'border-cyber-blue' : 
              i % 3 === 1 ? 'border-cyber-purple' : 
              'border-cyber-pink'
            } ${i % 2 === 0 ? 'rounded-full' : ''}`}
            style={{
              background: i % 4 === 0 ? 'linear-gradient(45deg, rgba(0,245,255,0.1), rgba(139,92,246,0.1))' : 'transparent'
            }}
          />
        </motion.div>
      ))}

      {/* Circuit Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit" patternUnits="userSpaceOnUse" width="200" height="200">
            <path d="M 0 100 L 50 100 L 50 50 L 150 50 L 150 150 L 200 150" 
                  stroke="#00f5ff" strokeWidth="1" fill="none"/>
            <circle cx="50" cy="100" r="3" fill="#00f5ff"/>
            <circle cx="50" cy="50" r="3" fill="#8b5cf6"/>
            <circle cx="150" cy="50" r="3" fill="#ec4899"/>
            <circle cx="150" cy="150" r="3" fill="#00ff9f"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)"/>
      </svg>

      {/* Animated Dots */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="floating-element absolute w-2 h-2 rounded-full bg-cyber-blue"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
          style={{
            left: `${10 + i * 10}%`,
            top: `${10 + i * 10}%`,
            boxShadow: '0 0 10px #00f5ff'
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
