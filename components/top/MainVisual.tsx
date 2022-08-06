import { FC } from 'react';
import styled from '@emotion/styled';
import DelayViewText from '../animation/DelayViewText';

const TitleWrapper = styled.div`
  width: 100%;
  font-size: 17vw;
  font-weight: bold;
  overflow: hidden;
  display: flex;
  line-height: 1.2;

  &:nth-of-type(2) {
    justify-content: flex-end;
  }
`;

const DescriptionWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const TIlTE_TEXT_LIST = {
  FIRST_ROW: ['F', 'r', 'a', 'm', 'e', 'r'],
  SECOND_ROW: ['m', 'o', 't', 'i', 'o', 'n'],
};
const MainVisual: FC = () => {
  return (
    <>
      <TitleWrapper>
        {TIlTE_TEXT_LIST.FIRST_ROW.map((text, index) => (
          <DelayViewText key={`first-row-${index}`} delay={(index + 1) * 0.02}>
            {text}
          </DelayViewText>
        ))}
      </TitleWrapper>
      <TitleWrapper>
        {TIlTE_TEXT_LIST.SECOND_ROW.map((text, index) => (
          <DelayViewText
            key={`second-row-${index}`}
            delay={(index + 1) * 0.02 + 0.2}
          >
            {text}
          </DelayViewText>
        ))}
      </TitleWrapper>
      <DescriptionWrapper>
        <DelayViewText delay={0.6}>This is a site for practicing</DelayViewText>
      </DescriptionWrapper>
      <DescriptionWrapper>
        <DelayViewText delay={0.6}>
          framer-motion library and animation
        </DelayViewText>
      </DescriptionWrapper>
    </>
  );
};
export default MainVisual;
