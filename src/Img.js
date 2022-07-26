import React from 'react';
import styled from 'styled-components'
import { width, space } from 'styled-system';

import { Root } from './Root';

const StyledImg = styled.img`
  ${width};
  ${space};
`;

export const Center = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Img = ({ src, ...props}) => (
  <Root>
    <Center>
      <StyledImg src={src} {...props} />
    </Center>
  </Root>
);
