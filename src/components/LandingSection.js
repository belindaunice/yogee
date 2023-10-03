import React from "react";
import { Image, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";


const greeting = "Meditations for Modern Awareness";
const bio1 = "Breath In...";
const bio2 = "Breath Out";


const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#A6564F"
  >
    <VStack spacing={10}>
     <Image src="https://i.ibb.co/L03S8Nw/yogee-letter.png" height="100px"/>

      <Heading as='h4' size='sm' noOfLines={1}>{greeting}</Heading>
      <VStack spacing={6}></VStack>
      <Heading as='h1' size='3xl' noOfLines={1}>{bio1}</Heading>
      <Heading as='h1' size='4xl' noOfLines={1}>{bio2}</Heading>

    </VStack>
  </FullScreenSection>
);

export default LandingSection;
