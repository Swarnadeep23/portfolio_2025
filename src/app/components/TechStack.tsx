'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const technologies = [
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'MongoDB', icon: FaDatabase, color: '#47A248' },
];

export default function TechStack() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Technologies I Work With</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I use modern technologies to build scalable and performant web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <tech.icon className="w-12 h-12" style={{ color: tech.color }} />
              </div>
              <p className="text-gray-800 font-medium">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 