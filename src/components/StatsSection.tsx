
import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, BookOpen, ThumbsUp, Star } from 'lucide-react';
import { useRef } from 'react';

const StatsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  
  const stats = [
    {
      icon: Users,
      value: 5000,
      suffix: "+",
      label: "INTERNS ENROLLED",
      color: "cyber-blue"
    },
    {
      icon: BookOpen,
      value: 9000,
      suffix: "+",
      label: "PROJECTS COMPLETED",
      color: "cyber-purple"
    },
    {
      icon: ThumbsUp,
      value: 93,
      suffix: "%",
      label: "SATISFACTION RATE",
      color: "cyber-pink"
    },
    {
      icon: Star,
      value: 30,
      suffix: "+",
      label: "TOP INSTRUCTORS",
      color: "cyber-green"
    }
  ];

  const AnimatedCounter = ({ value, suffix, isInView }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isInView) return;
      
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      const stepDuration = duration / steps;
      
      let currentStep = 0;
      
      const timer = setInterval(() => {
        currentStep++;
        setCount(Math.min(currentStep * stepValue, value));
        
        if (currentStep >= steps) {
          clearInterval(timer);
          setCount(value);
        }
      }, stepDuration);
      
      return () => clearInterval(timer);
    }, [isInView, value]);

    return (
      <span>
        {Math.round(count)}
        {suffix}
      </span>
    );
  };

  return (
    <div ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(0,245,255,0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(139,92,246,0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(236,72,153,0.3) 0%, transparent 50%)
            `,
            backgroundSize: "100% 100%"
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our <span className="neon-text">Impact</span> in Numbers
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            We're proud of the impact we've made in shaping the careers of thousands of students and professionals.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 10,
                z: 50 
              }}
              viewport={{ once: true }}
              className="text-center group preserve-3d"
            >
              <div className="relative p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-all duration-500 holographic">
                {/* Animated Icon */}
                <motion.div 
                  className={`w-20 h-20 rounded-full bg-gradient-to-br from-${stat.color} to-${stat.color}/50 flex items-center justify-center mx-auto mb-6 cyber-glow-${stat.color.split('-')[1]}`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                >
                  <stat.icon className="w-10 h-10 text-white" />
                </motion.div>

                {/* Animated Number */}
                <motion.div 
                  className="text-4xl md:text-5xl font-bold mb-3 neon-text"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                >
                  <AnimatedCounter 
                    value={stat.value} 
                    suffix={stat.suffix}
                    isInView={isInView}
                  />
                </motion.div>

                {/* Label */}
                <motion.p 
                  className="text-sm font-medium text-muted-foreground tracking-wider"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                >
                  {stat.label}
                </motion.p>

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-2 h-2 bg-${stat.color} rounded-full opacity-0 group-hover:opacity-100`}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -30, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold mb-12">
            Why Choose <span className="neon-text">Us?</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-all duration-300"
            >
              <h4 className="text-xl font-semibold mb-3 text-cyber-blue">Career Support</h4>
              <p className="text-muted-foreground">
                We go beyond training. Our career services include portfolio reviews, interview prep, and connections with industry professionals to help you land your dream job.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, rotateY: -5 }}
              className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-all duration-300"
            >
              <h4 className="text-xl font-semibold mb-3 text-cyber-purple">Tailored Programs</h4>
              <p className="text-muted-foreground">
                Our courses in Full Stack Development, Data Science, and Project Management are crafted with a focus on hands-on, practical learning.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StatsSection;
