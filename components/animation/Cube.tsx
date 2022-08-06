import { FC } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

type CubeProps = {
  delay: 0.1 | 0.2 | 0.3 | 0.4 | 0.5;
  onAnimationComplete?: () => void;
};

type CubeGridProps = {
  onAnimationComplete: () => void;
};

const CubeWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 56px;
  height: 56px;
`;

const MotionCube = motion(styled.div`
  background-color: var(--white);
`);

const Cube: FC<CubeProps> = ({ delay, onAnimationComplete }) => {
  return (
    <MotionCube
      animate={{
        scaleX: [1, 0, 1, 1],
        scaleY: [1, 0, 1, 1],
        scaleZ: [1, 1, 1, 1],
      }}
      transition={{
        delay: delay,
        duration: 1.3,
        repeat: 2,
        times: [0, 0.35, 0.7, 1],
      }}
      onAnimationComplete={onAnimationComplete}
    />
  );
};

const CubeGrid: FC<CubeGridProps> = ({ onAnimationComplete }) => {
  return (
    <CubeWrapper>
      <Cube delay={0.3} />
      <Cube delay={0.4} />
      <Cube delay={0.5} onAnimationComplete={onAnimationComplete} />
      <Cube delay={0.2} />
      <Cube delay={0.3} />
      <Cube delay={0.4} />
      <Cube delay={0.1} />
      <Cube delay={0.2} />
      <Cube delay={0.3} />
    </CubeWrapper>
  );
};

export default CubeGrid;
