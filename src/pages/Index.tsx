import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Twitter, User, Briefcase } from 'lucide-react';
import neuralDashboard from '@/assets/neural-dashboard.jpg';
import cyberEcommerce from '@/assets/cyber-ecommerce.jpg';
import neonChat from '@/assets/neon-chat.jpg';

const Index = () => {
  // Sample project data
  const projects = [
    {
      title: "Neural Network Dashboard",
      description: "An AI-powered analytics dashboard with real-time data visualization and machine learning insights.",
      image: neuralDashboard,
      link: "https://example.com",
      github: "https://github.com",
      technologies: ["React", "TypeScript", "Python", "TensorFlow"]
    },
    {
      title: "Cyberpunk E-Commerce",
      description: "Futuristic shopping platform with 3D product visualization and AR integration.",
      image: cyberEcommerce,
      link: "https://example.com",
      github: "https://github.com",
      technologies: ["Next.js", "Three.js", "Stripe", "PostgreSQL"]
    },
    {
      title: "Neon Chat App",
      description: "Real-time messaging application with end-to-end encryption and cyberpunk UI design.",
      image: neonChat,
      link: "https://example.com",
      github: "https://github.com",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"]
    }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com', color: 'text-neon-purple' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', color: 'text-neon-cyan' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com', color: 'text-neon-pink' },
  ];

  return (
    <div className="min-h-screen bg-cyber-dark text-foreground">
      <Navbar />
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-neon-purple mb-4">
                <User className="inline w-8 h-8 mr-3 text-neon-cyan" />
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-neon mx-auto"></div>
            </div>

            <div className="bg-cyber-surface/50 backdrop-blur-sm border border-neon-purple/20 rounded-lg p-8 hover:border-neon-purple/50 transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-orbitron font-bold text-xl text-neon-cyan mb-4">
                    Digital Architect & Code Artist
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    I'm a passionate full-stack developer who specializes in creating 
                    immersive digital experiences. With expertise in modern web technologies 
                    and a love for cyberpunk aesthetics, I bring futuristic visions to life 
                    through clean, efficient code.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    When I'm not coding, you'll find me exploring new technologies, 
                    contributing to open source projects, or designing the next 
                    generation of user interfaces.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="bg-neon-purple/10 p-4 rounded border border-neon-purple/20">
                    <h4 className="font-orbitron text-neon-purple mb-2">Frontend</h4>
                    <p className="text-sm text-muted-foreground">React, TypeScript, Next.js, Tailwind CSS</p>
                  </div>
                  <div className="bg-neon-cyan/10 p-4 rounded border border-neon-cyan/20">
                    <h4 className="font-orbitron text-neon-cyan mb-2">Backend</h4>
                    <p className="text-sm text-muted-foreground">Node.js, Python, PostgreSQL, MongoDB</p>
                  </div>
                  <div className="bg-neon-pink/10 p-4 rounded border border-neon-pink/20">
                    <h4 className="font-orbitron text-neon-pink mb-2">Tools</h4>
                    <p className="text-sm text-muted-foreground">Docker, AWS, Vercel, Figma</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-neon-purple mb-4">
              <Briefcase className="inline w-8 h-8 mr-3 text-neon-cyan" />
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-neon mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore my latest work showcasing cutting-edge technology and innovative design
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-neon-purple mb-4">
              <Mail className="inline w-8 h-8 mr-3 text-neon-cyan" />
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-neon mx-auto mb-8"></div>
            
            <div className="bg-cyber-surface/50 backdrop-blur-sm border border-neon-purple/20 rounded-lg p-8 hover:border-neon-purple/50 transition-all duration-300">
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Ready to start your next project? Let's connect and create something amazing together. 
                I'm always open to discussing new opportunities and innovative ideas.
              </p>
              
              <Button
                size="lg"
                className="bg-gradient-neon hover:shadow-glow-purple text-cyber-dark font-orbitron font-bold px-8 py-3 mb-8 transition-all duration-300 hover:scale-105"
              >
                <Mail className="mr-2 w-5 h-5" />
                Send Message
              </Button>

              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    viewport={{ once: true }}
                    className={`p-3 bg-cyber-surface border border-current rounded-full ${social.color} hover:shadow-glow-purple transition-all duration-300`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-neon-purple/20 bg-cyber-surface/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground font-orbitron">
            © 2024 CYBER DEV. Crafted with <span className="text-neon-pink">♥</span> in the digital realm.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;