
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Vignesh",
      role: "Business Analyst Intern",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "I interned in Business Analysis at INLIGHN TECH, where I gained hands-on experience in Market Research, Business Intelligence, and Financial Analysis. The training and projects provided deep insights into business strategies, and I developed strong analytical and problem-solving skills. The experience was incredibly valuable for my career.",
      rating: 5,
      program: "Business Analysis"
    },
    {
      name: "Hariharan Rajendaran",
      role: "Full-Stack Developer Intern",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: "At INLIGHN TECH, I completed my Full-Stack Development internship, where I worked on React, Node.js, MongoDB, and API development. I built web applications from scratch, which helped me understand both frontend and backend development. The real-world exposure and expert guidance made me industry-ready.",
      rating: 5,
      program: "Full-Stack Development"
    },
    {
      name: "Sumit Vishwas",
      role: "Python Developer Intern",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face",
      content: "My Python Development internship at INLIGHN TECH gave me hands-on experience with Django, Flask, Web Scraping, and Automation. I worked on projects that enhanced my programming skills and helped me understand backend development better. The structured learning path made a big difference in my confidence and abilities.",
      rating: 5,
      program: "Python Development"
    },
    {
      name: "Mirunalini R",
      role: "Data Analyst Intern",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b812?w=100&h=100&fit=crop&crop=face",
      content: "During my Data Analytics internship at INLIGHN TECH, I learned SQL, Power BI, Tableau, and Data Cleaning. The program focused on real-world business intelligence projects, which helped me understand data-driven decision-making. The mentorship and structured learning approach made a significant impact on my skills.",
      rating: 5,
      program: "Data Analytics"
    },
    {
      name: "Surendra Kumar",
      role: "Data Science Intern",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      content: "I completed my Data Science internship at INLIGHN TECH, where I gained hands-on experience in Machine Learning, Data Visualization, and AI Models. Working on real-world datasets helped me apply my knowledge in a practical way. The structured guidance and expert mentorship improved my problem-solving and analytical skills.",
      rating: 5,
      program: "Data Science"
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
            TESTIMONIALS
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            What Our <span className="neon-text">Interns</span> Say
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Don't just take our word for it. Here's what our successful interns have to say about their transformative experience with us.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
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
              <div className="relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500 holographic h-full">
                {/* Quote Icon */}
                <motion.div
                  className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center cyber-glow"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Quote className="w-4 h-4 text-white" />
                </motion.div>

                {/* Rating Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Program Badge */}
                <div className="mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {testimonial.program}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-primary/20"
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(0,245,255,0.05), rgba(139,92,246,0.05))",
                      "linear-gradient(45deg, rgba(139,92,246,0.05), rgba(236,72,153,0.05))",
                      "linear-gradient(45deg, rgba(236,72,153,0.05), rgba(0,255,159,0.05))",
                      "linear-gradient(45deg, rgba(0,255,159,0.05), rgba(0,245,255,0.05))"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(3)].map((_, i) => (
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
                        delay: i * 0.4
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.p
            className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto"
          >
            Ready to join our community of successful graduates and transform your career?
          </motion.p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-cyber-blue to-cyber-purple hover:from-cyber-purple hover:to-cyber-pink text-white font-semibold rounded-lg cyber-glow transition-all duration-300"
          >
            Start Your Journey Today
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
