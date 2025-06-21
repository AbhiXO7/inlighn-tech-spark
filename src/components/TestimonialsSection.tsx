
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import ChromaGrid from './ChromaGrid';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Vignesh",
      role: "Business Analyst Intern",
      image: "https://i.pravatar.cc/300?img=8",
      rating: 5,
      text: "I interned in Business Analysis at INLIGHN TECH, where I gained hands-on experience in Market Research, Business Intelligence, and Financial Analysis. The training and projects provided deep insights into business strategies, and I developed strong analytical and problem-solving skills."
    },
    {
      id: 2,
      name: "Hariharan Rajendaran",
      role: "Full-Stack Developer Intern",
      image: "https://i.pravatar.cc/300?img=11",
      rating: 5,
      text: "At INLIGHN TECH, I completed my Full-Stack Development internship, where I worked on React, Node.js, MongoDB, and API development. I built web applications from scratch, which helped me understand both frontend and backend development."
    },
    {
      id: 3,
      name: "Sumit Vishwas",
      role: "Python Developer Intern",
      image: "https://i.pravatar.cc/300?img=3",
      rating: 5,
      text: "My Python Development internship at INLIGHN TECH gave me hands-on experience with Django, Flask, Web Scraping, and Automation. I worked on projects that enhanced my programming skills and helped me understand backend development better."
    }
  ];

  const chromaItems = [
    {
      image: "https://i.pravatar.cc/300?img=8",
      title: "Vignesh",
      subtitle: "Business Analyst Intern",
      handle: "@vignesh",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #1a1a1a)",
      url: "#"
    },
    {
      image: "https://i.pravatar.cc/300?img=11",
      title: "Hariharan Rajendaran",
      subtitle: "Full-Stack Developer Intern",
      handle: "@hariharan",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #1a1a1a)",
      url: "#"
    },
    {
      image: "https://i.pravatar.cc/300?img=3",
      title: "Sumit Vishwas",
      subtitle: "Python Developer Intern",
      handle: "@sumit",
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(225deg, #8B5CF6, #1a1a1a)",
      url: "#"
    },
    {
      image: "https://i.pravatar.cc/300?img=25",
      title: "Mirunalini R",
      subtitle: "Data Analyst Intern",
      handle: "@mirunalini",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(165deg, #F59E0B, #1a1a1a)",
      url: "#"
    },
    {
      image: "https://i.pravatar.cc/300?img=16",
      title: "Surendra Kumar",
      subtitle: "Data Science Intern",
      handle: "@surendra",
      borderColor: "#EF4444",
      gradient: "linear-gradient(195deg, #EF4444, #1a1a1a)",
      url: "#"
    },
    {
      image: "https://i.pravatar.cc/300?img=60",
      title: "Alex Rivera",
      subtitle: "Cyber Security Intern",
      handle: "@alex",
      borderColor: "#06B6D4",
      gradient: "linear-gradient(135deg, #06B6D4, #1a1a1a)",
      url: "#"
    }
  ];

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      {/* Background with reduced opacity for better readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-cyber-dark/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink bg-clip-text text-transparent">
            TESTIMONIALS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            What Our Interns Say
          </p>
        </motion.div>

        {/* Interactive ChromaGrid Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-cyber-blue">
            Meet Our Amazing Interns
          </h3>
          <div style={{ height: '600px', position: 'relative' }}>
            <ChromaGrid 
              items={chromaItems}
              radius={300}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </motion.div>

        {/* Traditional Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 h-full hover:border-cyber-blue/50 transition-all duration-300 cyber-glow">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-cyber-blue/30"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-cyber-blue text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-cyber-purple/50 mb-4" />
                <p className="text-muted-foreground leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
