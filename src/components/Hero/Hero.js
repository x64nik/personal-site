import React from 'react';

import {Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import {LeftSection} from './HeroStyles';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        <TypeAnimation 
          sequence={[
            '~$ whoami',
            50
          ]}
          wrapper="span"
          speed={2}
          style={{ fontSize: '1em', display: 'inline-block' }}
          repeat={Infinity}
        />
        </SectionTitle>
        <SectionTitle>
          Rushi
        </SectionTitle>
        <SectionText style={{paddingBottom:0}}>
        I am a DevOps and Cyber Security enthusiast, always ready to learn new tools and technologies.
        </SectionText>
        {/*<Button onClick={props.handleClick}>Learn More</Button>*/}
      </LeftSection>
    </Section>
  </>
);

export default Hero;