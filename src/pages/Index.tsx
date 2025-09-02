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
  // Portfolio projects
  const projects = [
    {
      title: "AI Analytics Dashboard",
      description: "A comprehensive analytics platform with real-time data visualization, machine learning insights, and predictive analytics for business intelligence.",
      image: neuralDashboard,
      link: "https://rohiths-analytics.vercel.app",
      github: "https://github.com/rohiths/ai-dashboard",
      technologies: ["React", "TypeScript", "Python", "TensorFlow", "D3.js"]
    },
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with advanced product filtering, secure payments, and responsive design optimized for performance.",
      image: cyberEcommerce,
      link: "https://rohiths-store.vercel.app",
      github: "https://github.com/rohiths/ecommerce-platform",
      technologies: ["Next.js", "Tailwind CSS", "Stripe", "PostgreSQL", "Prisma"]
    },
    {
      title: "Real-Time Chat Application",
      description: "Secure messaging platform with real-time communication, file sharing, and modern UI/UX design patterns.",
      image: neonChat,
      link: "https://rohiths-chat.vercel.app",
      github: "https://github.com/rohiths/realtime-chat",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "JWT"]
    }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/rohiths', color: 'text-neo-green' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/rohiths', color: 'text-neo-cyan' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/rohiths', color: 'text-neo-green' },
  ];

  return (
    <div className="min-h-screen bg-neo-dark text-foreground"
         style={{
           backgroundImage: `
             linear-gradient(rgba(0, 255, 170, 0.05) 1px, transparent 1px),
             linear-gradient(90deg, rgba(0, 255, 170, 0.05) 1px, transparent 1px)
           `,
           backgroundSize: '40px 40px'
         }}
    >
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
              <h2 className="font-neo font-bold text-3xl md:text-4xl text-neo-green mb-4 tracking-widest">
                <User className="inline w-8 h-8 mr-3 text-neo-cyan" />
                ABOUT ME
              </h2>
              <div className="w-20 h-1 bg-gradient-neon mx-auto"></div>
            </div>

            <div className="bg-neo-surface/50 backdrop-blur-sm border border-neo-green/20 rounded p-8 hover:border-neo-green/50 transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-neo font-bold text-xl text-neo-cyan mb-4 tracking-wide">
                    Full Stack Developer
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Welcome to my digital realm - where innovative code meets cutting-edge design. 
                    I specialize in creating immersive web experiences and robust applications 
                    that push the boundaries of modern technology.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Every project is crafted with precision and passion, combining clean code 
                    with stunning visuals. Building tomorrow's web, today.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="bg-neo-green/10 p-4 rounded border border-neo-green/20">
                    <h4 className="font-neo text-neo-green mb-2 tracking-wide">FRONTEND</h4>
                    <p className="text-sm text-muted-foreground">React, TypeScript, Next.js, Tailwind CSS</p>
                  </div>
                  <div className="bg-neo-cyan/10 p-4 rounded border border-neo-cyan/20">
                    <h4 className="font-neo text-neo-cyan mb-2 tracking-wide">BACKEND</h4>
                    <p className="text-sm text-muted-foreground">Node.js, Python, PostgreSQL, MongoDB</p>
                  </div>
                  <div className="bg-neo-green/10 p-4 rounded border border-neo-green/20">
                    <h4 className="font-neo text-neo-green mb-2 tracking-wide">TOOLS</h4>
                    <p className="text-sm text-muted-foreground">Docker, AWS, Git, CI/CD, Figma</p>
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
            <h2 className="font-neo font-bold text-3xl md:text-4xl text-neo-green mb-4 tracking-widest">
              <Briefcase className="inline w-8 h-8 mr-3 text-neo-cyan" />
              MY PROJECTS
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
              GET IN TOUCH
            </h2>
            <div className="w-20 h-1 bg-gradient-neon mx-auto mb-8"></div>
            
            <div className="bg-neo-surface/50 backdrop-blur-sm border border-neo-green/20 rounded p-8 hover:border-neo-green/50 transition-all duration-300">
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Ready to bring your digital vision to life? Let's collaborate and create 
                something extraordinary together. I'm always excited to work on innovative 
                projects and explore new technological frontiers.
              </p>
              
              <Button
                size="lg"
                className="bg-gradient-neon hover:shadow-glow-green text-neo-dark font-neo font-bold px-8 py-3 mb-8 transition-all duration-300 hover:scale-105 text-lg tracking-wide"
              >
                <Mail className="mr-2 w-5 h-5" />
                HIRE ME
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
                    className={`p-3 bg-neo-surface border border-current rounded ${social.color} hover:shadow-glow-green transition-all duration-300`}
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