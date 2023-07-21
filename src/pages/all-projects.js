import React, { useEffect, useState } from "react";
import { AnimateSharedLayout } from "framer-motion";
import { Layout } from "../layout/Layout";
import { projects } from "../constants/constants";
import { Section, SectionDivider, PageTitle } from "../styles/GlobalComponents";
import { GridContainer } from "../components/Projects/ProjectsStyles";
import ProjectsFilter from "../components/ProjectsFilter/ProjectsFilter";
import ProjectCard from "../components/Cards/ProjectCard";

const AllProjects = () => {
  const [data, setData] = useState([]);
  const [filterBy, setFilterBy] = useState("All");

  useEffect(() => {
    setData(projects);
  }, []);

  const handleFilter = (type) => {
    switch (type) {
      case "proxmox":
        setData([...projects].filter((p) => p.mainType === "proxmox"));
        setFilterBy("Proxmox");
        break;

      case "circleci":
        setData([...projects].filter((p) => p.mainType === "circleci"));
        setFilterBy("CircleCI");
        break;

      case "jenkins":
        setData([...projects].filter((p) => p.mainType === "jenkins"));
        setFilterBy("Jenkins");
        break;
      
      case "argocd":
        setData([...projects].filter((p) => p.mainType === "argocd"));
        setFilterBy("ArgoCD");
        break;

      default:
        setData([...projects]);
        setFilterBy("All");
        break;
    }
  };

  return (
    <Layout>
      <Section nopadding id="projects">
        <SectionDivider divider style={{ marginBottom: 0 }} />
        <PageTitle>All Projects</PageTitle>
        <ProjectsFilter filter={handleFilter} filterBy={filterBy} />
        <AnimateSharedLayout>
          <GridContainer layout>
            {data
              .sort((a, b) => a.order - b.order)
              .map((card) => (
                <ProjectCard item={card} key={card.id} />
              ))}
          </GridContainer>
        </AnimateSharedLayout>
      </Section>
    </Layout>
  );
};

export default AllProjects;
