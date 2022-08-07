import { FC, useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import SectionWrapper from '../common/SectionWrapper';

type SwitchWrapperProps = {
  isOn: boolean;
};

const SwitchWrapper = styled.div<SwitchWrapperProps>`
  width: 160px;
  height: 80px;
  border-radius: 50px;
  background-color: var(--white);
  display: flex;
  justify-content: ${({ isOn }) => (isOn ? 'flex-start' : 'flex-end')};
  padding: 10px;
  cursor: pointer;
`;

const MotionSwitch = motion(styled.div`
  width: 60px;
  height: 60px;
  background-color: var(--black);
  border-radius: 50px;
`);

const LayoutSection: FC = () => {
  const [isOn, setIsOn] = useState(false);

  const handleClickSwitch = () => {
    setIsOn((prevState) => !prevState);
  };

  return (
    <SectionWrapper heading="Layout Animation">
      <SwitchWrapper isOn={isOn} onClick={handleClickSwitch}>
        <MotionSwitch
          layout
          transition={{
            duration: 0.2,
          }}
        />
      </SwitchWrapper>
    </SectionWrapper>
  );
};

export default LayoutSection;
