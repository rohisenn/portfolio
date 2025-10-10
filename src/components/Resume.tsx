import { motion } from 'framer-motion';
import { Download, Calendar, MapPin, Mail, Github, Linkedin, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resume = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Rohith_S_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="font-neo font-bold text-3xl md:text-4xl text-neo-green mb-4 tracking-widest">
              <GraduationCap className="inline w-8 h-8 mr-3 text-neo-cyan" />
              RESUME
            </h2>
            <div className="w-20 h-1 bg-gradient-neon mx-auto mb-6"></div>
            <Button
              onClick={downloadResume}
              className="cursor-target bg-gradient-neon hover:shadow-glow-green text-neo-dark font-neo font-bold px-6 py-2 transition-all hover:scale-105 tracking-wide"
            >
              <Download className="mr-2 w-4 h-4" />
              DOWNLOAD RESUME
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-neo-surface/50 backdrop-blur-sm border border-neo-green/20 rounded p-6">
                <h3 className="font-neo font-bold text-xl text-neo-cyan mb-4 tracking-wide">CONTACT</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-neo-green" />
                    <span className="text-muted-foreground">rohithsenthil06@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-neo-green" />
                    <span className="text-muted-foreground">Coimbatore, Tamil Nadu, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-neo-green" />
                    <span className="text-muted-foreground">github.com/rohisenn</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-neo-green" />
                    <span className="text-muted-foreground">linkedin.com/in/rohith-s</span>
                  </div>
                </div>
              </div>

              <div className="bg-neo-surface/50 backdrop-blur-sm border border-neo-green/20 rounded p-6">
                <h3 className="font-neo font-bold text-xl text-neo-cyan mb-4 tracking-wide">SKILLS</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-neo text-neo-green mb-2 text-sm tracking-wide">FRONTEND</h4>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'JavaScript'].map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-neo-green/10 border border-neo-green/20 rounded text-xs text-muted-foreground">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-neo text-neo-cyan mb-2 text-sm tracking-wide">BACKEND</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'Spring Boot'].map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-neo-cyan/10 border border-neo-cyan/20 rounded text-xs text-muted-foreground">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-neo text-neo-green mb-2 text-sm tracking-wide">TOOLS</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Git', 'Docker', 'AWS', 'Figma', 'VS Code'].map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-neo-green/10 border border-neo-green/20 rounded text-xs text-muted-foreground">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-neo-surface/50 backdrop-blur-sm border border-neo-green/20 rounded p-6">
                <h3 className="font-neo font-bold text-xl text-neo-cyan mb-4 tracking-wide">EDUCATION</h3>
                <div className="border-l-2 border-neo-green/30 pl-6 ml-3">
                  <div className="relative">
                    <div className="absolute -left-8 top-2 w-3 h-3 bg-neo-green rounded-full"></div>
                    <h4 className="font-neo font-bold text-neo-green mb-1">M.Tech Computer Science & Engineering</h4>
                    <p className="text-neo-cyan font-semibold mb-1">Sri Krishna College of Engineering and Technology</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        2020 - 2025 (5 Years Integrated)
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        Coimbatore, Tamil Nadu
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Specialized in full-stack development, data structures, algorithms, and modern web technologies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-neo-surface/50 backdrop-blur-sm border border-neo-green/20 rounded p-6">
                <h3 className="font-neo font-bold text-xl text-neo-cyan mb-4 tracking-wide">EXPERIENCE</h3>
                <div className="border-l-2 border-neo-green/30 pl-6 ml-3">
                  <div className="relative">
                    <div className="absolute -left-8 top-2 w-3 h-3 bg-neo-green rounded-full"></div>
                    <h4 className="font-neo font-bold text-neo-green mb-1">Full Stack Developer</h4>
                    <p className="text-neo-cyan font-semibold mb-1">Freelance Projects</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        2023 - Present
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        Remote
                      </span>
                    </div>
                    <ul className="space-y-1">
                      <li className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-neo-green mt-1">▸</span>
                        <span>Developed 3+ full-stack web applications using React and Node.js</span>
                      </li>
                      <li className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-neo-green mt-1">▸</span>
                        <span>Implemented secure authentication and payment integration systems</span>
                      </li>
                      <li className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-neo-green mt-1">▸</span>
                        <span>Optimized application performance resulting in 40% faster load times</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-neo-surface/50 backdrop-blur-sm border border-neo-green/20 rounded p-6">
                <h3 className="font-neo font-bold text-xl text-neo-cyan mb-4 tracking-wide">KEY PROJECTS</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-neo-green/30 pl-4 ml-2">
                    <div className="relative">
                      <div className="absolute -left-6 top-2 w-2 h-2 bg-neo-green rounded-full"></div>
                      <h4 className="font-neo font-bold text-neo-green mb-1">Food Delivery Web App</h4>
                      <p className="text-xs text-neo-cyan mb-2 font-mono">React, Node.js, MongoDB, Express, Stripe</p>
                      <p className="text-sm text-muted-foreground">Full-featured food delivery platform with real-time tracking</p>
                    </div>
                  </div>
                  <div className="border-l-2 border-neo-green/30 pl-4 ml-2">
                    <div className="relative">
                      <div className="absolute -left-6 top-2 w-2 h-2 bg-neo-green rounded-full"></div>
                      <h4 className="font-neo font-bold text-neo-green mb-1">Product Management System</h4>
                      <p className="text-xs text-neo-cyan mb-2 font-mono">React, Spring Boot, MySQL, Tailwind CSS</p>
                      <p className="text-sm text-muted-foreground">Comprehensive inventory and analytics dashboard</p>
                    </div>
                  </div>
                  <div className="border-l-2 border-neo-green/30 pl-4 ml-2">
                    <div className="relative">
                      <div className="absolute -left-6 top-2 w-2 h-2 bg-neo-green rounded-full"></div>
                      <h4 className="font-neo font-bold text-neo-green mb-1">Task Management Dashboard</h4>
                      <p className="text-xs text-neo-cyan mb-2 font-mono">React, Redux, Firebase, Material-UI</p>
                      <p className="text-sm text-muted-foreground">Collaborative task management with drag-and-drop functionality</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;