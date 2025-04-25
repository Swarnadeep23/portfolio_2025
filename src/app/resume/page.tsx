'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Resume() {
  return (
    <div className="min-h-screen py-20 relative">
      {/* Background Image */}
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
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="md:col-span-1 bg-[#4B79A1] rounded-lg p-6 text-white">
                <div className="text-center mb-6">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src="/profile.jpg"
                      alt="Swarnadeep Maity"
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h1 className="text-2xl font-bold">SWARNADEEP</h1>
                  <h2 className="text-xl font-bold">MAITY</h2>
                </div>

                {/* Academic Project Section */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 inline-flex items-center justify-center border-2 border-white rounded-full">
                      📋
                    </span>
                    ACADEMIC PROJECT
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>Developed a full-stack food ordering system using HTML, CSS, Bootstrap, JavaScript, Node.js</li>
                    <li>Integrated user authentication, payment gateway, and order tracking</li>
                    <li>Created a responsive UI with Bootstrap and optimized database for performance</li>
                  </ul>
                </div>

                {/* Contact Section */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 inline-flex items-center justify-center border-2 border-white rounded-full">
                      👤
                    </span>
                    CONTACT
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2">
                      <FaPhone className="w-4 h-4" />
                      9073107700
                    </p>
                    <p className="flex items-center gap-2">
                      <FaEnvelope className="w-4 h-4" />
                      swarnadeepmaity97@gmail.com
                    </p>
                  </div>
                </div>

                {/* Skills Section */}
                <div>
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 inline-flex items-center justify-center border-2 border-white rounded-full">
                      🔧
                    </span>
                    Skills
                  </h3>
                  <ul className="space-y-1 text-sm">
                    <li>Python</li>
                    <li>SQL</li>
                    <li>JAVA</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Figma</li>
                    <li>Canva</li>
                    <li>Video editing</li>
                    <li>MS Office</li>
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div className="md:col-span-2">
                {/* Education Section */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Education</h2>
                  <div className="space-y-6">
                    <div className="border-l-2 border-[#4B79A1] pl-4">
                      <h3 className="text-lg font-semibold text-gray-800">Bachelor of Computer Applications</h3>
                      <p className="text-gray-600">MAKAUT University</p>
                      <p className="text-gray-500 italic">PURSUING</p>
                      <p className="text-gray-600">2022-2025</p>
                    </div>

                    <div className="border-l-2 border-[#4B79A1] pl-4">
                      <h3 className="text-lg font-semibold text-gray-800">CLASS 12</h3>
                      <p className="text-gray-600">CBSE</p>
                      <p className="text-gray-600">AGGREGATE: 68%</p>
                      <p className="text-gray-600">2022</p>
                    </div>

                    <div className="border-l-2 border-[#4B79A1] pl-4">
                      <h3 className="text-lg font-semibold text-gray-800">CLASS 10</h3>
                      <p className="text-gray-600">CBSE</p>
                      <p className="text-gray-600">AGGREGATE: 66%</p>
                      <p className="text-gray-600">2020</p>
                    </div>
                  </div>
                </div>

                {/* About Section */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">ABOUT</h2>
                  <p className="text-gray-600 leading-relaxed">
                    To pursue a good career opportunity and to be a part of progressive organization that gives me a scope to learn, enhance my knowledge while adding value towards the growth of the organization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 