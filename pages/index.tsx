import Home from "components/home-page/home";
import { projectsList } from "data/projects-list";
import { skillsArray } from "data/data";
import PageLayout from "components/layout/pageLayout";
import Skills from "components/skills/skills";
import ContactMe from "components/contact-form";
import Projects from "components/home-page/projects";
import React from "react";

export default function Index({ projects, skills }) {
  return (
    <>
      <PageLayout title='Ryan Naing - Software Engineer'>
        <Home />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <ContactMe />
      </PageLayout>
    </>
  );
}

export function getStaticProps() {
  const projects = projectsList;
  const skills = skillsArray;
  return {
    props: {
      projects,
      skills,
    },
  };
}
