import { FC } from 'react';
import styled from '@emotion/styled';
import DelayViewText from '../animation/DelayViewText';
import { motion, useScroll, useTransform } from 'framer-motion';

const MainVisualWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 48px;
  padding-right: 48px;
  overflow: hidden;
`;

const TitleWrapper = styled.div`
  width: 100%;
`;

const MotionTitle = motion(styled.div`
  width: 100%;
  font-size: 17vw;
  font-weight: bold;
  overflow: hidden;
  display: flex;
  line-height: 1.2;

  &:nth-of-type(2) {
    justify-content: flex-end;
  }
`);

const DescriptionWrapper = styled.div`
  position: absolute;
  bottom: 48px;
  left: 48px;
`;

const Description = styled.div`
  width: 100%;
  overflow: hidden;
`;

const TIlTE_TEXT_LIST = {
  FIRST_ROW: ['F', 'r', 'a', 'm', 'e', 'r'],
  SECOND_ROW: ['m', 'o', 't', 'i', 'o', 'n'],
};
const MainVisual: FC = () => {
  const { scrollYProgress } = useScroll({
    offset: ['start start', '80vh start'],
  });
  const translateX = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const negativeTranslateX = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '-100%']
  );

  return (
    <MainVisualWrapper>
      <TitleWrapper>
        <MotionTitle style={{ translateX: negativeTranslateX }}>
          {TIlTE_TEXT_LIST.FIRST_ROW.map((text, index) => (
            <DelayViewText
              key={`first-row-${index}`}
              delay={(index + 1) * 0.02}
            >
              {text}
            </DelayViewText>
          ))}
        </MotionTitle>
        <MotionTitle style={{ translateX: translateX }}>
          {TIlTE_TEXT_LIST.SECOND_ROW.map((text, index) => (
            <DelayViewText
              key={`second-row-${index}`}
              delay={(index + 1) * 0.02 + 0.2}
            >
              {text}
            </DelayViewText>
          ))}
        </MotionTitle>
      </TitleWrapper>
      <DescriptionWrapper>
        <Description>
          <DelayViewText delay={0.6}>
            This is a site for practicing
          </DelayViewText>
        </Description>
        <Description>
          <DelayViewText delay={0.6}>
            framer-motion library and animation
          </DelayViewText>
        </Description>
      </DescriptionWrapper>
    </MainVisualWrapper>
  );
};
export default MainVisual;
