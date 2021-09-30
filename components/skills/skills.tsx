import * as React from "react";
import { useState } from "react";
import {
  Icon,
  VStack,
  HStack,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";

import PageLayout from "../layout/pageLayout";
import Header from "components/layout/header";
import Section from "components/skills/section";
import SkillCard from "components/skills/skill-card";
import { container, PageSlideFade } from "components/ui/page-transitions";
import {
  AiTwotoneThunderbolt,
  AiOutlineCloudServer,
  AiOutlineTool,
} from "react-icons/ai";
import { BiDesktop } from "react-icons/bi";
import { GiSpiderWeb } from "react-icons/gi";
import { MotionBox } from "components/ui/motion";

const Skills = ({ skills }) => {
  const [skillsList, setSkillsList] = useState([]);

  React.useEffect(() => {
    setSkillsList(skills);
  }, []);

  const filterSkills = (tab) => {
    if (tab.length)
      setSkillsList(skills.filter((skill) => skill.type.includes(tab)));
    else setSkillsList(skills);
  };

  return (
    <PageSlideFade>
      <VStack
        align='start'
        justify='center'
        id='skills'
        pt={["100px", "100px", "0"]}
        minHeight={"100vh"}
      >
        <Section>
          <Header mt={0} mb={0}>
            Tech Stack
          </Header>
        </Section>
        <Section>
          <Tabs
            mt={4}
            variant='soft-rounded'
            colorScheme='blue'
            align='start'
            w='100%'
          >
            <TabList display='flex' flexWrap='wrap'>
              <Tab
                bg={useColorModeValue("gray.100", "gray.800")}
                color={useColorModeValue("gray.600", "gray.500")}
                _selected={{
                  color: "cyan.800",
                  bg: "cyan.100",
                }}
                mr={2}
                mt={2}
                onClick={() => filterSkills("")}
              >
                <HStack spacing={1}>
                  <Icon as={AiTwotoneThunderbolt} />
                  <Text>All</Text>
                </HStack>
              </Tab>
              <Tab
                bg={useColorModeValue("gray.100", "gray.800")}
                color={useColorModeValue("gray.600", "gray.500")}
                _selected={{
                  color: "green.800",
                  bg: "green.100",
                }}
                mr={2}
                mt={2}
                onClick={() => filterSkills("frontend")}
              >
                <HStack spacing={1}>
                  <Icon as={BiDesktop} />
                  <Text>Front End</Text>
                </HStack>
              </Tab>
              <Tab
                bg={useColorModeValue("gray.100", "gray.800")}
                color={useColorModeValue("gray.600", "gray.500")}
                _selected={{
                  color: "yellow.800",
                  bg: "yellow.100",
                }}
                mr={2}
                mt={2}
                onClick={() => filterSkills("backend")}
              >
                <HStack spacing={1}>
                  <Icon as={GiSpiderWeb} />
                  <Text>Back End</Text>
                </HStack>
              </Tab>
              <Tab
                bg={useColorModeValue("gray.100", "gray.800")}
                color={useColorModeValue("gray.600", "gray.500")}
                _selected={{
                  color: "teal.800",
                  bg: "teal.100",
                }}
                mr={2}
                mt={2}
                onClick={() => filterSkills("database")}
              >
                <HStack spacing={1}>
                  <Icon as={AiOutlineCloudServer} />
                  <Text>Database</Text>
                </HStack>
              </Tab>
              <Tab
                bg={useColorModeValue("gray.100", "gray.800")}
                color={useColorModeValue("gray.600", "gray.500")}
                _selected={{
                  color: "pink.800",
                  bg: "pink.100",
                }}
                mr={2}
                mt={2}
                onClick={() => filterSkills("tool")}
              >
                <HStack spacing={1}>
                  <Icon as={AiOutlineTool} />
                  <Text>Tool</Text>
                </HStack>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel px={0}>
                <MotionBox
                  variants={container}
                  initial='hidden'
                  animate='visible'
                >
                  <SimpleGrid columns={[3, 3, 5]} spacing={4} mt={8}>
                    {skillsList.map((skill, index) => (
                      <SkillCard
                        key={index}
                        name={skill.name}
                        image={skill.image}
                      />
                    ))}
                  </SimpleGrid>
                </MotionBox>
              </TabPanel>
              <TabPanel px={0}>
                <MotionBox
                  variants={container}
                  initial='hidden'
                  animate='visible'
                >
                  <SimpleGrid columns={[3]} spacing={4} mt={8}>
                    {skillsList.map((skill, index) => (
                      <SkillCard
                        key={index}
                        name={skill.name}
                        image={skill.image}
                      />
                    ))}
                  </SimpleGrid>
                </MotionBox>
              </TabPanel>
              <TabPanel px={0}>
                <MotionBox
                  variants={container}
                  initial='hidden'
                  animate='visible'
                >
                  <SimpleGrid columns={[3]} spacing={4} mt={8}>
                    {skillsList.map((skill, index) => (
                      <SkillCard
                        key={index}
                        name={skill.name}
                        image={skill.image}
                      />
                    ))}
                  </SimpleGrid>
                </MotionBox>
              </TabPanel>
              <TabPanel px={0}>
                <MotionBox
                  variants={container}
                  initial='hidden'
                  animate='visible'
                >
                  <SimpleGrid columns={[3]} spacing={4} mt={8}>
                    {skillsList.map((skill, index) => (
                      <SkillCard
                        key={index}
                        name={skill.name}
                        image={skill.image}
                      />
                    ))}
                  </SimpleGrid>
                </MotionBox>
              </TabPanel>
              <TabPanel px={0}>
                <MotionBox
                  variants={container}
                  initial='hidden'
                  animate='visible'
                >
                  <SimpleGrid columns={[3]} spacing={4} mt={8}>
                    {skillsList.map((skill, index) => (
                      <SkillCard
                        key={index}
                        name={skill.name}
                        image={skill.image}
                      />
                    ))}
                  </SimpleGrid>
                </MotionBox>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Section>
      </VStack>
    </PageSlideFade>
  );
};

export default Skills;
