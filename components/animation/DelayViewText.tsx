import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

type DelayViewTextProps = {
  children: ReactNode;
  delay: number;
};

const DelayViewText: FC<DelayViewTextProps> = ({ children, delay }) => {
  return (
    <motion.p
      initial={{ y: '100%' }}
      animate={{ y: '0%' }}
      transition={{ duration: 0.8, delay: delay, ease: 'easeInOut' }}
    >
      {children}
    </motion.p>
  );
};

export default DelayViewText;
