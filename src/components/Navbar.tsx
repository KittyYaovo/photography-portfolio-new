import React from 'react';
import { motion } from 'motion/react';
import { Camera, Video, User, Home, Mail } from 'lucide-react';

const navItems = [
  { id: 'home', label: '首页' },
  { id: 'experience', label: '经历' },
  { id: 'portfolio', label: '作品' },
  { id: 'about', label: '关于我' },
];

export const Navbar = ({ activeSection, onNavigate }: { activeSection: string, onNavigate: (id: string) => void }) => {
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <div className="neo-border bg-white px-8 py-3 rounded-full flex items-center gap-8 neo-shadow">
        <div className="w-6 h-6 rounded-full border-4 border-neo-black bg-neo-yellow mr-4" />
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`interactive text-sm font-black uppercase tracking-widest transition-colors ${activeSection === item.id ? 'text-neo-pink' : 'text-neo-black hover:text-neo-blue'}`}
          >
            {item.label}
          </button>
        ))}
        <button className="neo-border p-2 bg-neo-black text-white rounded-lg ml-4 interactive">
          <Mail className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
};
