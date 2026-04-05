import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.interactive') ||
        target.closest('.neo-button');
      
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Outer ring - focus circle */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: position.x,
          top: position.y,
          x: '-50%',
          y: '-50%',
        }}
        animate={{
          width: isHovering ? 20 : 32,
          height: isHovering ? 20 : 32,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 400 }}
      >
        {/* Circle border */}
        <motion.div
          className="w-full h-full rounded-full border-2"
          animate={{
            borderColor: isHovering ? '#ef4444' : '#000000',
          }}
          transition={{ duration: 0.15 }}
        />
        
        {/* Crosshair lines */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ opacity: isHovering ? 0.6 : 1 }}
        >
          <div 
            className="absolute w-full h-[1px]"
            style={{ backgroundColor: isHovering ? '#ef4444' : '#000000' }}
          />
          <div 
            className="absolute h-full w-[1px]"
            style={{ backgroundColor: isHovering ? '#ef4444' : '#000000' }}
          />
        </motion.div>
      </motion.div>

      {/* Center dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999] w-1.5 h-1.5 rounded-full"
        style={{
          left: position.x,
          top: position.y,
          x: '-50%',
          y: '-50%',
          backgroundColor: isHovering ? '#ef4444' : '#000000',
        }}
        animate={{
          scale: isHovering ? 1.3 : 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 400 }}
      />
    </>
  );
};
