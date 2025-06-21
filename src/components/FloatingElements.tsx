
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
        const speed = (index + 1) * 0.01; // Reduced speed for subtlety
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
      {/* Reduced number of geometric shapes for cleaner look */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="floating-element absolute opacity-10" // Reduced opacity
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight,
            rotate: Math.random() * 360
          }}
          animate={{ 
            rotate: 360,
            y: [0, -10, 0] // Reduced movement
          }}
          transition={{
            rotate: { duration: 15 + i * 3, repeat: Infinity, ease: "linear" },
            y: { duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" }
          }}
          style={{
            width: `${15 + i * 2}px`, // Smaller sizes
            height: `${15 + i * 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          <div 
            className={`w-full h-full border border-cyber-blue/30 ${i % 2 === 0 ? 'rounded-full' : ''}`}
          />
        </motion.div>
      ))}

      {/* Simplified circuit pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit" patternUnits="userSpaceOnUse" width="300" height="300">
            <path d="M 0 150 L 75 150 L 75 75 L 225 75 L 225 225 L 300 225" 
                  stroke="#00f5ff" strokeWidth="0.5" fill="none"/>
            <circle cx="75" cy="150" r="2" fill="#00f5ff"/>
            <circle cx="225" cy="75" r="2" fill="#8b5cf6"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)"/>
      </svg>

      {/* Reduced animated dots */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="floating-element absolute w-1 h-1 rounded-full bg-cyber-blue/50"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -25, 0],
            opacity: [0, 0.7, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeInOut"
          }}
          style={{
            left: `${20 + i * 20}%`,
            top: `${20 + i * 15}%`,
            boxShadow: '0 0 5px rgba(0, 245, 255, 0.5)'
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
