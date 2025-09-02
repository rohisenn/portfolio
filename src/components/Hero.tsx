import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, Code2, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(0, 255, 170, 0.2) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(0, 255, 170, 0.2) 1px, transparent 1px)
               `,
               backgroundSize: '60px 60px'
             }}
        />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-8 h-8 border-2 border-neo-cyan rotate-45"
        />
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -180, -360],
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-40 right-32 w-6 h-6 bg-neo-cyan/20 rotate-45"
        />
        <motion.div
          animate={{ 
            y: [0, -25, 0],
            x: [0, 10, 0],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-40 left-40 w-4 h-4 border border-neo-green rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Glitch effect name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative mb-6"
          >
            <h1 className="font-neo font-black text-5xl md:text-7xl lg:text-8xl text-neo-green mb-2 relative tracking-widest">
              <motion.span
                animate={{ opacity: [1, 0.8, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative z-10"
              >
                ROHITH S
              </motion.span>
              {/* Glitch layers */}
              <span className="absolute inset-0 text-neo-cyan animate-neon-flicker opacity-20 translate-x-1">
                ROHITH S
              </span>
              <span className="absolute inset-0 text-neo-cyan animate-neon-flicker opacity-20 -translate-x-1">
                ROHITH S
              </span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 font-neo tracking-wide"
          >
            <Code2 className="inline w-6 h-6 text-neo-cyan mr-2" />
            FULL STACK DEVELOPER
            <Sparkles className="inline w-6 h-6 text-neo-green ml-2" />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 font-cyber"
          >
            Crafting digital experiences with cutting-edge technologies and innovative solutions. 
            Where creativity meets code in the cyberpunk realm of development.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-gradient-neon hover:shadow-glow-green text-neo-dark font-neo font-bold px-8 py-3 transition-all duration-300 hover:scale-105 text-lg tracking-wide"
            >
              VIEW MY WORK
              <ChevronDown className="ml-2 w-4 h-4" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-neo-cyan text-neo-cyan hover:bg-neo-cyan/10 hover:shadow-glow-cyan font-neo font-bold px-8 py-3 transition-all duration-300 hover:scale-105 text-lg tracking-wide"
            >
              CONTACT ME
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-muted-foreground"
            >
              <span className="text-sm font-neo mb-2 tracking-widest">SCROLL</span>
              <ChevronDown className="w-4 h-4 text-neo-green animate-pulse" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;