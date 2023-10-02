import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Heart Opening Meditation",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "Opening to the Flow Meditation",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Relaxing into Sleep Meditation",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Be Here Now Meditation",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const Services = () => {
  return (
    <FullScreenSection
      backgroundColor="#D89791"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Guided Meditations
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
          
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default Services;
