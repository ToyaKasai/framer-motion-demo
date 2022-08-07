import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

type SectionWrapperProps = {
  heading: string;
  children: ReactNode;
};

const MotionSectionWrapper = motion(styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  column-gap: 48px;
  width: 100%;
  height: 100vh;
  padding: 48px;
`);

const HeadingLv1 = styled.h1`
  font-size: 28px;
  margin-bottom: 48px;
`;

const ChildrenWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: var(--white-70);
  border-radius: 24px;
`;

const SectionWrapper: FC<SectionWrapperProps> = ({ heading, children }) => {
  return (
    <MotionSectionWrapper
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.6 }}
      transition={{ duration: 1.2 }}
    >
      <HeadingLv1>{heading}</HeadingLv1>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </MotionSectionWrapper>
  );
};

export default SectionWrapper;
