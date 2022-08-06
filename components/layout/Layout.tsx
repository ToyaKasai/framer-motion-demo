import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';

type LayoutProps = {
  children: ReactNode;
};

const Main = styled.main`
  width: 100%;
  height: 100%;
`;

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
