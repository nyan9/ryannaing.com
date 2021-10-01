import * as React from "react";
import {
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Link,
  Box,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import LazyImage from "components/ui/lazy-image";
import { useLinkColor } from "components/ui/theme";
import { Tag, getTagColor } from "components/ui/Tags";
import { RiShareBoxLine, RiGithubLine } from "react-icons/ri";

interface ProjectCardProps {
  title: string;
  description: string;
  info: string;
  logo: string;
  blurHash: string;
  link: string;
  github: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  info,
  logo,
  blurHash,
  link,
  github,
  technologies,
}) => {
  const linkColor = useLinkColor();
  const textColor = useColorModeValue("gray.900", "gray.200");
  const textColorLight = useColorModeValue("gray.500", "gray.400");

  return (
    <motion.div layout>
      <HStack width='inherit' align='center' ml={2} mb={2} spacing={4}>
        <Text
          as={Link}
          href={link}
          fontWeight='bold'
          fontSize={["lg", "xl"]}
          noOfLines={1}
          color={linkColor}
          cursor='pointer'
          _hover={{ transform: "scale(1.1)" }}
          isExternal
        >
          {title}
          <Box as='span' ml={1} fontSize='sm' display='inline-block'>
            <RiShareBoxLine />
          </Box>
        </Text>

        <Link
          href={github}
          color={linkColor}
          cursor='pointer'
          fontSize='2xl'
          _hover={{ transform: "scale(1.2)" }}
          isExternal
        >
          <RiGithubLine />
        </Link>
      </HStack>
      <HStack
        p={4}
        bg={useColorModeValue("white", "gray.800")}
        rounded='xl'
        borderWidth='1px'
        borderColor={useColorModeValue("gray.100", "gray.700")}
        w='100%'
        h='100%'
        wrap='wrap-reverse'
        textAlign='left'
        align='start'
        justify={["center", "center", "center", "space-between"]}
        spacing={0}
        _hover={{ shadow: "lg" }}
      >
        <VStack
          align='start'
          justify='flex-start'
          width={["100%", "100", "100%", "40%"]}
        >
          <VStack align='start' width='100%'>
            <HStack spacing={1} wrap='wrap'>
              {technologies.map((tech, index) => (
                <Tag
                  key={index}
                  size='xs'
                  name={tech}
                  colorScheme={getTagColor(tech)}
                />
              ))}
            </HStack>
          </VStack>
          <AnimatePresence>
            <motion.div
              layout
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
            >
              <Text fontSize='sm' pl={1} color={textColor} mb='auto'>
                {description}
              </Text>
              <br />
              <Text fontSize='sm' pl={1} color={textColorLight}>
                {!!info.length && `* ${info}`}
              </Text>
            </motion.div>
          </AnimatePresence>
        </VStack>

        <LazyImage
          src={logo}
          blurHash={blurHash}
          width={445}
          max-height={255}
          layout='fixed'
          rounded='md'
        />
      </HStack>
    </motion.div>
  );
};

export default ProjectCard;
