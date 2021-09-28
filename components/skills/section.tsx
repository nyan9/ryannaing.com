import React from "react";
import { Flex } from "@chakra-ui/react";

const Section = (props) => {
  const { full, children, ...rest } = props;
  return (
    <Flex as='section' {...rest} w='100%'>
      {children}
    </Flex>
  );
};

export default Section;
