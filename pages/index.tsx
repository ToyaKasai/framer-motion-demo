import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const MotionIndexWrapper = motion(styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`);

const HeadingLv1 = styled.h1`
  font-size: 20px;
`;

const Index: NextPage = () => {
  return (
    <MotionIndexWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <HeadingLv1>Sample</HeadingLv1>
    </MotionIndexWrapper>
  );
};

export default Index;
