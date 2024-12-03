import { motion } from 'motion/react';

export default function CursorGradient({
  cursorPosition
}: {
  cursorPosition: { x: number; y: number };
}) {
  return (
    <motion.div
      className="fixed pointer-events-none"
      animate={{
        x: cursorPosition.x - 150,
        y: cursorPosition.y - 150
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      style={{ width: '300px', height: '300px' }}
    >
      <div
        className="w-full h-full rounded-full"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(170,199,216,0.4) 0%, rgba(170,199,216,0.1) 40%, rgba(170,199,216,0) 80%)`
        }}
      ></div>
    </motion.div>
  );
}
