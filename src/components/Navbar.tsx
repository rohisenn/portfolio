import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, User, GraduationCap, Briefcase, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Resume', href: '#resume', icon: GraduationCap },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-neo-dark/90 backdrop-blur-md border-b border-neo-green/20"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="font-neo font-bold text-xl text-neo-green tracking-wider cursor-pointer"
            data-text="</ROHITH S>"
          >
            &lt;/ROHITH S&gt;
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-target flex items-center space-x-2 text-foreground hover:text-neo-green transition-all duration-300 relative group ripple"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <item.icon className="w-4 h-4 text-neo-cyan" />
                </motion.div>
                <span className="font-neo text-lg tracking-wide glitch-text" data-text={item.name}>{item.name}</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-neon group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-target text-neo-green hover:text-neo-cyan transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-neo-green/20"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => setIsOpen(false)}
                className="cursor-target flex items-center space-x-3 py-3 text-foreground hover:text-neo-green transition-colors duration-300"
              >
                <item.icon className="w-4 h-4 text-neo-cyan" />
                <span className="font-neo text-lg tracking-wide">{item.name}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;