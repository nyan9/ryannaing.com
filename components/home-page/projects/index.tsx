import { VStack, SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "./card";
import Header from "../../layout/header";
import { AnimateSharedLayout } from "framer-motion";
import { MotionBox } from "../../ui/motion";

interface ProjectsProps {
  projects: project[];
}

const ORANGE = "#ff9400";

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <VStack
      id='projects'
      align='start'
      justify='center'
      spacing={8}
      py='100px'
      min-height={"100vh"}
      // height={"max-content"}
      // sx={{ scrollSnapAlign: "start end" }}
    >
      <Header underlineColor={ORANGE} mb={0}>
        Projects
      </Header>
      <AnimateSharedLayout>
        <SimpleGrid columns={1} mt={10} spacing={8} w='100%'>
          {projects.map((project, index) => (
            <MotionBox whileHover={{ y: -5 }} key={index}>
              <ProjectCard
                title={project.title}
                description={project.desc}
                blurHash={project.blurHash}
                logo={project.logo}
                link={project.link}
                github={project.github}
                technologies={project.technologies}
              />
            </MotionBox>
          ))}
        </SimpleGrid>
      </AnimateSharedLayout>
    </VStack>
  );
};

export default Projects;
