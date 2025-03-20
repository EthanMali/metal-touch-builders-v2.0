import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Building2, Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-lg shadow-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <Building2 className="h-8 w-8 text-yellow-400" />
            </motion.div>
            <span className="text-2xl font-bold text-gray-100">
              Metal Touch
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
              >
                <NavLink
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-white font-semibold hover:text-yellow-400"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </NavLink>
              </motion.div>
            ))}
            <motion.a
              href="/contact"
              className="flex items-center bg-yellow-400 text-black px-4 py-2 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="h-4 w-4 mr-2" />
              Contact Us
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-100 hover:text-yellow-400 transition relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </nav>

      {/* Background Blur Overlay (No White Screen) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(10px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu (New Design) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'spring', stiffness: 90, damping: 18 }}
            className="fixed top-0 left-5 -translate-x-1/2 w-[90%] max-w-sm bg-[#1E1E2E] text-gray-100 p-8 rounded-lg shadow-xl flex flex-col items-center space-y-6 z-50"
          >
            <button
              className="self-end text-yellow-400"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-8 w-8" />
            </button>
            {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
              >
                <NavLink
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-xl font-medium hover:text-yellow-400"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </NavLink>
              </motion.div>
            ))}
            <motion.a
              href="/contact"
              className="flex items-center bg-yellow-400 text-black px-6 py-3 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="h-5 w-5 mr-2" />
              Contact Us
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
