import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import TargetCursor from '@/components/TargetCursor';
import ProfileCard from '@/components/ProfileCard';
import { Button } from '@/components/ui/button';
import DecryptedText from '@/components/DecryptedText';
import InteractiveBackground from '@/components/InteractiveBackground';
import InteractiveElements from '@/components/InteractiveElements';
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
      title: "Product Management System",
      description: "Comprehensive product management solution with inventory tracking, analytics dashboard, and automated workflows for efficient business operations.",
      image: cyberEcommerce,
      link: "#",
      github: "#",
      technologies: ["React", "Javascript", "MySQL", "Spring-boot", "Tailwind CSS"]
    },
    {
      title: "Task Management Dashboard",
      description: "Interactive task management application with drag-and-drop functionality, team collaboration features, and real-time progress tracking for enhanced productivity.",
      image: neonChat,
      link: "#",
      github: "#",
      technologies: ["React", "Redux", "Firebase", "Material-UI", "Chart.js"]
    }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://www.github.com/rohisenn', color: 'text-neo-green' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/rohith-s-7a20ba290/', color: 'text-neo-cyan' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/_rohisen/?igsh=MTZ6NDh4end1OGd4bQ%3D%3D#', color: 'text-neo-green' },
  ];

  return (
    <div className="min-h-screen bg-neo-dark text-foreground relative overflow-hidden"
         style={{
           backgroundImage: `
             linear-gradient(rgba(0, 255, 170, 0.05) 1px, transparent 1px),
             linear-gradient(90deg, rgba(0, 255, 170, 0.05) 1px, transparent 1px)
           `,
           backgroundSize: '40px 40px'
         }}
    >
      <InteractiveBackground />
      <InteractiveElements />
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
                <DecryptedText 
                  text="ABOUT ME"
                  animateOn="view"
                  speed={100}
                  maxIterations={15}
                  sequential={true}
                  className="text-neo-green"
                  encryptedClassName="text-neo-cyan"
                />
              </h2>
              <div className="w-20 h-1 bg-gradient-neon mx-auto"></div>
            </div>

            <div className="flex flex-col xl:flex-row items-start xl:justify-between gap-1 xl:gap-3">
              <div className="w-full xl:w-3/5">
                <div className="bg-neo-surface/50 backdrop-blur-sm border border-neo-green/20 rounded p-8 hover:border-neo-green/50 transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-neo font-bold text-xl text-neo-cyan mb-4 tracking-wide">
                        <DecryptedText 
                          text="Full Stack Developer"
                          animateOn="view"
                          speed={80}
                          maxIterations={12}
                          sequential={true}
                          className="text-neo-cyan"
                          encryptedClassName="text-neo-green"
                        />
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Welcome to my digital realm - where innovative code meets cutting-edge design. 
                        I specialize in creating immersive web experiences and robust applications 
                        that push the boundaries of modern technology.
                      </p>
                      
                      <div className="bg-neo-dark/30 p-4 rounded border border-neo-cyan/20 mb-4">
                        <h4 className="font-neo text-neo-green mb-2 tracking-wide text-sm">
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
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Currently pursuing <span className="text-neo-cyan font-semibold">M.Tech Computer Science & Engineering</span> 
                          (5 Years Integrated) at <span className="text-neo-green font-semibold">Sri Krishna College of Engineering and Technology</span>, 
                          Coimbatore, Tamil Nadu, India.
                        </p>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        With a passion for both frontend and backend development, I thrive on crafting seamless user experiences  
                      </p>

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
                        <p className="text-sm text-muted-foreground">React, TypeScript, Next.js, Tailwind CSS</p>
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
                        <p className="text-sm text-muted-foreground">Node.js, Python, PostgreSQL, MongoDB</p>
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
                        <p className="text-sm text-muted-foreground">Docker, AWS, Git, CI/CD, Figma</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full xl:w-2/5 flex justify-center xl:justify-end">
                <ProfileCard
                  name="ROHITH S"
                  title="Full Stack Developer"
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
              <DecryptedText 
                text="MY PROJECTS"
                animateOn="view"
                speed={100}
                maxIterations={15}
                sequential={true}
                className="text-neo-green"
                encryptedClassName="text-neo-cyan"
              />
            </h2>
            <div className="w-20 h-1 bg-gradient-neon mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore my portfolio of innovative web applications and digital solutions
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
            <h2 className="font-neo font-bold text-3xl md:text-4xl text-neo-green mb-4 tracking-widest">
              <Mail className="inline w-8 h-8 mr-3 text-neo-cyan" />
              <DecryptedText 
                text="GET IN TOUCH"
                animateOn="view"
                speed={100}
                maxIterations={15}
                sequential={true}
                className="text-neo-green"
                encryptedClassName="text-neo-cyan"
              />
            </h2>
            <div className="w-20 h-1 bg-gradient-neon mx-auto mb-8"></div>
            
            <div className="bg-neo-surface/50 backdrop-blur-sm border border-neo-green/20 rounded p-8 hover:border-neo-green/50 transition-all duration-300">
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Ready to bring your digital vision to life? Let's collaborate and create 
                something extraordinary together. I'm always excited to work on innovative 
                projects and explore new technological frontiers.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="cursor-target ripple bg-gradient-neon hover:shadow-glow-green text-neo-dark font-neo font-bold px-8 py-3 mb-8 transition-all duration-300 hover:scale-105 text-lg tracking-wide pulse-glow"
                  onClick={() => window.open('mailto:rohithsenthil06@gmail.com?subject=Project Inquiry&body=Hi Rohith, I would like to discuss a project with you.')}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Mail className="mr-2 w-5 h-5" />
                  </motion.div>
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
                    className={`cursor-target p-3 bg-neo-surface border border-current rounded ${social.color} hover:shadow-glow-green transition-all duration-300 ripple neon-border pulse-glow`}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-neo-green/20 bg-neo-surface/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground font-neo tracking-wide">
            © 2024 ROHITH S. Crafted in the digital realm <span className="text-neo-green">@ROHITHS</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;