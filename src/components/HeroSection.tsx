
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Code, Database, Shield } from 'lucide-react';
import LetterGlitch from './LetterGlitch';
import Particles from './Particles';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* LetterGlitch Background */}
      <div className="absolute inset-0 z-0">
        <LetterGlitch
          glitchColors={['#00f5ff', '#8b5cf6', '#ec4899']}
          glitchSpeed={80}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>

      {/* Particles Layer */}
      <div className="absolute inset-0 z-10">
        <Particles
          particleColors={['#00f5ff', '#8b5cf6']}
          particleCount={150}
          particleSpread={8}
          speed={0.05}
          particleBaseSize={80}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
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
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Transform Your Career with{' '}
            <span className="neon-text">INLIGHN TECH</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Gain real-world experience with our immersive internship programs in{' '}
            <span className="text-cyber-blue font-semibold">Cyber Security</span>,{' '}
            <span className="text-cyber-purple font-semibold">Full Stack Development</span>,{' '}
            <span className="text-cyber-pink font-semibold">Data Science</span>, and more tech domains.
          </motion.p>

          <motion.p 
            className="text-lg text-muted-foreground mb-10"
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
            className="bg-gradient-to-r from-cyber-blue to-cyber-purple hover:from-cyber-purple hover:to-cyber-pink text-white px-8 py-4 text-lg font-semibold rounded-xl cyber-glow transform hover:scale-105 transition-all duration-300"
          >
            Explore Internships
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
          >
            Learn More
          </Button>
        </motion.div>

        {/* Tech Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center items-center gap-8 flex-wrap"
        >
          {[
            { icon: Code, label: "Full Stack", color: "text-cyber-blue" },
            { icon: Database, label: "Data Science", color: "text-cyber-purple" },
            { icon: Shield, label: "Cyber Security", color: "text-cyber-pink" },
            { icon: Zap, label: "Innovation", color: "text-cyber-green" }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card/20 backdrop-blur-sm border border-border/20 hover:border-border/40 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
            >
              <item.icon className={`h-8 w-8 ${item.color}`} />
              <span className="text-sm font-medium text-muted-foreground">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-muted-foreground">Scroll to explore</span>
          <motion.div
            className="w-6 h-10 border-2 border-cyber-blue rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-cyber-blue rounded-full mt-2"
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
