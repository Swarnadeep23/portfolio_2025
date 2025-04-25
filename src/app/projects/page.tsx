'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'Foody-India - Food Ordering System',
    description: 'A comprehensive food ordering platform that enables users to browse menus, place orders, and make secure payments. Features include user authentication, real-time order tracking, and an admin dashboard.',
    mainImage: '/images/feedback-form.jpg',
    screenshots: [
      {
        src: '/images/payment.jpg',
        alt: 'Payment and Order Summary Interface'
      },
      {
        src: '/images/about.jpg',
        alt: 'About Page with Restaurant Information'
      },
      {
        src: '/images/feedback-form.jpg',
        alt: 'Customer Feedback Form'
      }
    ],
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Bootstrap', 'HTML5', 'CSS3', 'JavaScript', 'SQL'],
    features: [
      'User authentication and profile management',
      'Interactive menu with categories and search',
      'Real-time order tracking system',
      'Secure payment integration (UPI & Cash on Delivery)',
      'Admin dashboard for order management',
      'Responsive design for all devices',
      'Address management system',
      'Order history and status tracking'
    ],
    link: 'https://github.com/yourusername/foody-india'
  }
];

export default function Projects() {
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
          <h1 className="text-4xl font-bold mb-8 text-white">Projects</h1>
          <p className="text-xl text-white mb-12 max-w-3xl">
            Showcasing my flagship project in web development - a full-stack food ordering system that demonstrates my expertise in modern web technologies.
          </p>

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden mb-8"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative h-[400px]">
                  <Image
                    src={project.mainImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Screenshots */}
              <div className="p-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-4">Project Screenshots</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.screenshots.map((screenshot, screenshotIndex) => (
                    <div key={screenshotIndex} className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src={screenshot.src}
                        alt={screenshot.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 