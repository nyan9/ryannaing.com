import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { ColorModeSwitcher } from "../ui/ColorModeSwitcher";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { AccentPicker } from "components/Accent";
import { useLinkColor } from "components/ui/theme";

const webLinks = [
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact Me", href: "#contact" },
];

const mobileLinks = [
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact Me", href: "#contact" },
];

interface NavLinkProps {
  index?: number;
  name: string;
  href: string;
  onClose: () => void;
}

const NavLink = (props: NavLinkProps) => {
  const router = useRouter();
  const link = {
    bg: useColorModeValue("gray.200", "gray.900"),
    color: useColorModeValue("blue.500", "blue.200"),
  };

  return (
    <NextLink href={props.href} passHref replace>
      <Link
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
          textDecoration: "none",
          bg: link.bg,
        }}
        onClick={() => props.onClose()}
      >
        {props.name}
      </Link>
    </NextLink>
  );
};

export default function TopNav() {
  const linkColor = useLinkColor();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue("white", "gray.700")}
        px={4}
        boxShadow={"lg"}
        position='fixed'
        width='100%'
        zIndex='55'
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          w={["90%", "85%", "80%"]}
          maxW={800}
          mx='auto'
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            aria-label={"Open Menu"}
            display={["inherit", "inherit", "none"]}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <NextLink href='#about' passHref replace>
              <Link
                as='h2'
                fontSize='2xl'
                fontWeight='black'
                textAlign='left'
                color={linkColor}
                title='Back to top'
                cursor='pointer'
                position='relative'
              >
                RN.
              </Link>
            </NextLink>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {webLinks.map((link, index) => (
                <NavLink
                  key={index}
                  name={link.name}
                  href={link.href}
                  onClose={onClose}
                />
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <AccentPicker
              aria-label='Accent Color Picker'
              variant='ghost'
              zIndex={1}
              color={linkColor}
              mr={2}
            />
            <ColorModeSwitcher justifySelf='flex-end' />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box
            pb={4}
            w={["100%", "100%", "80%"]}
            maxW={800}
            display={["inherit", "inherit", "none"]}
          >
            <Stack as={"nav"} spacing={4}>
              {mobileLinks.map((link, index) => (
                <NavLink
                  key={index}
                  index={index}
                  name={link.name}
                  href={link.href}
                  onClose={onClose}
                />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
