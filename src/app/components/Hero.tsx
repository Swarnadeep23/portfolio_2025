'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="min-h-screen bg-[#EEF2F7] flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold mb-6 text-gray-800">
              Hi, I'm <span className="text-[#4B79A1]">Swarnadeep</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A passionate Full Stack Developer with expertise in creating modern web applications.
              I specialize in React, Next.js, and building scalable solutions.
            </p>
            <div className="flex space-x-4">
              <Link
                href="/projects"
                className="bg-[#4B79A1] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#3A5F80] hover:shadow-xl transition-all duration-300"
              >
                View My Work
              </Link>
              <Link
                href="/resume"
                className="bg-white text-[#4B79A1] px-6 py-3 rounded-lg shadow-lg hover:bg-gray-50 hover:shadow-xl transition-all duration-300"
              >
                Download Resume
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="w-full h-96 relative">
              <Image
                src="/images/profile.jpg"
                alt="Profile"
                width={200}
                height={200}
                className="rounded-full border-4 border-white shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 