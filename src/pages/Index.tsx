import { motion } from 'framer-motion';
import ScrambledText from '@/components/ScrambledText';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import TargetCursor from '@/components/TargetCursor';
import ProfileCard from '@/components/ProfileCard';
import { Button } from '@/components/ui/button';
import DecryptedText from '@/components/DecryptedText';

import SpaceClothGrid from '@/components/SpaceClothGrid';
import InteractiveParticles from '@/components/InteractiveParticles';

import { Mail, Github, Linkedin, Instagram, User, Briefcase } from 'lucide-react';
import neuralDashboard from '@/assets/neural-dashboard.jpg';
import cyberEcommerce from '@/assets/cyber-ecommerce.jpg';
import neonChat from '@/assets/neon-chat.jpg';

const Index = () => {
  // Portfolio projects
  const projects = [
    {
      title: "Food Delivery Web App",
      description: "A modern food delivery platform with real-time order tracking, secure payment integration, and role based authentication, and intuitive user interface for seamless food ordering experience.",
      image: neuralDashboard,
      link: "#",
      github: "#",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"]
    },
    {
      title: "First Level Job Screening System",
      description: "AI-powered job screening system that matches resumes to job descriptions using NLP to streamline the hiring process and identify top candidates efficiently.",
      image: cyberEcommerce,
      link: "#",
      github: "#",
      technologies: ["React", "FastAPI", "Python", "Sentence Transformers", "Tailwind CSS"]
    },
    {
      title: "Online File Sharing Platform",
      description: "Cloud-based file sharing platform with secure upload and download capabilities, real-time file synchronization, and collaborative sharing features for seamless data management.",
      image: neonChat,
      link: "#",
      github: "#",
      technologies: ["React", "Node.js", "AWS S3", "MongoDB", "Socket.io"]
    }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://www.github.com/rohisenn', color: 'text-neo-green' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/rohith-s-7a20ba290/', color: 'text-neo-cyan' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/_rohisen/?igsh=MTZ6NDh4end1OGd4bQ%3D%3D#', color: 'text-neo-green' },
  ];

  return (
    <div className="min-h-screen bg-neo-dark text-foreground relative">
      <SpaceClothGrid />
      <InteractiveParticles />
      {/* Floating Interactive Elements */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Binary Code Streams */}
        <motion.div
          animate={{ 
            y: [0, -100, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 left-10 text-neo-green text-xs font-mono opacity-30"
        >
          01001000<br/>11010110<br/>00110101
        </motion.div>
        
        {/* Interactive Geometric Shapes */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 120, 240, 360],
            scale: [1, 1.2, 1]
          }}
          whileHover={{ scale: 1.5, rotate: 180 }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-16 left-16 w-6 h-6 border-2 border-neo-green cursor-pointer"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', pointerEvents: 'auto' }}
        />
        
        {/* Glowing Orbs */}
        <motion.div
          animate={{ 
            y: [0, -35, 0],
            scale: [1, 1.4, 0.8, 1],
            opacity: [0.4, 0.8, 0.4]
          }}
          whileHover={{ 
            scale: 2,
            boxShadow: '0 0 30px rgba(0, 255, 170, 0.8)'
          }}
          transition={{ 
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-3/4 left-20 w-6 h-6 bg-neo-green/30 border-2 border-neo-green rounded-full cursor-pointer"
          style={{ pointerEvents: 'auto' }}
        />
        
        {/* Circuit Lines */}
        <motion.div
          animate={{ 
            scaleX: [0, 1, 0],
            opacity: [0, 0.6, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 left-0 w-32 h-0.5 bg-gradient-to-r from-transparent via-neo-green to-transparent"
        />
        
        {/* Floating Data Blocks */}
        <motion.div
          animate={{ 
            y: [0, -50, 0],
            rotate: [0, 5, -5, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          whileHover={{ 
            scale: 1.1,
            rotate: 10,
            borderColor: 'rgba(0, 255, 170, 1)'
          }}
          transition={{ 
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 right-1/4 w-8 h-8 border border-neo-green/40 bg-neo-green/5 cursor-pointer flex items-center justify-center"
          style={{ pointerEvents: 'auto' }}
        >
          <div className="text-xs text-neo-green font-mono">01</div>
        </motion.div>
        
        {/* Pulsing Network Nodes */}
        <motion.div
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.9, 0.4]
          }}
          whileHover={{ 
            scale: 2,
            opacity: 1,
            boxShadow: '0 0 40px rgba(0, 255, 170, 0.9)'
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/2 w-3 h-3 bg-neo-green rounded-full cursor-pointer"
          style={{ pointerEvents: 'auto' }}
        />
      </div>
      <div className="relative z-20">
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />
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
            className="w-full"
          >
            <div className="text-center mb-12">
              <h2 className="font-neo font-bold text-3xl md:text-4xl text-neo-green mb-4 tracking-widest">
                <User className="inline w-8 h-8 mr-3 text-neo-cyan" />
                ABOUT ME
              </h2>
              <div className="w-20 h-1 bg-gradient-neon mx-auto"></div>
            </div>

            <div className="flex flex-col xl:flex-row items-start xl:justify-between gap-6 xl:gap-8">
              <div className="w-full xl:w-3/5">
                <div className="bg-neo-surface/50 backdrop-blur-sm border border-neo-green/20 rounded p-8 hover:border-neo-green/50 transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-neo font-bold text-xl text-neo-cyan mb-4 tracking-wide">
                        <DecryptedText 
                          text="Software Developer"
                          animateOn="view"
                          speed={80}
                          maxIterations={12}
                          sequential={true}
                          className="text-neo-cyan"
                          encryptedClassName="text-neo-green"
                        />
                      </h3>
                      <ScrambledText
                        radius={80}
                        duration={1.0}
                        speed={0.5}
                        scrambleChars="01"
                        className="text-muted-foreground"
                      >
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          Welcome to my digital realm - where innovative code meets cutting-edge design. 
                          I specialize in creating immersive web experiences and robust applications 
                          that push the boundaries of modern technology.
                        </p>
                      </ScrambledText>
                      
                      <div className="bg-neo-dark/30 p-4 rounded border border-neo-cyan/20 mb-4">
                        <h4 className="font-neo text-neo-green mb-3 tracking-wide text-sm">
                          <DecryptedText 
                            text="EDUCATION"
                            animateOn="view"
                            speed={60}
                            maxIterations={10}
                            sequential={true}
                            className="text-neo-green"
                            encryptedClassName="text-neo-cyan"
                          />
                        </h4>
                        <ScrambledText
                          radius={80}
                          duration={1.0}
                          speed={0.5}
                          scrambleChars="01"
                          className="text-muted-foreground"
                        >
                          <p className="text-muted-foreground text-sm leading-relaxed" style={{textAlign: 'left'}}>
                            Currently pursuing <span className="text-neo-cyan font-semibold">M.Tech Computer Science & Engineering</span> 
                            (5 Years Integrated) at <span className="text-neo-green font-semibold">Sri Krishna College of Engineering and Technology</span>, 
                            Coimbatore, Tamil Nadu, India.
                          </p>
                        </ScrambledText>
                      </div>

                      <ScrambledText
                        radius={80}
                        duration={1.0}
                        speed={0.5}
                        scrambleChars="01"
                        className="text-muted-foreground"
                      >
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          With a passion for both frontend and backend development, I thrive on crafting seamless user experiences
                        </p>
                      </ScrambledText>

                    </div>
                    <div className="space-y-4">
                      <div className="bg-neo-green/10 p-4 rounded border border-neo-green/20">
                        <h4 className="font-neo text-neo-green mb-2 tracking-wide">
                          <DecryptedText 
                            text="FRONTEND"
                            animateOn="view"
                            speed={60}
                            maxIterations={10}
                            sequential={true}
                            className="text-neo-green"
                            encryptedClassName="text-neo-cyan"
                          />
                        </h4>
                        <ScrambledText
                          radius={80}
                          duration={1.0}
                          speed={0.5}
                          scrambleChars="01"
                          className="text-muted-foreground"
                        >
                          <p className="text-sm text-muted-foreground text-left">React, TypeScript, Next.js, Tailwind CSS</p>
                        </ScrambledText>
                      </div>
                      <div className="bg-neo-cyan/10 p-4 rounded border border-neo-cyan/20">
                        <h4 className="font-neo text-neo-cyan mb-2 tracking-wide">
                          <DecryptedText 
                            text="BACKEND"
                            animateOn="view"
                            speed={60}
                            maxIterations={10}
                            sequential={true}
                            className="text-neo-cyan"
                            encryptedClassName="text-neo-green"
                          />
                        </h4>
                        <ScrambledText
                          radius={80}
                          duration={1.0}
                          speed={0.5}
                          scrambleChars="01"
                          className="text-muted-foreground"
                        >
                          <p className="text-sm text-muted-foreground text-left">Node.js, Python, Express, Spring Boot</p>
                        </ScrambledText>
                      </div>
                      <div className="bg-neo-green/10 p-4 rounded border border-neo-green/20">
                        <h4 className="font-neo text-neo-green mb-2 tracking-wide">
                          <DecryptedText 
                            text="TOOLS"
                            animateOn="view"
                            speed={60}
                            maxIterations={10}
                            sequential={true}
                            className="text-neo-green"
                            encryptedClassName="text-neo-cyan"
                          />
                        </h4>
                        <ScrambledText
                          radius={80}
                          duration={1.0}
                          speed={0.5}
                          scrambleChars="01"
                          className="text-muted-foreground"
                        >
                          <p className="text-sm text-muted-foreground text-left">Docker, Git, Figma, VS Code</p>
                        </ScrambledText>
                      </div>
                      <div className="bg-neo-cyan/10 p-4 rounded border border-neo-cyan/20">
                        <h4 className="font-neo text-neo-cyan mb-2 tracking-wide">
                          <DecryptedText 
                            text="CLOUD & DEVOPS"
                            animateOn="view"
                            speed={60}
                            maxIterations={10}
                            sequential={true}
                            className="text-neo-cyan"
                            encryptedClassName="text-neo-green"
                          />
                        </h4>
                        <ScrambledText
                          radius={80}
                          duration={1.0}
                          speed={0.5}
                          scrambleChars="01"
                          className="text-muted-foreground"
                        >
                          <p className="text-sm text-muted-foreground text-left">AWS, Azure, Kubernetes, Jenkins</p>
                        </ScrambledText>
                      </div>
                      <div className="bg-neo-green/10 p-4 rounded border border-neo-green/20">
                        <h4 className="font-neo text-neo-green mb-2 tracking-wide">
                          <DecryptedText 
                            text="DATABASES"
                            animateOn="view"
                            speed={60}
                            maxIterations={10}
                            sequential={true}
                            className="text-neo-green"
                            encryptedClassName="text-neo-cyan"
                          />
                        </h4>
                        <ScrambledText
                          radius={80}
                          duration={1.0}
                          speed={0.5}
                          scrambleChars="01"
                          className="text-muted-foreground"
                        >
                          <p className="text-sm text-muted-foreground text-left">MySQL, MongoDB, PostgreSQL, Redis</p>
                        </ScrambledText>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full xl:w-2/5 flex justify-center xl:justify-end">
                <ProfileCard
                  name="ROHITH S"
                  title="Code. Create. Conquer."
                  handle="rohiths"
                  status="Available for Work"
                  contactText="Contact Me"
                  showUserInfo={true}
                  enableTilt={true}
                  onContactClick={() => window.open('mailto:rohithsenthil06@gmail.com?subject=Project Inquiry&body=Hi Rohith, I would like to discuss a project with you.')} behindGradient={undefined} innerGradient={undefined} miniAvatarUrl={undefined}                />
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
            <h2 className="font-neo font-bold text-3xl md:text-4xl text-neo-green mb-4 tracking-widest">
              <Briefcase className="inline w-8 h-8 mr-3 text-neo-cyan" />
              MY PROJECTS
            </h2>
            <div className="w-20 h-1 bg-gradient-neon mx-auto mb-6"></div>
            <ScrambledText
              radius={80}
              duration={1.0}
              speed={0.5}
              scrambleChars="01"
              className="text-muted-foreground"
            >
              <p className="text-muted-foreground max-w-2xl mx-auto text-center">
                Explore my portfolio of innovative web applications and digital solutions
              </p>
            </ScrambledText>
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
            <h2 className="font-neo font-bold text-3xl md:text-4xl text-neo-green mb-4 tracking-widest">
              <Mail className="inline w-8 h-8 mr-3 text-neo-cyan" />
              GET IN TOUCH
            </h2>
            <div className="w-20 h-1 bg-gradient-neon mx-auto mb-8"></div>
            
            <div className="bg-neo-surface/50 backdrop-blur-sm border border-neo-green/20 rounded p-8 hover:border-neo-green/50 transition-all duration-300">
              <div className="text-center">
                <ScrambledText
                  radius={80}
                  duration={1.0}
                  speed={0.5}
                  scrambleChars="01"
                  className="text-muted-foreground"
                >
                  <p className="text-muted-foreground mb-8 leading-relaxed text-base tracking-normal">
                    Ready to bring your digital vision to life? Let's collaborate and create 
                    something extraordinary together. I'm always excited to work on innovative 
                    projects and explore new technological frontiers.
                  </p>
                </ScrambledText>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="cursor-target bg-gradient-neon hover:shadow-glow-green text-neo-dark font-neo font-bold px-8 py-3 mb-8 transition-all hover:scale-105 text-lg tracking-widest"
                  onClick={() => window.open('mailto:rohithsenthil06@gmail.com?subject=Project Inquiry&body=Hi Rohith, I would like to discuss a project with you.')}
                >
                  <Mail className="mr-2 w-5 h-5" />
                  HIRE ME
                </Button>
              </motion.div>

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
                    whileHover={{ 
                      scale: 1.2, 
                      y: -5,
                      rotate: [0, -10, 10, 0],
                      boxShadow: "0 0 20px hsl(170 100% 50% / 0.6)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    viewport={{ once: true }}
                    className={`cursor-target p-3 bg-neo-surface border border-current rounded ${social.color} hover:shadow-glow-green transition-all duration-300`}
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
      <footer className="py-8 border-t border-neo-green/20 bg-neo-surface/30">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <ScrambledText
            radius={80}
            duration={1.0}
            speed={0.5}
            scrambleChars="01"
            className="text-muted-foreground"
          >
            <p className="text-muted-foreground font-neo tracking-wide text-center">
              © 2024 ROHITH S. Crafted in the digital realm <span className="text-neo-green">@ROHITHS</span>
            </p>
          </ScrambledText>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default Index;