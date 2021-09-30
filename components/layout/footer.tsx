import { Stack, Text, useColorModeValue, Flex } from "@chakra-ui/react";
import siteConfig from "../../configs/site-config";

// const iconProps = {
//   variant: "ghost",
//   size: "lg",
//   isRound: true,
// };

const Footer = () => {
  return (
    <Stack
      as='footer'
      spacing={[1, 2]}
      p={4}
      justifyContent='center'
      alignItems='center'
      w={["100%", "85%", "80%"]}
      maxW={800}
      mx='auto'
      overflowY='hidden'
    >
      <Flex justifyContent='start' alignItems='center' w='100%'>
        <Text
          textAlign='center'
          fontSize='sm'
          color={useColorModeValue("gray.500", "gray.200")}
        >
          {siteConfig.copyright}
        </Text>

        {/* <Box textAlign='center'>
          {siteConfig.author.accounts.map((sc, index) => (
            <IconButton
              key={index}
              as={Link}
              isExternal
              href={sc.url}
              title={sc.label}
              aria-label={sc.label}
              size='lg'
              color={linkColor}
              icon={sc.icon}
              {...iconProps}
            />
          ))}
        </Box> */}
      </Flex>
    </Stack>
  );
};

export default Footer;
