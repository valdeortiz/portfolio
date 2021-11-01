import React from 'react';
import { AiFillGithub, AiFillGitlab, AiFillInstagram, AiFillLinkedin, AiFillPhone } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Mobile number</LinkTitle>
          <LinkItem href="https://wa.me/595971921474">+595-971-921-474</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:contact@valdeortiz.com">
            contact@valdeortiz.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Software developer from paraguay</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/valdeortiz">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://gitlab.com/valdeortiz">
            <AiFillGitlab size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/valdeortiz/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://wa.me/595971921474">
            <AiFillPhone size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
