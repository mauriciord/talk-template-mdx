import React from 'react';
import styled from 'styled-components'
import { Flex } from 'rebass';
import { space } from 'styled-system';
import { Img } from './Img'

const IconImage = styled.img`
  max-height: 60px;
  max-width: 60px;
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
`;

const Me = styled.img`
  max-width: 150px;
  max-height: 150px;
`;

const MeName = styled.span`
  font-size: 50px;
  color: #25D7FD;
  margin-left: 60px;
`;

const Row = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-bottom: 40px;
`;

export const Center = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SpaceBetween = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Root = styled.div([], {
  // width: '50vw',
  height: '70vh',
});

const Username = styled.span`
  font-size: 14px;
  margin-left: 20px;
`;

const EntriaLogo = styled.img`
  max-width: 600px;
`;

const Subtitle = styled.span`
  font-size: 40px;
  color: #FDAA4C;
  ${space}
`;

const SocialMediaLink = ({ src, link, username }) => (
  <div>
    <Link href={link} target="_blank">
      <Row>
        <IconImage src={src} />
        <Username>{username}</Username>
      </Row>
    </Link>
  </div>
);

export const Intro = () => (
  <Root>
    <Row>
      <Me src={'./img/2022-circle-avatar.png'} />
      <MeName>Mauricio R. Duarte</MeName>
    </Row>
    <SpaceBetween>
      <SocialMediaLink
        src={'./img/github.png'}
        link={'https://github.com/mauriciord'}
        username={'@mauriciord'}
      />
      <SocialMediaLink
        src={'./img/twitter.png'}
        link={'https://twitter.com/mauriciord'}
        username={'@mauriciord'}
      />
    </SpaceBetween>
    <Flex flex={1} alignItems='center' justifyContent='center' mt={30}>
      <Subtitle>Software Engineer</Subtitle>
    </Flex>
    <Img mt={10} width={500} src={'./img/truebase-logo.png'} />
  </Root>
);
