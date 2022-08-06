import type { NextPage } from 'next';
import styled from '@emotion/styled';
import DelayViewText from '../components/animation/DelayViewText';

type TitleWrapperProps = {
  isEnd?: boolean;
};

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

const TitleWrapper = styled.div<TitleWrapperProps>`
  width: 100%;
  font-size: 17vw;
  font-weight: bold;
  overflow: hidden;
  display: flex;
  justify-content: ${({ isEnd }) => (isEnd ? 'end' : 'start')};
  line-height: 1.2;
`;

const TIlTE_TEXT_LIST = {
  FIRST_ROW: ['F', 'r', 'a', 'm', 'e', 'r'],
  SECOND_ROW: ['m', 'o', 't', 'i', 'o', 'n'],
};

const Index: NextPage = () => {
  return (
    <IndexWrapper>
      <TitleWrapper>
        {TIlTE_TEXT_LIST.FIRST_ROW.map((text, index) => (
          <DelayViewText key={`first-row-${index}`} delay={(index + 1) * 0.02}>
            {text}
          </DelayViewText>
        ))}
      </TitleWrapper>
      <TitleWrapper isEnd={true}>
        {TIlTE_TEXT_LIST.SECOND_ROW.map((text, index) => (
          <DelayViewText
            key={`second-row-${index}`}
            delay={(index + 1) * 0.02 + 0.4}
          >
            {text}
          </DelayViewText>
        ))}
      </TitleWrapper>
    </IndexWrapper>
  );
};

export default Index;
