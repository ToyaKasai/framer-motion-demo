import { FC } from 'react';
import styled from '@emotion/styled';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-header);
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;
  padding-left: 12px;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50px;
`;

const Header: FC = () => {
  return (
    <HeaderWrapper>
      <Image src="/images/profile.PNG" alt="profile icon" />
    </HeaderWrapper>
  );
};
export default Header;
