
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Zap, Code, Database, Shield } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const techIcons = [
    { icon: Code, label: 'Full Stack', color: 'text-cyber-blue' },
    { icon: Database, label: 'Data Science', color: 'text-cyber-purple' },
    { icon: Shield, label: 'Cyber Security', color: 'text-cyber-pink' },
    { icon: Zap, label: 'AI/ML', color: 'text-cyber-green' }
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      {/* 3D Floating Elements */}
      <div className="absolute inset-0 perspective-1000">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotateX: [0, 360],
              rotateY: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-4 text-center relative z-10"
      >
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-cyber-blue text-lg font-medium mb-4"
          >
            Experience, Learn, Thrive.
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Transform Your Career with{' '}
            <span className="neon-text relative">
              INLIGHN TECH
              <motion.div
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple"
              />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            Gain real-world experience with our immersive internship programs in 
            <span className="text-cyber-blue"> Cyber Security</span>, 
            <span className="text-cyber-purple"> Full Stack Development</span>, 
            <span className="text-cyber-pink"> Data Science</span>, and various tech domains.
          </motion.p>

          {/* Tech Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            {techIcons.map((tech, index) => (
              <motion.div
                key={tech.label}
                whileHover={{ scale: 1.1, rotateY: 180 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 preserve-3d"
              >
                <tech.icon className={`w-8 h-8 ${tech.color} mb-2`} />
                <span className="text-sm font-medium">{tech.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyber-blue to-cyber-purple hover:from-cyber-purple hover:to-cyber-pink text-white border-0 cyber-glow px-8 py-6 text-lg font-semibold"
              >
                Explore Internships
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10 px-8 py-6 text-lg font-semibold"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-cyber-blue rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-cyber-blue rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
