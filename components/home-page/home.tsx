import {
  Avatar,
  Text,
  Stack,
  Link,
  UnorderedList,
  ListItem,
  useColorModeValue,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { HStack, Flex, Box, Divider } from "@chakra-ui/layout";
import { MotionBox, MotionFlex } from "components/ui/motion";
import Header from "components/layout/header";
import NextLink from "next/link";
import { useLinkColor } from "components/ui/theme";
import siteConfig from "../../configs/site-config";

const ANIMATION_DURATION = 0.5;
const ORANGE = "#ff9400";

const Home: React.FC = () => {
  const linkColor = useLinkColor();

  return (
    <Flex
      id='welcome'
      position='relative'
      direction='column'
      justify='center'
      align='center'
      h='100vh'
      sx={{ scrollSnapAlign: "center" }}
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
          mb={[16, 16, "auto"]}
        >
          <Avatar bg={linkColor} size={"2xl"} src='/assets/images/hi.png' />
        </MotionBox>
        <MotionFlex
          ml={["auto", "auto", 16]}
          m={["auto", "initial"]}
          w={["90%", "85%", "80%"]}
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
          <Box as='h2' fontSize='2xl' fontWeight='400' textAlign='left'>
            My name is{" "}
            <Box as='strong' fontWeight='600'>
              Ryan
            </Box>{" "}
            and I&apos;m a{" "}
            <Box as='span' whiteSpace='nowrap'>
              Full Stack Software Engineer
            </Box>
          </Box>
          <Box as='h2' fontSize='2xl' fontWeight='400' mt={5} textAlign='left'>
            I like all things code.
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
        <Box mt={10}>
          <Stack
            mb={10}
            mx={[0, 0, 10]}
            padding={4}
            align='start'
            borderLeft='4px solid'
            borderColor={"#53c8c4"}
            color={"whatsapp"}
            _hover={{ shadow: "lg" }}
            backgroundColor={useColorModeValue("gray.100", "#1e2533")}
            rounded='sm'
            fontSize='md'
          >
            <Text textAlign='center' color='#53c8c4' fontWeight='bold'>
              Highlights
            </Text>
            <UnorderedList textAlign='left' paddingLeft={5} m={0}>
              <ListItem>
                <NextLink href={"#skills"} passHref>
                  <Link color={linkColor}>Tech Stack</Link>
                </NextLink>
              </ListItem>
            </UnorderedList>
          </Stack>
        </Box>
      </MotionBox>
      <MotionBox
        position='absolute'
        bottom='70px'
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
          spacing={6}
          justifyContent='center'
          wrap='wrap-reverse'
        >
          {siteConfig.author.accounts.map((sc, index) => (
            <Button
              isExternal
              key={index}
              as={Link}
              href={sc.url}
              title={sc.label}
              aria-label={sc.label}
              size='lg'
              fontSize={["lg", "xl"]}
              color={linkColor}
              variant={"outline"}
            >
              {sc.icon}

              {sc.label === "Resume" && (
                <Text fontSize={["sm", "md"]} ml='2'>
                  Resume
                </Text>
              )}
            </Button>
          ))}
        </HStack>
      </MotionBox>
    </Flex>
  );
};

export default Home;
