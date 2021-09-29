import { HStack, Flex, VStack, Box, Divider } from "@chakra-ui/layout";
import { IconButton, Link, Tooltip } from "@chakra-ui/react";
import ContactForm from "./form";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import Header from "components/layout/header";
import ContactCard from "./contact-card";
import siteConfig from "../../configs/site-config";
import { useLinkColor } from "components/ui/theme";

const ContactMe = () => {
  const linkColor = useLinkColor();
  return (
    <VStack
      id='contact'
      align='start'
      justify='center'
      py='80px'
      height={"max-content"}
      mb={0}
      sx={{ scrollSnapAlign: "end" }}
    >
      <Header mt={0} mb={0}>
        Send me a message!
      </Header>

      <Flex
        direction={["column", "column", "row"]}
        w='100%'
        justify='space-between'
        align='center'
      >
        <Box mt={6} w='100%'>
          <ContactForm />
        </Box>

        <VStack pt={[12, 12, 0]} spacing={4}>
          <ContactCard
            logo={<FaPhoneAlt />}
            info='(917)743-9854'
            color={linkColor}
            type='phone'
          />

          <ContactCard
            logo={<MdMail />}
            info='RynNaing@gmail.com'
            color={linkColor}
            type='email'
          />

          <Divider />

          <HStack w='100%' pb='12' justifyContent='space-between'>
            {siteConfig.author.accounts.map((sc, index) => (
              <Tooltip key={index} label={sc.label} aria-label={sc.label}>
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
                  isRound={true}
                  variant={"outline"}
                />
              </Tooltip>
            ))}
          </HStack>
        </VStack>
      </Flex>
    </VStack>
  );
};

export default ContactMe;
