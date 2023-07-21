import React from "react";
import { DiJenkins, DiDocker, DiGit, DiLinux, DiPython } from "react-icons/di";
import { SiAnsible, SiCircleci, SiTerraform, SiGnubash, SiNginx, SiArgo, SiKubernetes } from "react-icons/si";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with the following technologies and programming languages in the DevOps world. Now I'm focused towards Kubernetes.
    </SectionText>
    <List>

      <ListItem>
        <picture>
          <DiDocker size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>Docker</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <SiKubernetes size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>Kubernetes</ListTitle>
        </ListContainer>
      </ListItem>
    
      <ListItem>
        <picture>
          <DiJenkins size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>Jenkins</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <SiCircleci size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>CircleCI</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <SiArgo size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>ArgoCD</ListTitle>
        </ListContainer>
      </ListItem>


      <ListItem>
        <picture>
          <DiGit size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>Git</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <SiAnsible size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>Ansible</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <SiTerraform size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>Terraform</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiLinux size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>Linux</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <SiGnubash size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>Bash</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiPython size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>Python</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <SiNginx size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>Nginx</ListTitle>
        </ListContainer>
      </ListItem>

  




    </List>
  </Section>
);

export default Technologies;
