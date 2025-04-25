'use client';

import { useState } from 'react';
import { useAuth } from '@clerk/nextjs';
import AuthModal from './AuthModal';
import { motion } from 'framer-motion';

export default function AuthButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isSignedIn, user } = useAuth();

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        onClick={() => setIsModalOpen(true)}
        className="bg-[#4B79A1] hover:bg-[#3A5F80] text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300"
      >
        {isSignedIn ? `Hi, ${user?.firstName}` : 'Sign In'}
      </motion.button>

      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
} 