import React, { useEffect, useRef } from "react";
import { Image, Box, HStack } from "@chakra-ui/react";
import Services from "./Services";



const Header = () => {
 

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#F3C7A2"
    >
      <Box color="brown" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {}
            <HStack spacing={8}>
              <Image src="https://i.ibb.co/vvgdzNc/yogee-logo.png" min-height="100px" width="200px"/>

            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>

              <a href="#services" onClick={handleClick("services")}>Guided Meditations</a>
              <a href="#getstarted" onClick={handleClick("getstarted")}>Get Started</a>
              <a href="#contactme-section" onClick={handleClick("contactme")}>Schedule a Consultation</a>

            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
