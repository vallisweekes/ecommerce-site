import React from 'react';

import styled from 'styled-components';

import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const SocialIcons = () => {
  return (
    <SocialIconsContainer>
      <a
        href="https://twitter.com/VallisWeekes"
        rel="noopener noreferrer"
        target="_blank"
      >
        <TwitterIcon
          style={{ fontSize: 20 }}
          rel="noopener noreferrer"
          target="_blank"
        />
      </a>
      <a href="https://www.instagram.com/vallis.weekes/">
        <InstagramIcon
          style={{ fontSize: 20 }}
          rel="noopener noreferrer"
          target="_blank"
        />
      </a>
      <a href="https://github.com/vallisweekes">
        <GitHubIcon
          style={{ fontSize: 20 }}
          rel="noopener noreferrer"
          target="_blank"
        />
      </a>
      <a href="https://www.linkedin.com/in/vallisweekes/">
        <LinkedInIcon
          style={{ fontSize: 20 }}
          rel="noopener noreferrer"
          target="_blank"
        />
      </a>
    </SocialIconsContainer>
  );
};

export default SocialIcons;
