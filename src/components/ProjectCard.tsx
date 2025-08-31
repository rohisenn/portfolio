import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

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
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-cyber-surface/50 backdrop-blur-sm rounded-lg border border-neon-purple/20 overflow-hidden hover:border-neon-purple/50 transition-all duration-300"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 to-transparent" />
        
        {/* Hover overlay with links */}
        <div className="absolute inset-0 bg-cyber-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          {link && (
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-neon-purple/20 rounded-full border border-neon-purple hover:bg-neon-purple/30 transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5 text-neon-purple" />
            </motion.a>
          )}
          {github && (
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-neon-cyan/20 rounded-full border border-neon-cyan hover:bg-neon-cyan/30 transition-all duration-300"
            >
              <Github className="w-5 h-5 text-neon-cyan" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        <h3 className="font-orbitron font-bold text-xl text-neon-purple mb-2 group-hover:animate-glow-pulse">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20 rounded font-orbitron"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Animated border effect */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-glow-pulse" 
           style={{ 
             boxShadow: '0 0 20px rgba(138, 43, 226, 0.3), inset 0 0 20px rgba(138, 43, 226, 0.1)' 
           }} 
      />
    </motion.div>
  );
};

export default ProjectCard;