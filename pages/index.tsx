import Home from "components/home-page/home";
import { projectsList } from "data/projects-list";
import { skillsArray } from "data/data";
import PageLayout from "components/layout/pageLayout";
import Skills from "components/skills/skills";
import ContactMe from "components/contact-form";
import Projects from "components/home-page/projects";

export default function Index({ projects, skills }) {
  return (
    <>
      <PageLayout title='Ryan Naing - Software Engineer'>
        <Home />
      </PageLayout>
      <Projects projects={projects} />
      <Skills skills={skills} />
      <ContactMe />
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
