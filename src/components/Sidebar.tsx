'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

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
        <h1 className="text-2xl font-bold mb-2">Swarnadeep Maity</h1>
        <p className="text-sm opacity-80">Full Stack Developer</p>
      </div>

      <Image
        src="/portfolio_2025/images/profile.jpg"
        alt="Profile"
        width={100}
        height={100}
        className="rounded-full mb-4"
      />

      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`block py-2 px-4 rounded-lg transition-all duration-300 ${
                  pathname === item.path
                    ? 'bg-white/10 text-white glow-red'
                    : 'text-white/70 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto">
        <div className="flex space-x-4 justify-center mb-4">
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors glow-red-social"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://instagram.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors glow-red-social"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </div>
  );
} 