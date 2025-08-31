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
    { name: 'Instagram', icon: Github, href: 'https://instagram.com/neotokyo_mtl', color: 'text-neo-green' },
    { name: 'Location', icon: Linkedin, href: 'https://maps.google.com', color: 'text-neo-cyan' },
    { name: 'Reservations', icon: Twitter, href: 'tel:+1234567890', color: 'text-neo-green' },
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
                ABOUT THE BAR
              </h2>
              <div className="w-20 h-1 bg-gradient-neon mx-auto"></div>
            </div>

            <div className="bg-neo-surface/50 backdrop-blur-sm border border-neo-green/20 rounded p-8 hover:border-neo-green/50 transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-neo font-bold text-xl text-neo-cyan mb-4 tracking-wide">
                    Cyberpunk Dining Experience
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Welcome to Neo Tokyo - where the future of dining meets traditional 
                    ramen craftsmanship. Our AI-enhanced kitchen and immersive cyberpunk 
                    atmosphere create an unforgettable culinary journey.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Every bowl is crafted with precision technology while honoring 
                    ancient noodle-making traditions. Step into tomorrow, taste yesterday.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="bg-neo-green/10 p-4 rounded border border-neo-green/20">
                    <h4 className="font-neo text-neo-green mb-2 tracking-wide">SPECIALTY RAMEN</h4>
                    <p className="text-sm text-muted-foreground">Tonkotsu, Miso, Shoyu, Cyberpunk Special</p>
                  </div>
                  <div className="bg-neo-cyan/10 p-4 rounded border border-neo-cyan/20">
                    <h4 className="font-neo text-neo-cyan mb-2 tracking-wide">ATMOSPHERE</h4>
                    <p className="text-sm text-muted-foreground">Neon lights, retro-future design, immersive dining</p>
                  </div>
                  <div className="bg-neo-green/10 p-4 rounded border border-neo-green/20">
                    <h4 className="font-neo text-neo-green mb-2 tracking-wide">EXPERIENCE</h4>
                    <p className="text-sm text-muted-foreground">AI ordering, holographic menus, live kitchen</p>
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
              SIGNATURE DISHES
            </h2>
            <div className="w-20 h-1 bg-gradient-neon mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our fusion of traditional ramen and cutting-edge culinary technology
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
              VISIT US
            </h2>
            <div className="w-20 h-1 bg-gradient-neon mx-auto mb-8"></div>
            
            <div className="bg-neo-surface/50 backdrop-blur-sm border border-neo-green/20 rounded p-8 hover:border-neo-green/50 transition-all duration-300">
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Ready to experience the future of dining? Join us at Neo Tokyo 
                for an unforgettable journey through flavors and technology. 
                Reservations recommended for the full cyberpunk experience.
              </p>
              
              <Button
                size="lg"
                className="bg-gradient-neon hover:shadow-glow-green text-neo-dark font-neo font-bold px-8 py-3 mb-8 transition-all duration-300 hover:scale-105 text-lg tracking-wide"
              >
                <Mail className="mr-2 w-5 h-5" />
                MAKE RESERVATION
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
            © 2024 NEO TOKYO. Crafted in the digital realm <span className="text-neo-green">@NEOTOKYO_MTL</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;