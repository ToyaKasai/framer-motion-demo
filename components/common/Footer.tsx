import { FC } from 'react';
import styled from '@emotion/styled';

const GITHUB_LINK = 'https://github.com/ToyaKasai';

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;
  height: 64px;
`;

const GithubLink = styled.a`
  font-weight: 600;
`;

const Footer: FC = () => {
  return (
    <FooterWrapper>
      <GithubLink href={GITHUB_LINK} target="_blank">
        ©︎ tofu
      </GithubLink>
    </FooterWrapper>
  );
};

export default Footer;
