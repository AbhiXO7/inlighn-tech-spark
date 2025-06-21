
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LoadingScreen from '../components/LoadingScreen';
import Navigation from '../components/Navigation';
import FloatingElements from '../components/FloatingElements';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProgramsSection from '../components/ProgramsSection';
import StatsSection from '../components/StatsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Subtle background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-cyber-dark/5 -z-10" />
      
      {/* Reduced Floating 3D Elements */}
      <FloatingElements />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <section id="home" className="relative">
            <HeroSection />
          </section>
          
          <section id="about" className="relative">
            <AboutSection />
          </section>
          
          <section id="programs" className="relative">
            <ProgramsSection />
          </section>
          
          <section id="verify" className="relative">
            <StatsSection />
          </section>
          
          <section id="special" className="relative">
            <TestimonialsSection />
          </section>
          
          <section id="contact" className="relative">
            <ContactSection />
          </section>
        </motion.div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
