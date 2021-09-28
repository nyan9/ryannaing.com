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
import { usePalette } from "react-palette";
import { MotionBox } from "../ui/motion";
import { item } from "../ui/page-transitions";
import { useLinkColor } from "components/ui/theme";

const SkillCard = ({ name, image }) => {
  const linkColor = useLinkColor();
  const { data, loading } = usePalette(image);

  return (
    <MotionBox variants={item}>
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
          <Box
            rounded='lg'
            p={1}
            position='relative'
            overflow='hidden'
            lineHeight={0}
            boxShadow='inset 0 0 1px 1px rgba(0, 0, 0, 0.015)'
          >
            <Box
              bg={data.lightVibrant}
              position='absolute'
              top={0}
              bottom={0}
              left={0}
              right={0}
              opacity={0.25}
            ></Box>
            {loading ? (
              <Skeleton height={35} width={35} rounded='md' />
            ) : (
              <Image
                src={image}
                height={35}
                width={35}
                layout='fixed'
                rounded='md'
              />
            )}
          </Box>
          <VStack align='center' maxW='lg' h='100%'>
            <VStack spacing={0} align='center' flexGrow={1}>
              <Text
                fontWeight='bold'
                fontSize='md'
                noOfLines={1}
                color={linkColor}
              >
                {name}
              </Text>
            </VStack>
          </VStack>
        </VStack>
      </MotionBox>
    </MotionBox>
  );
};

export default SkillCard;
