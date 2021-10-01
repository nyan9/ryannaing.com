import {
  Avatar,
  Text,
  Stack,
  Link,
  UnorderedList,
  ListItem,
  useColorModeValue,
  IconButton,
  Button,
  Image,
} from "@chakra-ui/react";
import { HStack, Flex, Box } from "@chakra-ui/layout";
import { MotionBox, MotionFlex } from "components/ui/motion";
import Header from "components/layout/header";
import NextLink from "next/link";
import { useLinkColor } from "components/ui/theme";
import siteConfig from "../../configs/site-config";
import styles from "./home.module.css";
import { useBreakpointValue } from "@chakra-ui/media-query";

const ANIMATION_DURATION = 0.5;
const ORANGE = "#ff9400";

const Home: React.FC = () => {
  const linkColor = useLinkColor();

  return (
    <Flex
      id='about'
      position='relative'
      direction='column'
      justify='center'
      align='center'
      minHeight='100vh'
      sx={{ scrollSnapAlign: "start" }}
    >
      <Flex direction={["column", "column", "row"]}>
        <MotionBox
          opacity='0'
          initial={{
            translateX: -150,
            opacity: 0,
          }}
          animate={{
            translateX: 0,
            opacity: 1,
            transition: {
              duration: ANIMATION_DURATION,
            },
          }}
          m='auto'
          mb={[1, 2, "auto"]}
        >
          <Avatar
            bg={linkColor}
            size={useBreakpointValue({ base: "xl", md: "2xl" })}
            src='/assets/images/logos/avatar.png'
          />
        </MotionBox>
        <MotionFlex
          ml={["auto", "auto", 16]}
          m={["auto", "initial"]}
          w={["100%", "90%", "80%"]}
          maxW='800px'
          opacity='0'
          justify='center'
          direction='column'
          initial={{
            opacity: 0,
            translateX: 150,
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              duration: ANIMATION_DURATION,
            },
          }}
        >
          <Header underlineColor={ORANGE} emoji='👋' mt={0}>
            Hello!
          </Header>
          <Box
            as='h2'
            fontSize={["md", "lg", "2xl"]}
            fontWeight='400'
            textAlign='left'
          >
            My name is{" "}
            <Box as='strong' fontWeight='600'>
              Ryan
            </Box>{" "}
            and I&apos;m a{" "}
            <Box as='span' whiteSpace='nowrap'>
              Full Stack Software Engineer.
            </Box>
          </Box>
          <Box
            as='h2'
            fontSize={["sm", "lg", "xl"]}
            fontWeight='400'
            mt={[3, 5]}
            textAlign='left'
          >
            I enjoy solving problems, debugging, and writing clean reuseable
            code. I completed App Academy where I quickly absorbed the ins and
            outs of full-stack software development, and breathed code for over
            80 hours a week. I&apos;m always looking to learn new technologies,
            design patterns, or methods to optimize my code quality and
            efficiency.
          </Box>
          <Box
            as='h2'
            fontSize={["sm", "lg", "xl"]}
            fontWeight='400'
            mt={[3, 5]}
            textAlign='left'
          >
            When I&apos;m not coding, I&apos;m usually lifting weights, hiking,
            building PCs, watching stand up comedy, or watching combat sports.
          </Box>
        </MotionFlex>
      </Flex>
      <MotionBox
        w='100%'
        opacity='0'
        initial={{
          translateY: 80,
        }}
        animate={{
          translateY: 0,
          opacity: 1,
          transition: {
            delay: ANIMATION_DURATION - 0.1,
            duration: ANIMATION_DURATION,
          },
        }}
      >
        <Box mt={[5, 10, 10]}>
          <Stack
            mb={[5, 5, 10]}
            mx={[0, 0, 10]}
            py={[2, 2, 4]}
            px={4}
            align='start'
            borderLeft='4px solid'
            borderColor={"#53c8c4"}
            color={"whatsapp"}
            _hover={{ shadow: "lg" }}
            backgroundColor={useColorModeValue("gray.100", "#1e2533")}
            rounded='sm'
          >
            <Text
              textAlign='center'
              fontSize={["md", "md", "lg"]}
              color='#53c8c4'
              fontWeight='bold'
            >
              Highlights
            </Text>
            <UnorderedList textAlign='left' paddingLeft={5} m={0}>
              <ListItem mt={[0, 0, 1]}>
                <NextLink href={"#skills"} passHref>
                  <Link fontSize={["sm", "sm", "md"]} color={linkColor}>
                    Tech Stack
                  </Link>
                </NextLink>
              </ListItem>
            </UnorderedList>
          </Stack>
          <MotionBox
            w='100%'
            opacity='0'
            initial={{
              translateY: 80,
            }}
            animate={{
              translateY: 0,
              opacity: 1,
              transition: {
                delay: ANIMATION_DURATION - 0.3,
                duration: ANIMATION_DURATION,
              },
            }}
          >
            <HStack
              w='100%'
              spacing={[2, 4]}
              justifyContent='center'
              wrap='wrap-reverse'
            >
              {siteConfig.author.accounts.map((sc, index) =>
                sc.label === "Resume" ? (
                  <Button
                    key={index}
                    as={Link}
                    href={sc.url}
                    title={sc.label}
                    aria-label={sc.label}
                    size={useBreakpointValue({ base: "md", md: "lg" })}
                    fontSize={["lg", "xl", "xl"]}
                    color={linkColor}
                    variant={"outline"}
                    leftIcon={sc.icon}
                    isExternal
                  >
                    Resume
                  </Button>
                ) : (
                  <IconButton
                    key={index}
                    as={Link}
                    href={sc.url}
                    size='xs'
                    fontSize={["lg", "xl"]}
                    variant='ghost'
                    aria-label={sc.label}
                    isExternal
                  >
                    {sc.icon}
                  </IconButton>
                )
              )}
            </HStack>
          </MotionBox>
        </Box>
      </MotionBox>

      <NextLink href={"#projects"} passHref replace>
        <Link>
          <div className={styles.mouseIcon}>
            <div
              className={styles.mouse}
              style={{
                background: useColorModeValue("#CBD5E0", "#25324c"),
              }}
            ></div>
            <span
              className={[styles.arrow, styles.arrow01].join(" ")}
              style={{
                borderBottomColor: useColorModeValue("#25324c", "#CBD5E0"),
                borderRightColor: useColorModeValue("#25324c", "#CBD5E0"),
              }}
            ></span>
          </div>
        </Link>
      </NextLink>
    </Flex>
  );
};

export default Home;
