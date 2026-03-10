import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, Code2, Sparkles, Download } from 'lucide-react';
import DecryptedText from './DecryptedText';
import ScrambledText from './ScrambledText';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Rohith_S_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
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
                className="relative z-10 glitch-text cursor-pointer"
                data-text="ROHITH S"
                whileHover={{ scale: 1.05 }}
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

          {/* Tagline with DecryptedText */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 font-neo tracking-wide flex items-center justify-center"
          >
            <Code2 className="w-6 h-6 text-neo-cyan mr-2" />
            <DecryptedText 
              text="Every Day Is a Second Chance"
              animateOn="view"
              speed={100}
              maxIterations={15}
              sequential={true}
              className="text-neo-green"
              encryptedClassName="text-neo-cyan"
            />
            <Sparkles className="w-6 h-6 text-neo-green ml-2" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4 font-cyber text-center"
          >
            <ScrambledText
              radius={80}
              duration={1.0}
              speed={0.5}
              scrambleChars="01"
              className="text-muted-foreground"
            >
              Crafting digital experiences with cutting-edge technologies and 
              innovative solutions. Where creativity meets development.
            </ScrambledText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-sm text-neo-cyan max-w-xl mx-auto mb-10 font-neo tracking-wide"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
              <span>📍 COIMBATORE, INDIA</span>
              <span className="hidden sm:block text-neo-green">|</span>
              <span>🎓 M.TECH CSE @ SKCET</span>
            </div>
          </motion.div>

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
              className="cursor-target ripple bg-gradient-neon hover:shadow-glow-green text-neo-dark font-neo font-bold px-8 py-3 transition-all   hover:scale-105 text-lg tracking-wide pulse-glow"
            >
              VIEW MY WORK
              <ChevronDown className="ml-2 w-4 h-4" />
            </Button>
            
            <Button
              onClick={downloadResume}
              variant="outline"
              size="lg"
              className="cursor-target ripple cyber-button hover:shadow-glow-cyan font-neo font-bold px-8 py-3 text-lg tracking-wide"
            >
              <Download className="mr-2 w-4 h-4" />
              DOWNLOAD RESUME
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
              <ChevronDown className="w-4 h-4 text-neo-cyan animate-pulse" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;