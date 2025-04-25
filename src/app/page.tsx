'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap, FaLinkedin, FaInstagram } from 'react-icons/fa';
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
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/portfolio_2025/mountain-bg.jpg"
          alt="Mountain Background"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
          Hi, I'm Swarnadeep Maity
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-600">
          Full Stack Developer & UI/UX Enthusiast
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#4B79A1] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#3A5F80] transition-colors"
            >
              View My Work
            </motion.button>
          </Link>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#4B79A1] px-8 py-3 rounded-lg text-lg font-semibold border-2 border-[#4B79A1] hover:bg-[#4B79A1] hover:text-white transition-colors"
            >
              Contact Me
            </motion.button>
          </Link>
        </div>
      </motion.div>

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
