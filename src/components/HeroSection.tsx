
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Code, Database, Shield } from 'lucide-react';
import LetterGlitch from './LetterGlitch';
import Particles from './Particles';
import CircularText from './CircularText';
import ShinyText from './ShinyText';
import SplashCursor from './SplashCursor';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-black pt-20">
      {/* Add SplashCursor */}
      <SplashCursor />
      
      {/* Subtle LetterGlitch Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <LetterGlitch
          glitchColors={['#1a1a1a', '#2a2a2a', '#333333']}
          glitchSpeed={120}
          centerVignette={false}
          outerVignette={true}
          smooth={true}
        />
      </div>

      {/* Minimal Particles Layer */}
      <div className="absolute inset-0 z-10 opacity-40">
        <Particles
          particleColors={['#ffffff', '#f0f0f0']}
          particleCount={60}
          particleSpread={12}
          speed={0.02}
          particleBaseSize={40}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
          className=""
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Transform Your Career with{' '}
            <ShinyText text="INLIGHN TECH" speed={4} className="text-6xl md:text-8xl font-black inline-block" />
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Gain real-world experience with our immersive internship programs in{' '}
            <span className="text-gray-400 font-semibold">Cyber Security</span>,{' '}
            <span className="text-gray-300 font-semibold">Full Stack Development</span>,{' '}
            <span className="text-gray-200 font-semibold">Data Science</span>, and more tech domains.
          </motion.p>

          <motion.p 
            className="text-lg text-gray-400 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Learn today, lead tomorrow.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Explore Internships
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-gray-500 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
          >
            Learn More
          </Button>
        </motion.div>

        {/* Tech Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center items-center gap-8 flex-wrap mb-16"
        >
          {[
            { icon: Code, label: "Full Stack", color: "text-gray-400" },
            { icon: Database, label: "Data Science", color: "text-gray-300" },
            { icon: Shield, label: "Cyber Security", color: "text-gray-200" },
            { icon: Zap, label: "Innovation", color: "text-gray-100" }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/40 hover:border-gray-600/60 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
            >
              <item.icon className={`h-8 w-8 ${item.color}`} />
              <span className="text-sm font-medium text-gray-400">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Circular Text Element - Fixed centering */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex justify-center items-center"
        >
          <div className="flex justify-center items-center w-full">
            <CircularText
              text="FUTURE * TECH * LEADERS * "
              spinDuration={30}
              onHover="speedUp"
              className="text-gray-500 mx-auto"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-500">Scroll to explore</span>
          <motion.div
            className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-gray-500 rounded-full mt-2"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
