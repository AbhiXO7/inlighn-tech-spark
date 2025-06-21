
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Shield, Brain, Smartphone, Cloud } from 'lucide-react';
import { Button } from './ui/button';

const ProgramsSection = () => {
  const programs = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Master modern web development with React, Node.js, MongoDB, and cutting-edge technologies.",
      duration: "12 weeks",
      level: "Beginner to Advanced",
      color: "cyber-blue",
      features: ["React & Next.js", "Node.js & Express", "MongoDB & PostgreSQL", "REST APIs", "Deployment"]
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Dive deep into data analysis, machine learning, and AI with hands-on projects.",
      duration: "16 weeks",
      level: "Intermediate",
      color: "cyber-purple",
      features: ["Python & R", "Machine Learning", "Data Visualization", "Statistical Analysis", "Deep Learning"]
    },
    {
      icon: Shield,
      title: "Cyber Security",
      description: "Learn to protect digital assets and understand modern security threats.",
      duration: "14 weeks",
      level: "Beginner to Advanced",
      color: "cyber-pink",
      features: ["Network Security", "Ethical Hacking", "Penetration Testing", "Security Auditing", "Incident Response"]
    },
    {
      icon: Brain,
      title: "AI/ML Engineering",
      description: "Build intelligent systems and work with cutting-edge AI technologies.",
      duration: "18 weeks",
      level: "Advanced",
      color: "cyber-green",
      features: ["TensorFlow & PyTorch", "Neural Networks", "Computer Vision", "NLP", "MLOps"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Create stunning mobile applications for iOS and Android platforms.",
      duration: "12 weeks",
      level: "Intermediate",
      color: "cyber-blue",
      features: ["React Native", "Flutter", "Native Development", "App Store Deploy", "Mobile UI/UX"]
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "Master cloud platforms and modern DevOps practices.",
      duration: "10 weeks",
      level: "Intermediate",
      color: "cyber-purple",
      features: ["AWS & Azure", "Docker & Kubernetes", "CI/CD Pipelines", "Infrastructure as Code", "Monitoring"]
    }
  ];

  return (
    <div className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="cyber-grid h-full w-full" />
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
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cyber-blue text-lg font-medium mb-4"
          >
            OUR PROGRAMS
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            We Provide Best <span className="neon-text">Internship</span> For You
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-4xl mx-auto"
          >
            Choose from our comprehensive range of internship programs designed to give you practical, industry-relevant experience.
          </motion.p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                z: 50 
              }}
              viewport={{ once: true }}
              className="group relative preserve-3d"
            >
              <div className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500 holographic overflow-hidden">
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-background/50 to-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(0,245,255,0.1), rgba(139,92,246,0.1))",
                      "linear-gradient(45deg, rgba(139,92,246,0.1), rgba(236,72,153,0.1))",
                      "linear-gradient(45deg, rgba(236,72,153,0.1), rgba(0,255,159,0.1))",
                      "linear-gradient(45deg, rgba(0,255,159,0.1), rgba(0,245,255,0.1))"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Icon */}
                <motion.div 
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br from-${program.color} to-${program.color}/50 flex items-center justify-center mb-6 cyber-glow-${program.color.split('-')[1]} relative z-10`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <program.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {program.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Program Details */}
                  <div className="flex justify-between items-center mb-6 text-sm">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {program.duration}
                    </span>
                    <span className="text-muted-foreground">
                      {program.level}
                    </span>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {program.features.map((feature, idx) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/80 hover:to-primary text-white border-0"
                    >
                      Apply Now
                    </Button>
                  </motion.div>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramsSection;
