import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Valdemar Ortiz <br />
          Welcome to my Portfolio
        </SectionTitle>
        <SectionText>
        Software developer from Paraguay
        </SectionText>
        {/* <Button onClick={props.handleClick}>Contact</Button> */}
        <Button onClick={props.handleClick}>Contact</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;