'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCode, FaDesktop, FaDatabase, FaMobile, FaTools, FaPalette } from 'react-icons/fa';

export default function About() {
  const offerings = [
    {
      icon: <FaCode className="w-8 h-8 text-red-500" />,
      title: "Frontend Development",
      skills: ["React.js", "Next.js", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design"]
    },
    {
      icon: <FaDatabase className="w-8 h-8 text-red-500" />,
      title: "Backend Development",
      skills: ["Python", "SQL", "Java", "Database Management"]
    },
    {
      icon: <FaPalette className="w-8 h-8 text-red-500" />,
      title: "Design & Creative",
      skills: ["Figma", "Canva", "Video Editing", "UI/UX Design"]
    },
    {
      icon: <FaTools className="w-8 h-8 text-red-500" />,
      title: "Tools & Software",
      skills: ["MS Office", "Git", "VS Code", "Project Management"]
    }
  ];

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
          className="max-w-6xl mx-auto"
        >
          {/* Introduction Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 mb-12">
            <h1 className="text-4xl font-bold mb-6 text-gray-800 border-b-2 border-red-500 pb-2 inline-block">
              About Me
            </h1>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Hello! I'm Swarnadeep Maity, a passionate Full Stack Developer with a strong foundation in web development technologies. Currently pursuing my Bachelor of Computer Applications at MAKAUT University, I combine my academic knowledge with practical development experience.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  I specialize in creating responsive and user-friendly web applications, with expertise in both frontend and backend development. My goal is to build efficient, scalable, and elegant solutions that solve real-world problems.
                </p>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/profile.jpg"
                  alt="Swarnadeep Maity"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* What I Offer Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              What I Offer
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {offerings.map((offering, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gray-100 rounded-lg mr-4">
                      {offering.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {offering.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {offering.skills.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="flex items-center text-gray-700"
                      >
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* My Approach Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              My Approach
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              I believe in writing clean, maintainable code and following best practices in software development. My approach combines technical expertise with creative problem-solving to deliver high-quality solutions that exceed expectations.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              To pursue a good career opportunity and to be a part of progressive organization that gives me a scope to learn, enhance my knowledge while adding value towards the growth of the organization.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 