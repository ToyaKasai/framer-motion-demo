import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import Header from '../common/Header';
import Footer from '../common/Footer';
import ScrollProgress from '../common/ScrollProgress';

type LayoutProps = {
  children: ReactNode;
};

const Main = styled.main`
  width: 100%;
  flex-grow: 1;
`;

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <ScrollProgress />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
