
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Eye, Users, Award } from 'lucide-react';
import { useRef } from 'react';

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]);

  const features = [
    {
      icon: Target,
      title: "Real-World Projects",
      description: "Gain hands-on experience with real industry projects and build a portfolio that stands out.",
      color: "cyber-blue"
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Learn from seasoned professionals who guide you through every step of your journey.",
      color: "cyber-purple"
    },
    {
      icon: Award,
      title: "Certified Programs",
      description: "Complete the programs and get certified in your field to showcase your skills.",
      color: "cyber-pink"
    },
    {
      icon: Eye,
      title: "Flexible Learning",
      description: "Do at your own pace with online programs designed to fit your schedule.",
      color: "cyber-green"
    }
  ];

  return (
    <div ref={containerRef} className="py-20 bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        style={{ x }}
        className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink opacity-30"
      />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-cyber-blue text-lg font-medium mb-4"
            >
              WHO WE ARE
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              About <span className="neon-text">INLIGHN TECH</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              At INLIGHN TECH, we believe that the future of education lies in bridging the gap between academic learning and industry needs. Founded with a passion for providing meaningful and immersive learning experiences, we offer internship programs that equip students and young professionals with practical skills in Full Stack Development, Data Science, and Project Management.
            </motion.p>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="border-l-4 border-cyber-blue pl-6"
              >
                <h3 className="text-xl font-semibold text-cyber-blue mb-2">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower students and young professionals by providing immersive, real-world learning experiences through tailored internship programs.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="border-l-4 border-cyber-purple pl-6"
              >
                <h3 className="text-xl font-semibold text-cyber-purple mb-2">Our Vision</h3>
                <p className="text-muted-foreground">
                  To become the leading platform for practical tech education, empowering the next generation of tech professionals with industry-ready skills.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  z: 50 
                }}
                className="relative group preserve-3d"
              >
                <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 holographic">
                  <motion.div 
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br from-${feature.color} to-${feature.color}/50 flex items-center justify-center mb-4 cyber-glow-${feature.color.split('-')[1]}`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  
                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink p-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ zIndex: -1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
