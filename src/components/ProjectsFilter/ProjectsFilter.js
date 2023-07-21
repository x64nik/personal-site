import React from "react";
import { FilterContainer, Button, FilterHeading } from "./ProjectsFilterStyles";
import { SiProxmox, SiCircleci, SiJenkins, SiArgo } from "react-icons/si";

const ProjectsFilter = ({ filter, filterBy }) => (
  <section>
    <FilterHeading>
      Filtered by: <b>{filterBy}</b>
    </FilterHeading>
    <FilterContainer>
      <Button
        type="button"
        className={filterBy === "All" ? "active" : null}
        aria-label="Filter by All"
        onClick={() => filter("All")}
      >
        All
      </Button>
      <Button
        type="button"
        className={filterBy === "Jenkins" ? "active" : null}
        aria-label="Filter by JS"
        onClick={() => filter("jenkins")}
      >
        <SiJenkins />
      </Button>
      <Button
        type="button"
        className={filterBy === "Proxmox" ? "active" : null}
        aria-label="Filter by Proxmox"
        onClick={() => filter("proxmox")}
      >
        <SiProxmox />
      </Button>
      <Button
        type="button"
        className={filterBy === "CircleCI" ? "active" : null}
        aria-label="Filter by CircleCI"
        onClick={() => filter("circleci")}
      >
        <SiCircleci />
      </Button>

      <Button
        type="button"
        className={filterBy === "ArgoCD" ? "active" : null}
        aria-label="Filter by ArgoCD"
        onClick={() => filter("argocd")}
      >
        <SiArgo />
      </Button>

    </FilterContainer>
  </section>
);

export default ProjectsFilter;
