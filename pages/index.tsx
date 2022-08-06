import type { NextPage } from 'next';
import styled from '@emotion/styled';
import MainVisual from '../components/top/MainVisual';

const IndexWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-left: 48px;
  padding-right: 48px;
`;

const Index: NextPage = () => {
  return (
    <IndexWrapper>
      <MainVisual />
    </IndexWrapper>
  );
};

export default Index;
