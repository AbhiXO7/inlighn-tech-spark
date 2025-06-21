
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    domain: '',
    state: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const domains = [
    'Full Stack Development',
    'Data Science',
    'Cyber Security',
    'AI/ML Engineering',
    'Mobile Development',
    'Cloud Computing',
    'Data Analytics',
    'Python Development',
    'Business Analysis'
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 9368842663',
      color: 'cyber-blue'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@inlighntech.com',
      color: 'cyber-purple'
    },
    {
      icon: MapPin,
      title: 'Address',
      content: 'WeWork Prestige Central, Ground Floor, 36, Infantry Rd, Bengaluru, Karnataka 560001',
      color: 'cyber-pink'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM',
      color: 'cyber-green'
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
            GET IN TOUCH
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Contact <span className="neon-text">Us</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Ready to start your journey? Get in touch with us and let's discuss how we can help you achieve your career goals.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 holographic">
              <h3 className="text-2xl font-bold mb-6">Fill the form to contact us</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="w-full bg-background/50 border-border/50 focus:border-primary"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full bg-background/50 border-border/50 focus:border-primary"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <label className="block text-sm font-medium mb-2">Domain of Internship</label>
                  <Select onValueChange={(value) => handleInputChange('domain', value)}>
                    <SelectTrigger className="w-full bg-background/50 border-border/50 focus:border-primary">
                      <SelectValue placeholder="Select your preferred domain" />
                    </SelectTrigger>
                    <SelectContent>
                      {domains.map((domain) => (
                        <SelectItem key={domain} value={domain}>
                          {domain}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <label className="block text-sm font-medium mb-2">State</label>
                  <Input
                    type="text"
                    placeholder="Enter your state"
                    value={formData.state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                    className="w-full bg-background/50 border-border/50 focus:border-primary"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    placeholder="Tell us more about your goals and interests..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="w-full bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyber-blue to-cyber-purple hover:from-cyber-purple hover:to-cyber-pink text-white border-0 cyber-glow py-6 text-lg font-semibold"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Submit
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="flex items-start p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-all duration-300 preserve-3d"
              >
                <motion.div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br from-${info.color} to-${info.color}/50 flex items-center justify-center mr-4 cyber-glow-${info.color.split('-')[1]}`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <info.icon className="w-6 h-6 text-white" />
                </motion.div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">{info.title}</h4>
                  <p className="text-muted-foreground">{info.content}</p>
                </div>
              </motion.div>
            ))}

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30"
            >
              <h4 className="text-lg font-semibold mb-4">Why Choose INLIGHN TECH?</h4>
              <p className="text-muted-foreground leading-relaxed">
                At INLIGHN TECH, we believe that the future of education lies in bridging the gap between academic learning and industry needs. We're committed to providing you with the practical skills and real-world experience you need to succeed in today's competitive tech landscape.
              </p>
            </motion.div>

            {/* 3D Floating Element */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotateY: [0, 180, 360]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="hidden lg:block absolute top-1/2 right-8 w-20 h-20 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-full cyber-glow opacity-20"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
