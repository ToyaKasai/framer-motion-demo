import { FC } from 'react';
import { motion, useScroll } from 'framer-motion';
import styled from '@emotion/styled';

const MotionScrollProgress = motion(styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-progress);
  height: 4px;
  background-color: var(--yellow);
  width: 100%;
  transform-origin: 0%;
`);

const ScrollProgress: FC = () => {
  const { scrollYProgress } = useScroll();

  return <MotionScrollProgress style={{ scaleX: scrollYProgress }} />;
};

export default ScrollProgress;
