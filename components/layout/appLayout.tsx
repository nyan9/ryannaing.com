import { Fragment } from "react";
import { Box } from "@chakra-ui/react";
import TopNav from "./top-nav";
import Footer from "./footer";

function AppLayout(props) {
  return (
    <Fragment>
      <TopNav />
      <Box
        h='100vh'
        overflowY='scroll'
        sx={{ scrollBehavior: "smooth", scrollSnapType: "y proximity" }}
      >
        <Box
          textAlign='center'
          fontSize='xl'
          w={["90%", "85%", "80%"]}
          maxW={800}
          mx='auto'
        >
          <Box pt={"7rem"} pb={10}>
            {props.children}
          </Box>
        </Box>
        <Footer />
      </Box>
    </Fragment>
  );
}

export default AppLayout;
