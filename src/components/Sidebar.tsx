'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Resume', path: '/resume' },
];

const glowAnimation = {
  boxShadow: [
    "0 0 5px rgba(255, 0, 0, 0.3)",
    "0 0 20px rgba(255, 0, 0, 0.5)",
    "0 0 40px rgba(255, 0, 0, 0.7)",
    "0 0 60px rgba(255, 0, 0, 0.9)",
    "0 0 40px rgba(255, 0, 0, 0.7)",
    "0 0 20px rgba(255, 0, 0, 0.5)",
    "0 0 5px rgba(255, 0, 0, 0.3)"
  ],
  textShadow: [
    "0 0 5px rgba(255, 0, 0, 0.5)",
    "0 0 15px rgba(255, 0, 0, 0.7)",
    "0 0 25px rgba(255, 0, 0, 0.9)",
    "0 0 15px rgba(255, 0, 0, 0.7)",
    "0 0 5px rgba(255, 0, 0, 0.5)"
  ]
};

const socialGlowAnimation = {
  boxShadow: [
    "0 0 10px rgba(255, 0, 0, 0.4)",
    "0 0 30px rgba(255, 0, 0, 0.6)",
    "0 0 50px rgba(255, 0, 0, 0.8)",
    "0 0 70px rgba(255, 0, 0, 1)",
    "0 0 50px rgba(255, 0, 0, 0.8)",
    "0 0 30px rgba(255, 0, 0, 0.6)",
    "0 0 10px rgba(255, 0, 0, 0.4)"
  ],
  textShadow: [
    "0 0 10px rgba(255, 0, 0, 0.6)",
    "0 0 20px rgba(255, 0, 0, 0.8)",
    "0 0 30px rgba(255, 0, 0, 1)",
    "0 0 20px rgba(255, 0, 0, 0.8)",
    "0 0 10px rgba(255, 0, 0, 0.6)"
  ]
};

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-[#4B79A1] text-white p-6 flex flex-col z-50">
      <style jsx global>{`
        @keyframes redGlow {
          0% {
            box-shadow: 0 0 5px rgba(255, 0, 0, 0.3);
            text-shadow: 0 0 5px rgba(255, 0, 0, 0.5);
          }
          50% {
            box-shadow: 0 0 30px rgba(255, 0, 0, 0.7);
            text-shadow: 0 0 20px rgba(255, 0, 0, 0.8);
          }
          100% {
            box-shadow: 0 0 5px rgba(255, 0, 0, 0.3);
            text-shadow: 0 0 5px rgba(255, 0, 0, 0.5);
          }
        }
        .glow-red {
          animation: redGlow 1.5s ease-in-out infinite;
        }
        .glow-red:hover {
          transform: scale(1.1);
        }
        .glow-red-social {
          animation: redGlow 1.5s ease-in-out infinite;
        }
        .glow-red-social:hover {
          transform: scale(1.2);
        }
        .glow-button {
          position: relative;
          padding: 10px 20px;
          border-radius: 8px;
          background: transparent;
          color: white;
          border: 2px solid rgba(255, 0, 0, 0.3);
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .glow-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 0, 0, 0.4),
            transparent
          );
          transition: 0.5s;
        }

        .glow-button:hover {
          background: rgba(255, 0, 0, 0.1);
          box-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
          border-color: rgba(255, 0, 0, 0.5);
        }

        .glow-button:hover::before {
          left: 100%;
        }

        .glow-button.active {
          background: rgba(255, 0, 0, 0.2);
          box-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
          border-color: rgba(255, 0, 0, 0.5);
        }

        .glow-social {
          position: relative;
          padding: 8px;
          border-radius: 50%;
          background: transparent;
          color: white;
          border: 2px solid rgba(255, 0, 0, 0.3);
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .glow-social::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 0, 0, 0.4),
            transparent
          );
          transition: 0.5s;
        }

        .glow-social:hover {
          background: rgba(255, 0, 0, 0.1);
          box-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
          border-color: rgba(255, 0, 0, 0.5);
          transform: scale(1.1);
        }

        .glow-social:hover::before {
          left: 100%;
        }
      `}</style>

      <div className="mb-8">
        <h1 className="text-2xl font-bold">Swarnadeep</h1>
        <p className="text-sm opacity-80">Full Stack Developer</p>
      </div>

      <nav className="flex-1">
        <ul className="space-y-4">
          {navItems.map((item) => (
            <motion.li
              key={item.path}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 15px rgba(255, 0, 0, 0.5)",
                textShadow: "0 0 8px rgba(255, 0, 0, 0.8)"
              }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            >
              <Link
                href={item.path}
                className={`block w-full py-2 px-4 rounded-lg ${
                  pathname === item.path
                    ? 'bg-white/20 font-semibold'
                    : 'hover:bg-white/10'
                } transition-all duration-300`}
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Social Links */}
      <div className="mt-auto pt-6 flex justify-center gap-4">
        <motion.a
          href="https://www.linkedin.com/in/swarnadeep-maity-a98a2827a/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#0077B5] transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <FaLinkedin className="w-6 h-6" />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/swarnadeep__maity?igsh=cDJxbWVpZ2FlMWJ4"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#E4405F] transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <FaInstagram className="w-6 h-6" />
        </motion.a>
      </div>
    </div>
  );
} 