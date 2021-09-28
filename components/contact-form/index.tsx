import { HStack, Flex, VStack, Box, Divider } from "@chakra-ui/layout";
import ContactForm from "./form";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import Header from "components/layout/header";
import ContactCard from "./contact-card";

const ContactMe = () => {
  return (
    <VStack align='start' mb={10}>
      <Header mt={0} mb={0} id='contact-me'>
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

        <VStack p={12} spacing={6}>
          <ContactCard logo={<FaPhoneAlt />} info='(917)743-9854' />
          <Divider />
          <ContactCard logo={<MdMail />} info='RynNaing@gmail.com' />
        </VStack>
      </Flex>
    </VStack>
  );
};

export default ContactMe;
