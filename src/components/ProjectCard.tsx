import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { WobbleCard } from './ui/wobble-card';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
  github?: string;
  technologies: string[];
}

const ProjectCard = ({ title, description, image, link, github, technologies }: ProjectCardProps) => {
  return (
<<<<<<< HEAD
    <WobbleCard
      containerClassName="group relative bg-neo-surface/80 backdrop-blur-sm border border-neo-green/20 hover:border-neo-green/50 transition-all duration-300 min-h-[400px]"
      className="p-0"
=======
    <motion.div
      whileHover={{ 
        scale: 1.02, 
        y: -5,
        rotateY: 5
      }}
      whileTap={{ scale: 0.98 }}
      className="cursor-target group relative bg-neo-surface/50 backdrop-blur-sm rounded border border-neo-green/20 overflow-hidden hover:border-neo-green/50 transition-all duration-300 neon-border interactive-card ripple"
>>>>>>> 070ea9452abf42a494bea36cee316868655dcbd8
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Image */}
<<<<<<< HEAD
      <div className="relative h-48 overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
=======
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          whileHover={{ scale: 1.15, rotate: 1 }}
          transition={{ duration: 0.3 }}
>>>>>>> 070ea9452abf42a494bea36cee316868655dcbd8
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neo-dark/80 to-transparent" />
        
        {/* Animated scan lines */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0, 255, 170, 0.1) 2px, rgba(0, 255, 170, 0.1) 4px)',
            backgroundSize: '20px 20px'
          }}
        />
        
        {/* Hover overlay with links */}
        <motion.div 
          className="absolute inset-0 bg-neo-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4"
          initial={{ opacity: 0 }}
          whileHover={{ 
            opacity: 1,
            background: [
              'rgba(0, 0, 0, 0.8)',
              'rgba(0, 255, 170, 0.1)',
              'rgba(0, 0, 0, 0.8)'
            ]
          }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          {link && (
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                boxShadow: "0 0 20px hsl(170 100% 50% / 0.8)"
              }}
              whileTap={{ scale: 0.9 }}
              className="cursor-target p-3 bg-neo-green/20 rounded border border-neo-green hover:bg-neo-green/30 transition-all duration-300 ripple pulse-glow"
            >
              <ExternalLink className="w-5 h-5 text-neo-green" />
            </motion.a>
          )}
          {github && (
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.1,
                rotate: [0, 5, -5, 0],
                boxShadow: "0 0 20px hsl(180 100% 50% / 0.8)"
              }}
              whileTap={{ scale: 0.9 }}
              className="cursor-target p-3 bg-neo-cyan/20 rounded border border-neo-cyan hover:bg-neo-cyan/30 transition-all duration-300 ripple pulse-glow"
            >
              <Github className="w-5 h-5 text-neo-cyan" />
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Content */}
<<<<<<< HEAD
      <div className="p-6 relative z-10 bg-neo-surface/90 backdrop-blur-sm">
        <h3 className="font-neo font-bold text-xl text-neo-green mb-2 group-hover:text-neo-cyan transition-colors duration-500 tracking-wide">
=======
      <div className="p-6 relative z-10">
        <h3 className="font-neo font-bold text-xl text-neo-green mb-2 group-hover:text-neo-cyan transition-colors duration-500 tracking-wide glitch-text cursor-pointer" data-text={title}>
>>>>>>> 070ea9452abf42a494bea36cee316868655dcbd8
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.1,
                backgroundColor: 'hsl(180 100% 50% / 0.2)',
                borderColor: 'hsl(180 100% 50%)',
                color: 'hsl(180 100% 50%)'
              }}
              className="cursor-pointer px-2 py-1 text-xs bg-neo-cyan/10 text-neo-cyan border border-neo-cyan/20 rounded font-neo tracking-wide transition-all duration-300 hover:shadow-glow-cyan"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Animated border effect */}
      <div className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-glow-pulse" 
           style={{ 
             boxShadow: '0 0 20px rgba(0, 255, 170, 0.6), inset 0 0 20px rgba(0, 255, 170, 0.2)' 
           }} 
      />
    </WobbleCard>
  );
};

export default ProjectCard;