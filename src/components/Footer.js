import React from "react";
import {Box, Flex} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#8C4B45">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>Yogee Guided Meditations • © 2030</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
