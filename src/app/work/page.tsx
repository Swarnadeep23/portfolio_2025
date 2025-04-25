'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const workExperiences = [
  {
    company: 'Tech Solutions Inc.',
    position: 'Senior Full Stack Developer',
    period: '2022 - Present',
    description: 'Led the development of multiple full-stack web applications using React, Node.js, and MongoDB. Implemented responsive designs and optimized performance. Mentored junior developers and conducted code reviews.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'AWS', 'Docker'],
    achievements: [
      'Reduced application load time by 40% through code optimization and caching strategies',
      'Implemented CI/CD pipeline that reduced deployment time by 60%',
      'Developed a reusable component library that increased development speed by 30%'
    ]
  },
  {
    company: 'Digital Innovations',
    position: 'Full Stack Developer',
    period: '2020 - 2022',
    description: 'Developed and maintained web applications using React and Node.js. Integrated third-party APIs and services. Implemented database designs and optimizations.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'RESTful APIs', 'Redux'],
    achievements: [
      'Built a real-time notification system that improved user engagement by 25%',
      'Implemented authentication system with JWT and OAuth2',
      'Created responsive designs that increased mobile user engagement by 35%'
    ]
  },
  {
    company: 'WebCraft Solutions',
    position: 'Frontend Developer',
    period: '2018 - 2020',
    description: 'Focused on frontend development using React and modern JavaScript. Collaborated with backend developers to integrate APIs. Implemented responsive designs and ensured cross-browser compatibility.',
    technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'SASS', 'Webpack'],
    achievements: [
      'Developed a component library that standardized UI elements across projects',
      'Implemented responsive designs for all client projects',
      'Optimized frontend performance, reducing page load times by 50%'
    ]
  }
];

export default function Work() {
  return (
    <div className="min-h-screen py-20 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/mountain-bg.jpg"
          alt="Mountain Background"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-gray-800">Work Experience</h1>
          <p className="text-xl text-gray-600 mb-12">
            My professional journey in software development, highlighting key roles, responsibilities, and achievements.
          </p>

          <div className="space-y-12">
            {workExperiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{experience.position}</h2>
                    <h3 className="text-xl text-gray-700">{experience.company}</h3>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="inline-block bg-gray-100 text-gray-700 px-4 py-1 rounded-full">
                      {experience.period}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{experience.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 