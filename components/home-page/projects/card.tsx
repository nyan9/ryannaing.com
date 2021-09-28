import * as React from "react";
import {
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import LazyImage from "components/ui/lazy-image";
import { useLinkColor } from "components/ui/theme";
import { Tag, getTagColor } from "components/ui/Tags";
import { RiShareBoxLine, RiGithubLine } from "react-icons/ri";

interface ProjectCardProps {
  title: string;
  description: string;
  logo: string;
  blurHash: string;
  link: string;
  github: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  logo,
  blurHash,
  link,
  github,
  technologies,
}) => {
  const linkColor = useLinkColor();
  const textColor = useColorModeValue("gray.500", "gray.200");

  return (
    <motion.div layout>
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
            <HStack width='inherit' spacing={4}>
              <Text
                as={Link}
                href={link}
                fontWeight='bold'
                fontSize='md'
                noOfLines={1}
                color={linkColor}
                mr='auto'
                cursor='pointer'
                isExternal
              >
                {title}
              </Text>

              <Link
                href={link}
                color={linkColor}
                cursor='pointer'
                _hover={{ transform: "scale(1.5)" }}
                isExternal
              >
                <RiShareBoxLine />
              </Link>

              <Link
                href={github}
                color={linkColor}
                cursor='pointer'
                _hover={{ transform: "scale(1.5)" }}
                isExternal
              >
                <RiGithubLine />
              </Link>
            </HStack>
            <HStack spacing='1'>
              {technologies.map((tech, index) => (
                <Tag
                  key={index}
                  size='sm'
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
              <Text fontSize='sm' color={textColor}>
                {description}
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
