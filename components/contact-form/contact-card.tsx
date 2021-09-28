import React from "react";
import {
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Box,
  Image,
  Skeleton,
} from "@chakra-ui/react";
import { MotionBox } from "../ui/motion";
import { item } from "../ui/page-transitions";
import { useLinkColor } from "components/ui/theme";

const ContactCard = ({ logo, info }) => {
  const linkColor = useLinkColor();

  return (
    <MotionBox variants={item} width='100%'>
      <MotionBox whileHover={{ y: -5 }}>
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
          <Box p={1} position='relative' color={linkColor}>
            {logo}
          </Box>
          <VStack align='center' maxW='lg' h='100%'>
            <VStack spacing={0} align='center' flexGrow={1}>
              <Text
                fontWeight='bold'
                fontSize='md'
                noOfLines={1}
                color={linkColor}
              >
                {info}
              </Text>
            </VStack>
          </VStack>
        </VStack>
      </MotionBox>
    </MotionBox>
  );
};

export default ContactCard;
