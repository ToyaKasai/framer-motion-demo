import type { NextPage } from 'next';
import styled from '@emotion/styled';
import MainVisual from '../components/top/MainVisual';
import LayoutSection from '../components/top/LayoutSection';

const IndexWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const SectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Index: NextPage = () => {
  return (
    <IndexWrapper>
      <MainVisual />
      <SectionWrapper>
        <LayoutSection />
      </SectionWrapper>
    </IndexWrapper>
  );
};

export default Index;
