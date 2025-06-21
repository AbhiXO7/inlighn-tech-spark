
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Shield, Briefcase, Cpu, Globe } from 'lucide-react';
import FlyingPosters from './FlyingPosters';

const ProgramsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Create program poster images using placeholders with program themes
  const programImages = [
    'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop', 
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=400&fit=crop'
  ];

  const programs = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Master both frontend and backend technologies with React, Node.js, and modern frameworks.",
      duration: "12 weeks",
      level: "Beginner to Advanced",
      color: "from-cyber-blue to-blue-600"
    },
    {
      icon: Database,
      title: "Data Science & Analytics",
      description: "Learn data analysis, machine learning, and visualization with Python and modern tools.",
      duration: "10 weeks", 
      level: "Intermediate",
      color: "from-cyber-purple to-purple-600"
    },
    {
      icon: Shield,
      title: "Cyber Security",
      description: "Understand security fundamentals, ethical hacking, and digital forensics.",
      duration: "8 weeks",
      level: "Beginner to Advanced", 
      color: "from-cyber-pink to-pink-600"
    },
    {
      icon: Briefcase,
      title: "Business Analysis",
      description: "Develop skills in market research, business intelligence, and strategic planning.",
      duration: "6 weeks",
      level: "Beginner",
      color: "from-cyber-green to-green-600"
    },
    {
      icon: Cpu,
      title: "AI & Machine Learning",
      description: "Explore artificial intelligence, neural networks, and deep learning technologies.",
      duration: "14 weeks",
      level: "Advanced",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Globe,
      title: "Digital Marketing",
      description: "Master SEO, social media marketing, and digital advertising strategies.",
      duration: "8 weeks",
      level: "Beginner to Intermediate",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Flying Posters Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <FlyingPosters
          items={programImages}
          planeWidth={200}
          planeHeight={200}
          distortion={2}
          scrollEase={0.02}
          cameraFov={45}
          cameraZ={15}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink bg-clip-text text-transparent">
            Our Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our comprehensive range of internship programs designed to give you hands-on experience 
            in the latest technologies and industry practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl bg-card/40 backdrop-blur-md border border-border/30 hover:border-border/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <program.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyber-blue group-hover:to-cyber-purple group-hover:bg-clip-text transition-all duration-300">
                    {program.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 text-xs font-medium bg-cyber-blue/20 text-cyber-blue rounded-full border border-cyber-blue/30">
                      {program.duration}
                    </span>
                    <span className="px-3 py-1 text-xs font-medium bg-cyber-purple/20 text-cyber-purple rounded-full border border-cyber-purple/30">
                      {program.level}
                    </span>
                  </div>

                  <button className="w-full py-3 px-4 bg-gradient-to-r from-cyber-blue/20 to-cyber-purple/20 hover:from-cyber-blue hover:to-cyber-purple text-foreground hover:text-white rounded-xl border border-cyber-blue/30 hover:border-transparent transition-all duration-300 font-medium">
                    Learn More
                  </button>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-br from-cyber-pink/20 to-cyber-green/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">
            Can't find the perfect program? We also offer custom internship solutions.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-cyber-blue to-cyber-purple hover:from-cyber-purple hover:to-cyber-pink text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 cyber-glow">
            Contact Us for Custom Programs
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsSection;
