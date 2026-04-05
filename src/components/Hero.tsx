import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Aperture } from 'lucide-react';
import profileImage from '../assets/images/profile2.jpg';

export const Hero = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4 pt-20">
      <div className="absolute inset-0 viewfinder-grid opacity-10" />
      
      {/* Viewfinder Corner Markers */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-4 border-t-4 border-slate-400/30 z-10" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-4 border-t-4 border-slate-400/30 z-10" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-4 border-b-4 border-slate-400/30 z-10" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-4 border-b-4 border-slate-400/30 z-10" />
      
      {/* VU Meters - Left Side */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex gap-1 z-10">
        <motion.div
          className="w-2 h-32 bg-slate-200/20 rounded-full overflow-hidden"
        >
          <motion.div
            className="w-full bg-gradient-to-t from-green-400/60 via-yellow-400/60 to-red-500/60"
            animate={{
              height: ['30%', '70%', '40%', '80%', '30%'],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ originY: 1 }}
          />
        </motion.div>
        <motion.div
          className="w-2 h-32 bg-slate-200/20 rounded-full overflow-hidden"
        >
          <motion.div
            className="w-full bg-gradient-to-t from-green-400/60 via-yellow-400/60 to-red-500/60"
            animate={{
              height: ['50%', '30%', '60%', '40%', '50%'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ originY: 1 }}
          />
        </motion.div>
      </div>
      
      {/* Timecode - Bottom Right */}
      <motion.div
        className="absolute bottom-4 right-4 font-mono text-[10px] text-slate-400/50 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.span
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          TC: 00:00:05:01
        </motion.span>
      </motion.div>
      
      {/* AI Parameters - Bottom Left */}
      <motion.div
        className="absolute bottom-4 left-4 font-mono text-[9px] text-slate-400/40 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div>Steps: 25</div>
        <div>Sampler: Euler a</div>
        <div>CFG: 7.5</div>
      </motion.div>
      
      {/* Coordinate System - Top Right */}
      <motion.div
        className="absolute top-20 right-4 font-mono text-[10px] text-slate-400/30 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <div>X: 1280 Y: 720 Z: 0</div>
        <div>FOV: 45°</div>
      </motion.div>
      
      {/* Decorative Status Bar */}
      <motion.div 
        className="absolute top-4 left-4 z-20 font-mono text-[12px]"
        style={{ color: 'rgba(255, 255, 255, 0.4)' }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.span 
          className="inline-flex items-center gap-1"
          animate={{ 
            opacity: [1, 0.4, 1]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className="inline-block w-2 h-2 rounded-full bg-[#ff0000]" />
          <span className="text-[#ff0000] font-bold">[ REC ] 00:00:05:01 // SYSTEM: ONLINE</span>
        </motion.span>
        <span> // 姚沁彤的视听实验室</span>
      </motion.div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          {/* Loading Status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-2 font-mono text-[11px] text-slate-500 tracking-wider"
          >
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              视听实验室：100% 创作中
            </motion.span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "steps(3)" }}
            >
              ...
            </motion.span>
          </motion.div>
          
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="inline-block bg-neo-pink neo-border px-4 py-1 mb-6 neo-shadow"
          >
            <span className="text-white font-black uppercase tracking-widest text-sm">摄像专业 · 大三在读</span>
          </motion.div>
          
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-black leading-[0.9] mb-8"
          >
            我是 <span className="bg-neo-yellow neo-border px-4 inline-block transform -rotate-2 transition-all duration-300 hover:scale-105 hover:rotate-0 hover:bg-pink-200 hover:opacity-80 hover:text-black relative">姚沁彤<div className="absolute -top-2 -right-2 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="16" rx="2" stroke="#000" strokeWidth="2" fill="#fff"/><circle cx="12" cy="12" r="4" fill="#000"/><path d="M12 8 V16" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><path d="M8 12 H16" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg></div></span>,<br />
            一名 <span className="bg-neo-blue text-white neo-border px-4 inline-block transform rotate-1 text-xl md:text-3xl transition-all duration-300 hover:scale-105 hover:rotate-0 hover:bg-yellow-200 hover:opacity-80 hover:text-black relative">不断学习进步的创作者<div className="absolute -top-2 -right-2 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="16" rx="2" stroke="#000" strokeWidth="2" fill="#fff"/><circle cx="12" cy="12" r="4" fill="#000"/><path d="M12 8 V16" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><path d="M8 12 H16" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg></div></span>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl font-bold text-slate-700 mb-10 max-w-lg leading-relaxed"
          >
            以视听语言为骨，以 AIGC 为翼，探索影像的更多可能，<span className="relative group">为影像叙事注入流动的艺术生命力<span className="absolute bottom-0 left-0 w-full h-2 bg-blue-200 opacity-0 group-hover:opacity-70 transition-opacity duration-300" style={{clipPath: 'polygon(0% 50%, 5% 0%, 10% 50%, 15% 100%, 20% 50%, 25% 0%, 30% 50%, 35% 100%, 40% 50%, 45% 0%, 50% 50%, 55% 100%, 60% 50%, 65% 0%, 70% 50%, 75% 100%, 80% 50%, 85% 0%, 90% 50%, 95% 100%, 100% 50%)'}}></span></span>。
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-6"
          >
            <div className="relative inline-block">
              <button 
                className="neo-button bg-neo-black text-white transition-all duration-300 hover:bg-neo-yellow hover:text-black"
                onClick={() => setShowContact(!showContact)}
              >
                联系我
              </button>
              {showContact && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-4 bg-white neo-border rounded-lg shadow-lg w-64 text-left z-10"
                >
                  <p className="font-bold mb-2">联系方式</p>
                  <p className="mb-1">电话号码：13851803942</p>
                  <p className="mb-1">邮箱：13851803942@163.com</p>
                  <p>微信：KittyYaovo_</p>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-white rotate-45 neo-border"></div>
                </motion.div>
              )}
            </div>
            <button 
              className="neo-button transition-all duration-300 hover:bg-neo-black hover:text-white"
              onClick={() => {
                const element = document.getElementById('portfolio');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              查看作品集
            </button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ scale: 0.8, opacity: 0, rotate: 5 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ type: 'spring', damping: 15 }}
          whileHover={{ scale: 1.05, rotate: -2 }}
          className="relative transition-all duration-500"
        >
          {/* Illustration Style Image Container */}
          <motion.div 
            className="relative z-10 neo-border bg-neo-yellow p-4 neo-shadow rounded-3xl overflow-hidden aspect-square"
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', damping: 10 }}
          >
            <motion.img 
              src={profileImage} 
              alt="姚沁彤"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-2xl neo-border"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', damping: 10 }}
            />
            {/* Camera elements overlay */}
            <motion.div 
              className="absolute top-8 left-8 flex gap-2"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, type: 'spring' }}
            >
              <motion.div 
                className="w-4 h-4 rounded-full bg-neo-pink neo-border"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              />
              <motion.div 
                className="bg-neo-black text-white text-[10px] px-2 py-0.5 font-bold uppercase"
                animate={{ 
                  x: [0, 2, 0]
                }}
                transition={{ 
                  duration: 0.5, 
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              >REC</motion.div>
            </motion.div>
          </motion.div>
          
          {/* Background decorative shapes */}
          <motion.div 
            className="absolute -top-10 -right-10 w-40 h-40 bg-neo-blue neo-border rounded-full -z-10 neo-shadow"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          />
          <motion.div 
            className="absolute -bottom-10 -left-10 w-32 h-32 bg-neo-pink neo-border transform rotate-12 -z-10 neo-shadow"
            animate={{ 
              scale: [1, 1.15, 1],
              rotate: [12, 18, 12]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};
