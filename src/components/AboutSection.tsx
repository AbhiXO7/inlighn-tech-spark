
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Lightbulb, Users } from 'lucide-react';
import Waves from './Waves';
import Threads from './Threads';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Waves Background */}
      <div className="absolute inset-0 z-0">
        <Waves
          lineColor="#00f5ff"
          backgroundColor="rgba(0, 245, 255, 0.05)"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
      </div>

      {/* Threads Overlay */}
      <div className="absolute inset-0 z-10 opacity-30">
        <Threads
          color={[0, 0.96, 1]}
          amplitude={1}
          distance={0}
          enableMouseInteraction={true}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
            WHO WE ARE
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
            About INLIGHN TECH
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              At INLIGHN TECH, we believe that the future of education lies in bridging the gap between 
              academic learning and industry needs. Founded with a passion for providing meaningful and 
              immersive learning experiences, we offer internship programs that equip students and young 
              professionals with practical skills in Full Stack Development, Data Science, and Project Management.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              {[
                { 
                  icon: Target, 
                  title: "Real-World Projects", 
                  desc: "Hands-on experience with industry projects",
                  color: "text-cyber-blue" 
                },
                { 
                  icon: Users, 
                  title: "Expert Mentorship", 
                  desc: "Learn from seasoned professionals",
                  color: "text-cyber-purple" 
                },
                { 
                  icon: Lightbulb, 
                  title: "Certified Programs", 
                  desc: "Get certified in your field",
                  color: "text-cyber-pink" 
                },
                { 
                  icon: Eye, 
                  title: "Flexible Learning", 
                  desc: "Learn at your own pace online",
                  color: "text-cyber-green" 
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="p-4 rounded-xl bg-card/20 backdrop-blur-sm border border-border/20 hover:border-border/40 transition-all duration-300 group hover:scale-105"
                >
                  <feature.icon className={`h-8 w-8 ${feature.color} mb-3 group-hover:scale-110 transition-transform duration-300`} />
                  <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyber-blue/10 to-cyber-purple/10 border border-cyber-blue/20 backdrop-blur-sm">
              <h4 className="text-xl font-bold text-cyber-blue mb-4 flex items-center">
                <Target className="h-6 w-6 mr-2" />
                Our Mission
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                To empower students and young professionals by providing immersive, real-world learning 
                experiences through tailored internship programs. We aim to equip our participants with 
                the practical skills and confidence they need to succeed in the fast-evolving tech industry.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyber-purple/10 to-cyber-pink/10 border border-cyber-purple/20 backdrop-blur-sm">
              <h4 className="text-xl font-bold text-cyber-purple mb-4 flex items-center">
                <Eye className="h-6 w-6 mr-2" />
                Our Vision
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                To become the leading platform for practical tech education, bridging the gap between 
                academic knowledge and industry requirements. We envision a future where every graduate 
                is industry-ready and confident in their technical abilities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
