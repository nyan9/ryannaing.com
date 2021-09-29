import React from "react";
import {
  VStack,
  Text,
  useColorModeValue,
  Box,
  Link,
  Button,
  useToast,
  Portal,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Tooltip,
} from "@chakra-ui/react";
import { MotionBox } from "../ui/motion";
import { item } from "../ui/page-transitions";

const ContactCard = ({ logo, info, color, type }) => {
  const toast = useToast();

  const copyTextToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast({
          title: "📋 Copied to clipboard!",
          status: "success",
          isClosable: true,
        });
      },
      () =>
        toast({
          title: "🚨 Failed. Try copying again",
          status: "error",
          isClosable: true,
        })
    );
  };

  return (
    <MotionBox variants={item} width='100%'>
      <MotionBox whileHover={{ y: -5 }}>
        {type === "email" ? (
          <Popover>
            <PopoverTrigger>
              <Tooltip label='Open your mail' aria-label='Open your mail'>
                <VStack
                  p={4}
                  bg={useColorModeValue("white", "gray.800")}
                  rounded='xl'
                  borderWidth='1px'
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                  w='100%'
                  textAlign='center'
                  align='center'
                  spacing={2}
                  cursor='pointer'
                  _hover={{ shadow: "md" }}
                >
                  <Box p={1} position='relative' color={color}>
                    {logo}
                  </Box>

                  <VStack spacing={0} align='center' flexGrow={1}>
                    <Text
                      fontWeight='bold'
                      fontSize='md'
                      noOfLines={1}
                      color={color}
                    >
                      {info}
                    </Text>
                  </VStack>
                </VStack>
              </Tooltip>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverArrow />
                <PopoverHeader>Open Your Email Client?</PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                  <Button
                    as={Link}
                    href={"mailto:RynNaing@gmail.com"}
                    color={useColorModeValue("white", "gray.700")}
                    bg={color}
                  >
                    Open
                  </Button>
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
        ) : (
          <Popover>
            <PopoverTrigger>
              <Tooltip label='Copy my number' aria-label='Copy my number'>
                <VStack
                  p={4}
                  bg={useColorModeValue("white", "gray.800")}
                  rounded='xl'
                  borderWidth='1px'
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                  w='100%'
                  textAlign='center'
                  align='center'
                  spacing={2}
                  cursor='pointer'
                  _hover={{ shadow: "md" }}
                >
                  <Box p={1} position='relative' color={color}>
                    {logo}
                  </Box>

                  <VStack spacing={0} align='center' flexGrow={1}>
                    <Text
                      fontWeight='bold'
                      fontSize='md'
                      noOfLines={1}
                      color={color}
                    >
                      {info}
                    </Text>
                  </VStack>
                </VStack>
              </Tooltip>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverArrow />
                <PopoverHeader>Copy my number?</PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                  <Button
                    onClick={() => {
                      copyTextToClipboard(info);
                    }}
                    color={useColorModeValue("white", "gray.700")}
                    bg={color}
                  >
                    Copy
                  </Button>
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
        )}
      </MotionBox>
    </MotionBox>
  );
};

export default ContactCard;
