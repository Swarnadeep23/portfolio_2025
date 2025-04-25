'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap } from 'react-icons/fa';
import { SiNextdotjs, SiMysql, SiPython } from 'react-icons/si';

export default function Home() {
  const technologies = [
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/mountain-bg.jpg"
            alt="Mountain Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold text-white mb-6"
              >
                Swarnadeep Maity
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-white mb-6"
              >
                Frontend Developer
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-white mb-8"
              >
                I am a frontend developer with hands-on experience in building responsive and interactive web applications using React.js, HTML, CSS, JavaScript, and Bootstrap. I focus on creating clean, user-friendly interfaces with a strong emphasis on performance and usability.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col gap-6"
              >
                <div className="flex gap-4 justify-center lg:justify-start">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Link 
                      href="/projects" 
                      className="bg-[#4B79A1] hover:bg-[#3A5F80] text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300"
                    >
                      View My Work
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Link 
                      href="/about" 
                      className="bg-[#4B79A1] hover:bg-[#3A5F80] text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300"
                    >
                      About Me
                    </Link>
                  </motion.div>
                </div>
                
                {/* Social Media Icons */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex gap-6 justify-center lg:justify-start"
                >
                  <motion.a
                    href="https://www.linkedin.com/in/swarnadeep-maity-a98a2827a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="text-white hover:text-[#0077B5] transition-colors duration-300"
                  >
                    <FaLinkedin className="w-8 h-8" />
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/swarnadeep__maity?igsh=cDJxbWVpZ2FlMWJ4"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="text-white hover:text-[#E4405F] transition-colors duration-300"
                  >
                    <FaInstagram className="w-8 h-8" />
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4,
                hover: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }
              }}
              className="lg:w-1/2 flex justify-center"
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden">
                <Image
                  src="/images/profile.jpg"
                  alt="Swarnadeep Maity"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="py-20 bg-[#EEF2F7]">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          >
            Technologies I Work With
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <motion.div 
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: `0 0 20px ${tech.color}40`,
                  }}
                  className="w-16 h-16 flex items-center justify-center rounded-xl bg-white shadow-lg mb-3"
                >
                  <tech.icon className="w-10 h-10" style={{ color: tech.color }} />
                </motion.div>
                <span className="text-gray-700 font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
